import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Heart, Users, Flame } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Award,
      title: '100% Halal Certified',
      description: 'All our ingredients are certified halal, ensuring the highest standards of quality and trust.'
    },
    {
      icon: Flame,
      title: 'Artisan Quality',
      description: 'Wood-fired pizzas made with traditional techniques and premium ingredients.'
    },
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Every pizza is crafted with care and attention to detail by our experienced chefs.'
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'We serve our community with dedication, bringing people together through great food.'
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            ABOUT <span className="text-primary">US</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Artisanal craft meets bold, playful energy. Breaking traditional pizzeria stereotypes since 2024.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed">
                At Cosmic Pizza & Donair, we believe in creating more than just pizza – we create experiences.
                Our journey began with a simple mission: to serve the best halal pizza and donair in Canada,
                made with authentic ingredients and traditional cooking methods.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Every pizza that comes out of our kitchen is a testament to our commitment to quality.
                We use only the freshest ingredients, hand-toss our dough daily, and cook our pizzas in
                wood-fired ovens to achieve that perfect char and flavor that our customers love.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="hover-elevate" data-testid={`card-value-${index}`}>
                    <CardHeader>
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle>{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="mt-12 p-8 bg-card rounded-lg border border-border">
              <h2 className="text-3xl font-bold mb-4">Where Quality Meets Customer Service</h2>
              <p className="text-muted-foreground leading-relaxed">
                We're not just about making great pizza – we're about creating lasting relationships with our
                customers. From the moment you place your order to the first bite, we ensure every step of
                your experience is exceptional. Say goodbye to soggy and oily pizzas. We deliver exactly
                what you've imagined and desired.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
