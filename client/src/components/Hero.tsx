import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
  height?: string;
}

export default function Hero({
  title,
  subtitle,
  ctaText = "Order Now",
  ctaLink = "/menu",
  backgroundImage,
  height = "85vh"
}: HeroProps) {
  return (
    <section 
      className="relative w-full flex items-center justify-center overflow-hidden"
      style={{ height }}
    >
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        </div>
      )}
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
          {title.split(' ').map((word, index) => {
            const isOrange = word.toLowerCase().includes('menu') || 
                           word.toLowerCase().includes('pizza') || 
                           word.toLowerCase().includes('donair');
            return (
              <span key={index}>
                {isOrange ? (
                  <span className="text-primary">{word}</span>
                ) : (
                  word
                )}{' '}
              </span>
            );
          })}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          {subtitle}
        </p>
        <Link href={ctaLink}>
          <Button size="lg" className="text-lg px-8" data-testid="button-hero-cta">
            {ctaText}
          </Button>
        </Link>
      </div>
    </section>
  );
}
