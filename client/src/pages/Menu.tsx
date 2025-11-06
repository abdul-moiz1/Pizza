import PizzaCard from "@/components/PizzaCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { motion } from "framer-motion";
import chickenPizza from '@assets/generated_images/Halal_Chicken_Special_Pizza_e83ceb00.png';
import veggiePizza from '@assets/generated_images/Veggie_Lovers_Pizza_35627115.png';
import bbqPizza from '@assets/generated_images/BBQ_Chicken_Pizza_bfbf1bea.png';
import meatPizza from '@assets/generated_images/Halal_Meat_Lovers_Pizza_55e310b8.png';
import donairPizza from '@assets/generated_images/Donair_Pizza_Special_6cebee8a.png';
import houseSpecial from '@assets/generated_images/House_Special_Pizza_e0ab3d75.png';

export default function Menu() {
  // TODO: Remove mock data - replace with API calls
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'specialty' | 'sides'>('all');

  const specialtyPizzas = [
    {
      id: 'all-meat',
      name: 'All Halal Meat Lovers',
      description: 'Perfect blend of pepperoni, ham, bacon, Italian sausages, mozzarella cheese & halal meat.',
      price: 19,
      image: meatPizza
    },
    {
      id: 'house-special',
      name: 'House Special',
      description: 'Pepperoni, mushrooms, bell peppers, onions, olives, and Italian sausage with our signature sauce.',
      price: 18,
      image: houseSpecial
    },
    {
      id: 'halal-chicken',
      name: 'Halal Chicken Special',
      description: 'Grilled halal chicken, mushrooms, onions, and green peppers with our signature sauce.',
      price: 17,
      image: chickenPizza
    },
    {
      id: 'donair-special',
      name: 'Donair Pizza',
      description: 'People love our donair pizza, made with house special sweet sauce and seasoned donair meat.',
      price: 18,
      image: donairPizza
    },
    {
      id: 'bbq-chicken',
      name: 'BBQ Chicken',
      description: 'Halal chicken with BBQ sauce, red onions, and mozzarella. Sweet and savory perfection.',
      price: 17,
      image: bbqPizza
    },
    {
      id: 'hawaiian',
      name: 'Hawaiian',
      description: 'Lots of ham and pineapple topped with mozzarella cheese.',
      price: 16,
      image: houseSpecial
    },
    {
      id: 'canadian',
      name: 'Canadian',
      description: 'Pepperoni, bacon, mushrooms & mozzarella cheese.',
      price: 17,
      image: chickenPizza
    },
    {
      id: 'mexican',
      name: 'Mexican',
      description: 'Ground beef, onions, green peppers, black olives, banana peppers & mozzarella cheese.',
      price: 17,
      image: meatPizza
    },
    {
      id: 'three-cheese',
      name: 'Three Cheese',
      description: 'Parmesan, cheddar cheese & mozzarella cheese.',
      price: 15,
      image: veggiePizza
    },
    {
      id: 'veggie',
      name: 'A Veggie',
      description: 'Onions, mushrooms, green peppers, cooked tomatoes & mozzarella cheese.',
      price: 15,
      image: veggiePizza
    }
  ];

  const sides = [
    { id: 'wings', name: 'Halal Chicken Wings', description: 'Hot, Mild, Salt & Pepper, Honey Garlic, Teriyaki, BBQ, Lemon Pepper & Honey Hot', price: 12 },
    { id: 'cheesy-bread', name: 'Cheesy Bread', description: '8 Pieces – Served with a side of Marinara Sauce', price: 8 },
    { id: 'garlic-sticks', name: 'Garlic Bread Sticks', description: '8 Pieces – Served with a side of Marinara Sauce', price: 7 },
    { id: 'poutine', name: 'Poutine', description: 'Regular, Donair, Deluxe & Mix Poutine', price: 10 },
    { id: 'chicken-strips', name: 'Halal Chicken Strips', description: 'Juicy from inside & tender from outside', price: 11 },
    { id: 'onion-rings', name: 'Onion Rings', description: 'Crispy & fresh – eat them hot', price: 6 }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? [...specialtyPizzas] 
    : selectedCategory === 'specialty' 
    ? specialtyPizzas 
    : [];

  return (
    <div className="min-h-screen">
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-20 bg-card/30"
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            OUR <span className="text-primary">MENU</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            100% Halal - We have the best combination and our specialty pizzas are the most selling pizzas.
            Try once and you will fall in love.
          </p>
          <Button size="lg" data-testid="button-build-custom">
            Build Your Own Pizza
          </Button>
        </div>
      </motion.section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('all')}
              data-testid="button-category-all"
            >
              All Menu
            </Button>
            <Button
              variant={selectedCategory === 'specialty' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('specialty')}
              data-testid="button-category-specialty"
            >
              Specialty Pizzas
            </Button>
            <Button
              variant={selectedCategory === 'sides' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('sides')}
              data-testid="button-category-sides"
            >
              Sides & Extras
            </Button>
          </div>

          {selectedCategory !== 'sides' && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredItems.map((pizza, index) => (
                <motion.div
                  key={pizza.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <PizzaCard {...pizza} />
                </motion.div>
              ))}
            </motion.div>
          )}

          {selectedCategory === 'sides' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {sides.map((side, index) => (
                <motion.div
                  key={side.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Card className="hover-elevate">
                    <CardHeader>
                      <CardTitle>{side.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">{side.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-primary">${side.price}</span>
                        <Button onClick={() => console.log('Added:', side.id)}>
                          Add to Order
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
