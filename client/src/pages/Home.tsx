import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";
import { Award, Leaf, Pizza } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import PizzaCard from "@/components/PizzaCard";
import chickenPizza from '@assets/generated_images/Halal_Chicken_Special_Pizza_e83ceb00.png';
import veggiePizza from '@assets/generated_images/Veggie_Lovers_Pizza_35627115.png';
import bbqPizza from '@assets/generated_images/BBQ_Chicken_Pizza_bfbf1bea.png';

export default function Home() {
  // TODO: Remove mock data - replace with API calls
  const featuredPizzas = [
    {
      id: 'halal-chicken',
      name: 'Halal Chicken Special',
      description: 'Grilled halal chicken, mushrooms, onions, and green peppers with our signature sauce.',
      price: 17,
      image: chickenPizza
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
    }
  ];

  const features = [
    {
      icon: Award,
      title: '100% Halal',
      description: 'All our ingredients are certified halal, ensuring quality and trust in every bite.'
    },
    {
      icon: Leaf,
      title: 'Fresh Ingredients',
      description: 'We use only the freshest, highest quality ingredients prepared daily.'
    },
    {
      icon: Pizza,
      title: '20+ Specialties',
      description: 'From house specials to custom creations, we offer endless delicious options.'
    }
  ];

  return (
    <div>
      <Hero
        title="Canada's Best Halal PIZZA & Donair"
        subtitle="100% Halal - We have the best combination and our specialty pizzas are the most selling pizzas. Try once and you will fall in love."
        ctaText="See Menu"
        ctaLink="/menu"
      />

      <FeatureSection features={features} />

      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              FRESH FROM PIZZA <span className="text-primary">MENU</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              100% Halal - We have the best combination and our specialty pizzas are the most selling pizzas.
              Try once and you will fall in love.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredPizzas.map((pizza) => (
              <PizzaCard key={pizza.id} {...pizza} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/menu">
              <Button size="lg" data-testid="button-view-full-menu">
                View Full Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Build Your Own <span className="text-primary">PIZZA</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                Create a perfect blend you like and admire with any number of toppings!
              </p>
              <p className="text-muted-foreground mb-8">
                With any number of toppings available, multiple crust options and sauces, you can create your
                own favorite halal pizza. With option of half and half pizza you can enjoy two different tastes
                on a single pizza.
              </p>
              <Link href="/build">
                <Button size="lg" data-testid="button-build-your-own">
                  Start Building
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <span className="text-9xl">🍕</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-elevate">
              <CardHeader>
                <CardTitle className="text-2xl">We Cater All Events</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Weddings, corporate gatherings, special occasions. We've got you covered.
                </p>
                <Button variant="outline" data-testid="button-learn-catering">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardHeader>
                <CardTitle className="text-2xl">Franchising</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Be part of Cosmic. We cannot wait to see you joining our dynamic team.
                </p>
                <Button variant="outline" data-testid="button-franchise-info">
                  Connect Now
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardHeader>
                <CardTitle className="text-2xl">Find Your Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Find your favorite store close by and enjoy fresh, hot pizza.
                </p>
                <Link href="/contact">
                  <Button variant="outline" data-testid="button-find-location">
                    Find Location
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
