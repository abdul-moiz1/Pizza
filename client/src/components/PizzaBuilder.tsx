import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import type { PizzaSize, PizzaCrust, PizzaSauce, PizzaTopping } from "@shared/schema";

interface PizzaBuilderProps {
  sizes: PizzaSize[];
  crusts: PizzaCrust[];
  sauces: PizzaSauce[];
  toppings: PizzaTopping[];
  onComplete?: (pizza: any) => void;
}

type Step = 'size' | 'crust' | 'sauce' | 'toppings';

const ToppingDot = ({ type, style }: { type: string; style: React.CSSProperties }) => {
  const getToppingStyle = () => {
    if (type.includes('pepperoni')) {
      return {
        background: 'radial-gradient(circle at 30% 30%, #E74C3C, #C0392B)',
        border: '2px solid #A93226',
      };
    }
    if (type.includes('chicken')) {
      return {
        background: 'radial-gradient(circle at 30% 30%, #F4D03F, #D4AC0D)',
        border: '2px solid #B8860B',
      };
    }
    if (type.includes('beef') || type.includes('sausage') || type.includes('donair')) {
      return {
        background: 'radial-gradient(circle at 30% 30%, #8B4513, #654321)',
        border: '2px solid #5D4037',
      };
    }
    if (type.includes('bacon')) {
      return {
        background: 'linear-gradient(45deg, #D35400 25%, #E67E22 25%, #E67E22 50%, #D35400 50%, #D35400 75%, #E67E22 75%)',
        border: '2px solid #CA6F1E',
      };
    }
    if (type.includes('mushroom')) {
      return {
        background: 'radial-gradient(circle at 30% 30%, #D7CCC8, #A1887F)',
        border: '2px solid #8D6E63',
      };
    }
    if (type.includes('pepper')) {
      return {
        background: 'radial-gradient(circle at 30% 30%, #7CB342, #558B2F)',
        border: '2px solid #33691E',
      };
    }
    if (type.includes('olive')) {
      return {
        background: 'radial-gradient(circle at 30% 30%, #424242, #212121)',
        border: '2px solid #000',
      };
    }
    if (type.includes('tomato')) {
      return {
        background: 'radial-gradient(circle at 30% 30%, #FF6B6B, #EE5A6F)',
        border: '2px solid #C0392B',
      };
    }
    if (type.includes('onion')) {
      return {
        background: 'radial-gradient(circle at 30% 30%, #E8D5E8, #D8BFD8)',
        border: '2px solid #BA68C8',
      };
    }
    if (type.includes('jalapeno')) {
      return {
        background: 'radial-gradient(circle at 30% 30%, #9CCC65, #7CB342)',
        border: '2px solid #689F38',
      };
    }
    if (type.includes('pineapple')) {
      return {
        background: 'radial-gradient(circle at 30% 30%, #FFF59D, #FFF176)',
        border: '2px solid #F9A825',
      };
    }
    if (type.includes('spinach')) {
      return {
        background: 'radial-gradient(circle at 30% 30%, #66BB6A, #43A047)',
        border: '2px solid #2E7D32',
      };
    }
    if (type.includes('feta')) {
      return {
        background: 'radial-gradient(circle at 30% 30%, #FAFAFA, #E0E0E0)',
        border: '2px solid #BDBDBD',
      };
    }
    if (type.includes('parmesan')) {
      return {
        background: 'radial-gradient(circle at 30% 30%, #FFF9C4, #FFF59D)',
        border: '2px solid #F9A825',
      };
    }
    return {
      background: 'radial-gradient(circle at 30% 30%, #FF6B6B, #EE5A6F)',
      border: '2px solid #C0392B',
    };
  };

  return (
    <div
      className="absolute rounded-full shadow-lg"
      style={{
        ...getToppingStyle(),
        ...style,
      }}
    />
  );
};

export default function PizzaBuilder({ sizes, crusts, sauces, toppings, onComplete }: PizzaBuilderProps) {
  const [currentStep, setCurrentStep] = useState<Step>('size');
  const [selectedSize, setSelectedSize] = useState<PizzaSize | null>(null);
  const [selectedCrust, setSelectedCrust] = useState<PizzaCrust | null>(null);
  const [selectedSauce, setSelectedSauce] = useState<PizzaSauce | null>(null);
  const [selectedToppings, setSelectedToppings] = useState<PizzaTopping[]>([]);

  const steps: Step[] = ['size', 'crust', 'sauce', 'toppings'];
  const stepLabels = {
    size: 'Size',
    crust: 'Crust',
    sauce: 'Sauce',
    toppings: 'Toppings'
  };

  const currentStepIndex = steps.indexOf(currentStep);

  const calculateTotal = () => {
    let total = selectedSize?.price || 0;
    total += selectedToppings.reduce((sum, t) => sum + t.price, 0);
    return total.toFixed(2);
  };

  const handleNext = () => {
    const nextIndex = currentStepIndex + 1;
    if (nextIndex < steps.length) {
      setCurrentStep(steps[nextIndex]);
    }
  };

  const handleBack = () => {
    const prevIndex = currentStepIndex - 1;
    if (prevIndex >= 0) {
      setCurrentStep(steps[prevIndex]);
    }
  };

  const [pizzaKey, setPizzaKey] = useState(0);

  const getPizzaSize = () => {
    if (!selectedSize) return 240;
    switch (selectedSize.id) {
      case 'small': return 200;
      case 'medium': return 240;
      case 'large': return 280;
      case 'xlarge': return 320;
      default: return 240;
    }
  };

  const toggleTopping = (topping: PizzaTopping) => {
    setSelectedToppings(prev => {
      const exists = prev.find(t => t.id === topping.id);
      if (exists) {
        return prev.filter(t => t.id !== topping.id);
      }
      return [...prev, topping];
    });
    setPizzaKey(prev => prev + 1);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 'size': return selectedSize !== null;
      case 'crust': return selectedCrust !== null;
      case 'sauce': return selectedSauce !== null;
      case 'toppings': return true;
      default: return false;
    }
  };

  const groupedToppings = toppings.reduce((acc, topping) => {
    if (!acc[topping.category]) {
      acc[topping.category] = [];
    }
    acc[topping.category].push(topping);
    return acc;
  }, {} as Record<string, PizzaTopping[]>);

  const categoryLabels = {
    meat: 'Meats',
    veggie: 'Vegetables',
    cheese: 'Cheese'
  };

  return (
    <div className="grid lg:grid-cols-[1fr_420px] gap-8">
      <div className="space-y-6">
        <div className="flex gap-2 flex-wrap">
          {steps.map((step, index) => (
            <Button
              key={step}
              variant={currentStep === step ? "default" : "outline"}
              size="default"
              onClick={() => setCurrentStep(step)}
              disabled={index > currentStepIndex}
              data-testid={`button-step-${step}`}
              className="min-w-24"
            >
              {stepLabels[step]}
            </Button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {currentStep === 'size' && (
            <motion.div
              key="size"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-6">Choose Your Size</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {sizes.map((size, index) => (
                  <motion.div
                    key={size.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card
                      className={`cursor-pointer hover-elevate transition-all relative ${selectedSize?.id === size.id ? 'border-primary border-2' : ''}`}
                      onClick={() => setSelectedSize(size)}
                      data-testid={`card-size-${size.id}`}
                    >
                      {selectedSize?.id === size.id && (
                        <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center shadow-lg">
                          <Check className="w-4 h-4" />
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle className="text-center">
                          {size.name}<br /><span className="text-muted-foreground text-lg font-normal">{size.size}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-center space-y-2">
                        <p className="text-sm text-muted-foreground">{size.servings}</p>
                        <p className="text-2xl font-bold text-primary">${size.price}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {currentStep === 'crust' && (
            <motion.div
              key="crust"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-6">Choose Your Crust</h2>
              <div className="grid gap-4">
                {crusts.map((crust, index) => (
                  <motion.div
                    key={crust.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card
                      className={`cursor-pointer hover-elevate transition-all relative ${selectedCrust?.id === crust.id ? 'border-primary border-2' : ''}`}
                      onClick={() => setSelectedCrust(crust)}
                      data-testid={`card-crust-${crust.id}`}
                    >
                      {selectedCrust?.id === crust.id && (
                        <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center shadow-lg">
                          <Check className="w-4 h-4" />
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle>{crust.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{crust.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {currentStep === 'sauce' && (
            <motion.div
              key="sauce"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-6">Choose Your Sauce</h2>
              <div className="grid gap-4">
                {sauces.map((sauce, index) => (
                  <motion.div
                    key={sauce.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card
                      className={`cursor-pointer hover-elevate transition-all relative ${selectedSauce?.id === sauce.id ? 'border-primary border-2' : ''}`}
                      onClick={() => setSelectedSauce(sauce)}
                      data-testid={`card-sauce-${sauce.id}`}
                    >
                      {selectedSauce?.id === sauce.id && (
                        <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center shadow-lg">
                          <Check className="w-4 h-4" />
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle>{sauce.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{sauce.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {currentStep === 'toppings' && (
            <motion.div
              key="toppings"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-6">Choose Your Toppings</h2>
              <p className="text-muted-foreground mb-6">Select as many as you like!</p>
              <div className="space-y-6">
                {Object.entries(groupedToppings).map(([category, items]) => (
                  <div key={category}>
                    <h3 className="text-lg font-semibold mb-3">{categoryLabels[category as keyof typeof categoryLabels]}</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {items.map((topping, index) => {
                        const isSelected = selectedToppings.find(t => t.id === topping.id);
                        return (
                          <motion.div
                            key={topping.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.2, delay: index * 0.03 }}
                          >
                            <Card
                              className={`cursor-pointer hover-elevate transition-all relative ${isSelected ? 'border-primary border-2 bg-primary/5' : ''}`}
                              onClick={() => toggleTopping(topping)}
                              data-testid={`badge-topping-${topping.id}`}
                            >
                              {isSelected && (
                                <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center shadow-lg z-10">
                                  <Check className="w-4 h-4" />
                                </div>
                              )}
                              <CardContent className="p-4">
                                <div className="flex justify-between items-center">
                                  <span className="font-medium">{topping.name}</span>
                                  <span className="text-primary font-semibold">+${topping.price.toFixed(2)}</span>
                                </div>
                              </CardContent>
                            </Card>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex gap-4 pt-6">
          {currentStepIndex > 0 && (
            <Button variant="outline" onClick={handleBack} data-testid="button-back">
              Back
            </Button>
          )}
          {currentStepIndex < steps.length - 1 ? (
            <Button onClick={handleNext} disabled={!canProceed()} data-testid="button-next">
              Next: Choose {stepLabels[steps[currentStepIndex + 1]]}
            </Button>
          ) : (
            <Button onClick={() => {
              console.log('Order completed!', {
                size: selectedSize,
                crust: selectedCrust,
                sauce: selectedSauce,
                toppings: selectedToppings
              });
              onComplete?.({ selectedSize, selectedCrust, selectedSauce, selectedToppings });
            }} data-testid="button-complete">
              Add to Order - ${calculateTotal()}
            </Button>
          )}
        </div>
      </div>

      <Card className="lg:sticky lg:top-24 h-fit">
        <CardHeader>
          <CardTitle>Your Pizza</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="aspect-square bg-gradient-to-br from-card to-muted rounded-lg flex items-center justify-center overflow-hidden p-6">
            <motion.div 
              className="rounded-full relative shadow-2xl"
              style={{
                background: 'radial-gradient(circle at 35% 35%, #D4A574, #C19A6B 40%, #B8860B 70%, #8B6914)',
                boxShadow: 'inset 0 -8px 30px rgba(0, 0, 0, 0.3), inset 0 8px 20px rgba(255, 255, 255, 0.1), 0 15px 40px rgba(0, 0, 0, 0.4)',
              }}
              animate={{ 
                width: getPizzaSize(),
                height: getPizzaSize(),
              }}
              transition={{ 
                type: "spring",
                stiffness: 200,
                damping: 25
              }}
            >
              {/* Crust texture */}
              <div 
                className="absolute inset-0 rounded-full opacity-30"
                style={{
                  background: 'radial-gradient(circle at 60% 40%, transparent 30%, rgba(139, 105, 20, 0.3) 60%)',
                }}
              />
              
              {/* Inner pizza base */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: selectedSize ? 0.82 : 0 }}
                className="absolute inset-0 rounded-full m-auto"
                style={{
                  width: '82%',
                  height: '82%',
                  background: 'radial-gradient(circle at 40% 40%, #E8C29A, #D4A574)',
                  boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.2)',
                }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              />
              
              {/* Sauce layer */}
              {selectedSauce && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 0.75, opacity: 1 }}
                  className="absolute inset-0 rounded-full m-auto"
                  style={{
                    width: '75%',
                    height: '75%',
                    background: selectedSauce.id === 'tomato' 
                      ? 'radial-gradient(circle at 40% 40%, #DC3545, #C92A2A 60%, #A61E1E)'
                      : selectedSauce.id === 'bbq' 
                      ? 'radial-gradient(circle at 40% 40%, #8B4513, #654321 60%, #4A3621)'
                      : selectedSauce.id === 'white' 
                      ? 'radial-gradient(circle at 40% 40%, #F5F5DC, #E8E8D0 60%, #D3D3C0)'
                      : 'radial-gradient(circle at 40% 40%, #4A7C59, #2F5233 60%, #1F3322)',
                    boxShadow: 'inset 0 2px 12px rgba(0, 0, 0, 0.3)',
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              )}

              {/* Cheese layer */}
              {selectedSauce && (
                <>
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 0.68, opacity: 0.95 }}
                    className="absolute inset-0 rounded-full m-auto"
                    style={{
                      width: '68%',
                      height: '68%',
                      background: 'radial-gradient(circle at 45% 35%, #FFF8DC, #FFE4B5 50%, #F0D58C 80%)',
                      boxShadow: 'inset 0 2px 8px rgba(255, 200, 100, 0.5), inset 0 -2px 8px rgba(139, 105, 20, 0.2)',
                    }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 20,
                      delay: 0.15 
                    }}
                  />
                  {/* Cheese texture bubbles */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    className="absolute inset-0 rounded-full m-auto"
                    style={{
                      width: '68%',
                      height: '68%',
                      background: `
                        radial-gradient(circle at 25% 30%, rgba(255, 255, 220, 0.8) 0%, transparent 4%),
                        radial-gradient(circle at 65% 45%, rgba(255, 255, 220, 0.6) 0%, transparent 3%),
                        radial-gradient(circle at 40% 60%, rgba(255, 255, 220, 0.7) 0%, transparent 3.5%),
                        radial-gradient(circle at 75% 25%, rgba(255, 255, 220, 0.5) 0%, transparent 2.5%),
                        radial-gradient(circle at 20% 70%, rgba(255, 255, 220, 0.6) 0%, transparent 3%),
                        radial-gradient(circle at 85% 65%, rgba(255, 255, 220, 0.7) 0%, transparent 4%)
                      `,
                    }}
                    transition={{ 
                      delay: 0.4,
                      duration: 0.6
                    }}
                  />
                </>
              )}
              
              {/* Realistic topping dots */}
              {selectedSauce && selectedToppings.map((topping, index) => {
                const totalToppings = selectedToppings.length;
                const rings = Math.ceil(Math.sqrt(totalToppings));
                const currentRing = Math.floor(index / (totalToppings / rings));
                const itemsInRing = Math.ceil(totalToppings / rings);
                const angleStep = (Math.PI * 2) / itemsInRing;
                const angle = angleStep * (index % itemsInRing) + (currentRing * 0.5);
                const radius = (getPizzaSize() * (0.15 + currentRing * 0.08));
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                const toppingHash = topping.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
                const size = 12 + ((toppingHash % 8) + index % 4);

                return (
                  <motion.div
                    key={`${topping.id}-${index}`}
                    initial={{ 
                      scale: 0,
                      x: 0,
                      y: -100,
                      opacity: 0,
                    }}
                    animate={{ 
                      scale: 1,
                      x: x,
                      y: y,
                      opacity: 1,
                    }}
                    transition={{ 
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      delay: 0.3 + index * 0.05
                    }}
                  >
                    <ToppingDot 
                      type={topping.id}
                      style={{
                        width: `${size}px`,
                        height: `${size}px`,
                      }}
                    />
                  </motion.div>
                );
              })}
              
              {/* Topping counter badge */}
              {selectedToppings.length > 0 && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="absolute -top-3 -right-3 bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold shadow-lg border-4 border-background"
                >
                  <motion.span
                    key={selectedToppings.length}
                    initial={{ scale: 1.5 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 15 }}
                  >
                    {selectedToppings.length}
                  </motion.span>
                </motion.div>
              )}
            </motion.div>
          </div>
          
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Size:</span>
              <span className="font-medium">{selectedSize?.name || '-'}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Crust:</span>
              <span className="font-medium">{selectedCrust?.name || '-'}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Sauce:</span>
              <span className="font-medium">{selectedSauce?.name || '-'}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Toppings:</span>
              <span className="font-medium">{selectedToppings.length} selected</span>
            </div>
            {selectedToppings.length > 0 && (
              <div className="pt-2 border-t">
                <div className="flex flex-wrap gap-1">
                  {selectedToppings.map(topping => (
                    <Badge key={topping.id} variant="secondary" className="text-xs">
                      {topping.name}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="pt-4 border-t flex justify-between items-center">
            <span className="font-semibold text-lg">Total</span>
            <span className="text-3xl font-bold text-primary" data-testid="text-total">
              ${calculateTotal()}
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
