import PizzaBuilder from '../PizzaBuilder';

export default function PizzaBuilderExample() {
  const sizes = [
    { id: 'small', name: 'Small', size: '10"', servings: '1-2 people', price: 10 },
    { id: 'medium', name: 'Medium', size: '12"', servings: '2-3 people', price: 14 },
    { id: 'large', name: 'Large', size: '14"', servings: '3-4 people', price: 18 },
    { id: 'xlarge', name: 'X-Large', size: '16"', servings: '4-6 people', price: 22 },
  ];

  const crusts = [
    { id: 'regular', name: 'Regular', description: 'Classic hand-tossed crust' },
    { id: 'thin', name: 'Thin Crust', description: 'Light and crispy' },
    { id: 'thick', name: 'Thick Crust', description: 'Deep dish style' },
  ];

  const sauces = [
    { id: 'tomato', name: 'Classic Tomato', description: 'Traditional pizza sauce' },
    { id: 'bbq', name: 'BBQ Sauce', description: 'Sweet and smoky' },
    { id: 'white', name: 'White Sauce', description: 'Creamy garlic base' },
  ];

  const toppings = [
    { id: 'pepperoni', name: 'Halal Pepperoni', category: 'meat' as const, price: 2 },
    { id: 'chicken', name: 'Grilled Chicken', category: 'meat' as const, price: 2.5 },
    { id: 'beef', name: 'Ground Beef', category: 'meat' as const, price: 2.5 },
    { id: 'mushrooms', name: 'Mushrooms', category: 'veggie' as const, price: 1.5 },
    { id: 'peppers', name: 'Green Peppers', category: 'veggie' as const, price: 1.5 },
    { id: 'onions', name: 'Red Onions', category: 'veggie' as const, price: 1.5 },
    { id: 'olives', name: 'Black Olives', category: 'veggie' as const, price: 1.5 },
    { id: 'tomatoes', name: 'Fresh Tomatoes', category: 'veggie' as const, price: 1.5 },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <PizzaBuilder
        sizes={sizes}
        crusts={crusts}
        sauces={sauces}
        toppings={toppings}
        onComplete={(pizza) => console.log('Pizza completed:', pizza)}
      />
    </div>
  );
}
