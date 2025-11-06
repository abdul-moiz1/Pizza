import PizzaBuilder from "@/components/PizzaBuilder";

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
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            BUILD YOUR <span className="text-primary">PIZZA</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Create a perfect blend you like and admire with any number of toppings!
          </p>
        </div>
      </section>

      <section className="py-12">
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
