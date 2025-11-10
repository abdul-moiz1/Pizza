import PizzaBuilder from "@/components/PizzaBuilder";
import { motion } from "framer-motion";
import { ChefHat, Sparkles, Pizza } from "lucide-react";
import buildPizzaImage from '@assets/generated_images/Premium_pizza_assembly_scene_5d570890.png';

export default function BuildYourOwn() {
  const sizes = [
    { id: 'small', name: 'Small', size: '10"', servings: '1-2 people', price: 10 },
    { id: 'medium', name: 'Medium', size: '12"', servings: '2-3 people', price: 14 },
    { id: 'large', name: 'Large', size: '14"', servings: '3-4 people', price: 18 },
    { id: 'xlarge', name: 'X-Large', size: '16"', servings: '4-6 people', price: 22 },
  ];

  const crusts = [
    { id: 'regular', name: 'Regular', description: 'Classic hand-tossed crust with perfect texture' },
    { id: 'thin', name: 'Thin Crust', description: 'Light and crispy, Italian style' },
    { id: 'thick', name: 'Thick Crust', description: 'Deep dish style with extra dough' },
    { id: 'stuffed', name: 'Stuffed Crust', description: 'Cheese-filled crust edges' },
  ];

  const sauces = [
    { id: 'tomato', name: 'Classic Tomato', description: 'Traditional pizza sauce with Italian herbs' },
    { id: 'bbq', name: 'BBQ Sauce', description: 'Sweet and smoky barbecue' },
    { id: 'white', name: 'White Sauce', description: 'Creamy garlic Alfredo base' },
    { id: 'pesto', name: 'Pesto', description: 'Fresh basil pesto sauce' },
  ];

  const toppings = [
    { id: 'pepperoni', name: 'Halal Pepperoni', category: 'meat' as const, price: 2 },
    { id: 'chicken', name: 'Grilled Chicken', category: 'meat' as const, price: 2.5 },
    { id: 'beef', name: 'Ground Beef', category: 'meat' as const, price: 2.5 },
    { id: 'sausage', name: 'Italian Sausage', category: 'meat' as const, price: 2.5 },
    { id: 'bacon', name: 'Halal Bacon', category: 'meat' as const, price: 2 },
    { id: 'donair', name: 'Donair Meat', category: 'meat' as const, price: 3 },
    { id: 'mushrooms', name: 'Mushrooms', category: 'veggie' as const, price: 1.5 },
    { id: 'peppers', name: 'Green Peppers', category: 'veggie' as const, price: 1.5 },
    { id: 'onions', name: 'Red Onions', category: 'veggie' as const, price: 1.5 },
    { id: 'olives', name: 'Black Olives', category: 'veggie' as const, price: 1.5 },
    { id: 'tomatoes', name: 'Fresh Tomatoes', category: 'veggie' as const, price: 1.5 },
    { id: 'jalapenos', name: 'Jalapeños', category: 'veggie' as const, price: 1.5 },
    { id: 'pineapple', name: 'Pineapple', category: 'veggie' as const, price: 1.5 },
    { id: 'spinach', name: 'Fresh Spinach', category: 'veggie' as const, price: 1.5 },
    { id: 'feta', name: 'Feta Cheese', category: 'cheese' as const, price: 2 },
    { id: 'parmesan', name: 'Parmesan', category: 'cheese' as const, price: 1.5 },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-32 bg-gradient-to-br from-background via-card/30 to-background overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Craft Your Perfect Pizza</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                BUILD YOUR <span className="text-primary">PIZZA</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
                Experience the art of custom pizza creation. Choose from premium halal ingredients and craft a masterpiece that's uniquely yours.
              </p>
              
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <ChefHat className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold">100% Halal</p>
                    <p className="text-sm text-muted-foreground">Certified ingredients</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Pizza className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold">Unlimited Options</p>
                    <p className="text-sm text-muted-foreground">30+ fresh toppings</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={buildPizzaImage} 
                  alt="Artisan pizza crafting"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card/20">
        <div className="container mx-auto px-4">
          <PizzaBuilder
            sizes={sizes}
            crusts={crusts}
            sauces={sauces}
            toppings={toppings}
          />
        </div>
      </section>
    </div>
  );
}
