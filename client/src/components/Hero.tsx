import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";

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
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        </motion.div>
      )}
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-foreground mb-6"
        >
          {title.split(' ').map((word, index) => {
            const isOrange = word.toLowerCase().includes('menu') || 
                           word.toLowerCase().includes('pizza') || 
                           word.toLowerCase().includes('donair');
            return (
              <motion.span 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="inline-block"
              >
                {isOrange ? (
                  <span className="text-primary">{word}</span>
                ) : (
                  word
                )}{' '}
              </motion.span>
            );
          })}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
        >
          {subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link href={ctaLink}>
            <Button size="lg" className="text-lg px-8" data-testid="button-hero-cta">
              {ctaText}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
