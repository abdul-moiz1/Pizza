import PizzaCard from '../PizzaCard';
import chickenPizza from '@assets/generated_images/Halal_Chicken_Special_Pizza_e83ceb00.png';

export default function PizzaCardExample() {
  return (
    <div className="max-w-sm">
      <PizzaCard
        id="halal-chicken"
        name="Halal Chicken Special"
        description="Grilled halal chicken, mushrooms, onions, and green peppers with our signature sauce."
        price={17}
        image={chickenPizza}
        onAddToOrder={(id) => console.log('Added:', id)}
      />
    </div>
  );
}
