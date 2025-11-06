import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import type { PizzaSize, PizzaCrust, PizzaSauce, PizzaTopping } from "@shared/schema";

interface PizzaBuilderProps {
  sizes: PizzaSize[];
  crusts: PizzaCrust[];
  sauces: PizzaSauce[];
  toppings: PizzaTopping[];
  onComplete?: (pizza: any) => void;
}

type Step = 'size' | 'crust' | 'sauce' | 'toppings';

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

  const toggleTopping = (topping: PizzaTopping) => {
    setSelectedToppings(prev => {
      const exists = prev.find(t => t.id === topping.id);
      if (exists) {
        return prev.filter(t => t.id !== topping.id);
      }
      return [...prev, topping];
    });
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

  return (
    <div className="grid lg:grid-cols-[1fr_400px] gap-8">
      <div className="space-y-6">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {steps.map((step, index) => (
            <Button
              key={step}
              variant={currentStep === step ? "default" : "outline"}
              size="sm"
              onClick={() => setCurrentStep(step)}
              disabled={index > currentStepIndex}
              data-testid={`button-step-${step}`}
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
                      className={`cursor-pointer hover-elevate transition-all ${selectedSize?.id === size.id ? 'border-primary border-2' : ''}`}
                      onClick={() => setSelectedSize(size)}
                      data-testid={`card-size-${size.id}`}
                    >
                      <CardHeader>
                        <CardTitle className="text-center">
                          {size.name}<br />{size.size}
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
                      className={`cursor-pointer hover-elevate transition-all ${selectedCrust?.id === crust.id ? 'border-primary border-2' : ''}`}
                      onClick={() => setSelectedCrust(crust)}
                      data-testid={`card-crust-${crust.id}`}
                    >
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
                      className={`cursor-pointer hover-elevate transition-all ${selectedSauce?.id === sauce.id ? 'border-primary border-2' : ''}`}
                      onClick={() => setSelectedSauce(sauce)}
                      data-testid={`card-sauce-${sauce.id}`}
                    >
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
              <p className="text-muted-foreground mb-4">Select as many as you like!</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {toppings.map((topping, index) => (
                  <motion.div
                    key={topping.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: index * 0.03 }}
                  >
                    <Badge
                      variant={selectedToppings.find(t => t.id === topping.id) ? "default" : "outline"}
                      className="cursor-pointer hover-elevate p-3 justify-between text-base h-auto w-full transition-all"
                      onClick={() => toggleTopping(topping)}
                      data-testid={`badge-topping-${topping.id}`}
                    >
                      <span>{topping.name}</span>
                      <span>${topping.price.toFixed(2)}</span>
                    </Badge>
                  </motion.div>
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
          <div className="aspect-square bg-muted rounded-lg flex items-center justify-center overflow-hidden">
            <motion.div 
              className="w-48 h-48 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-8 border-primary/30 flex items-center justify-center relative"
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <span className="text-4xl">🍕</span>
              {selectedToppings.length > 0 && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-2 right-2 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold"
                >
                  {selectedToppings.length}
                </motion.div>
              )}
            </motion.div>
          </div>
          
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Size:</span>
              <span className="font-medium">{selectedSize?.name || '-'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Crust:</span>
              <span className="font-medium">{selectedCrust?.name || '-'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Sauce:</span>
              <span className="font-medium">{selectedSauce?.name || '-'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Toppings:</span>
              <span className="font-medium">{selectedToppings.length}</span>
            </div>
          </div>

          <div className="pt-4 border-t flex justify-between items-center">
            <span className="font-semibold">Current Total</span>
            <span className="text-2xl font-bold text-primary" data-testid="text-total">
              ${calculateTotal()}
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
