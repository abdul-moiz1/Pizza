import PizzaCard from "@/components/PizzaCard";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import chickenPizza from '@assets/generated_images/Halal_Chicken_Special_Pizza_e83ceb00.png';
import veggiePizza from '@assets/generated_images/Veggie_Lovers_Pizza_35627115.png';
import bbqPizza from '@assets/generated_images/BBQ_Chicken_Pizza_bfbf1bea.png';
import meatPizza from '@assets/generated_images/Halal_Meat_Lovers_Pizza_55e310b8.png';
import donairPizza from '@assets/generated_images/Donair_Pizza_Special_6cebee8a.png';
import houseSpecial from '@assets/generated_images/House_Special_Pizza_e0ab3d75.png';

export default function Menu() {
  // TODO: Remove mock data - replace with API calls
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'specialty' | 'custom'>('all');

  const specialtyPizzas = [
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
      id: 'meat-lovers',
      name: 'Halal Meat Lovers',
      description: 'Pepperoni, Italian sausage, ham, bacon, and ground beef. A meat feast!',
      price: 19,
      image: meatPizza
    },
    {
      id: 'veggie-lovers',
      name: 'Veggie Lovers',
      description: 'Fresh mushrooms, tomatoes, onions, green peppers, and black olives. Vegetarian delight!',
      price: 15,
      image: veggiePizza
    },
    {
      id: 'bbq-chicken',
      name: 'BBQ Chicken',
      description: 'Halal chicken with BBQ sauce, red onions, and mozzarella. Sweet and savory perfection.',
      price: 17,
      image: bbqPizza
    },
    {
      id: 'donair-special',
      name: 'Donair Pizza',
      description: 'People love our donair pizza, made with house special sweet sauce and seasoned donair meat.',
      price: 18,
      image: donairPizza
    }
  ];

  const filteredPizzas = selectedCategory === 'all' ? specialtyPizzas : 
                        selectedCategory === 'specialty' ? specialtyPizzas : [];

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-card/30">
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
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('all')}
              data-testid="button-category-all"
            >
              All Pizzas
            </Button>
            <Button
              variant={selectedCategory === 'specialty' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('specialty')}
              data-testid="button-category-specialty"
            >
              Specialty Pizzas
            </Button>
            <Button
              variant={selectedCategory === 'custom' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('custom')}
              data-testid="button-category-custom"
            >
              Build Your Own
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPizzas.map((pizza) => (
              <PizzaCard key={pizza.id} {...pizza} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
