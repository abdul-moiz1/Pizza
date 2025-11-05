import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Beef, Carrot, Wheat, Milk } from "lucide-react";

export default function Ingredients() {
  const ingredientCategories = [
    {
      title: 'Premium Halal Meats',
      icon: Beef,
      items: [
        'Halal Certified Pepperoni',
        'Grilled Chicken Breast',
        'Italian Sausage',
        'Ground Beef',
        'Halal Bacon',
        'Premium Donair Meat'
      ]
    },
    {
      title: 'Fresh Vegetables',
      icon: Carrot,
      items: [
        'Farm Fresh Mushrooms',
        'Ripe Tomatoes',
        'Sweet Red Onions',
        'Green Bell Peppers',
        'Black Olives',
        'Fresh Spinach',
        'Jalapeños',
        'Pineapple'
      ]
    },
    {
      title: 'Artisan Dough & Crust',
      icon: Wheat,
      items: [
        'Hand-Tossed Daily',
        'No Preservatives',
        'Premium Flour Blend',
        'Natural Yeast',
        'Wood-Fired Perfection'
      ]
    },
    {
      title: 'Quality Cheeses',
      icon: Milk,
      items: [
        '100% Real Mozzarella',
        'Premium Cheddar',
        'Feta Cheese',
        'Parmesan',
        'Cheese Blend Options'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            OUR <span className="text-primary">INGREDIENTS</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We have earned great recipes to achieve these great combinations.
            Only the finest, freshest ingredients make it onto our pizzas.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {ingredientCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="hover-elevate" data-testid={`card-category-${index}`}>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-2xl">{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((item, itemIndex) => (
                        <Badge 
                          key={itemIndex} 
                          variant="secondary"
                          className="text-sm"
                          data-testid={`badge-ingredient-${index}-${itemIndex}`}
                        >
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-3xl text-center">Any Number of Toppings</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-muted-foreground mb-4">
                  With any number of toppings available, multiple crust options and sauces,
                  you can create your own favorite halal pizza.
                </p>
                <p className="text-lg text-muted-foreground">
                  With option of <span className="font-semibold text-foreground">half and half</span> pizza,
                  you can enjoy two different tastes on a single pizza.
                </p>
              </CardContent>
            </Card>

            <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <p className="text-muted-foreground">Halal Certified</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">Fresh</div>
                <p className="text-muted-foreground">Daily Preparation</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">20+</div>
                <p className="text-muted-foreground">Specialty Combinations</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
