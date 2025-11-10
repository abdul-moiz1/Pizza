import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ChefHat, Flame, Pizza, Sparkles } from "lucide-react";

interface TimelineStep {
  icon: typeof ChefHat;
  title: string;
  description: string;
}

const timelineSteps: TimelineStep[] = [
  {
    icon: ChefHat,
    title: "Fresh Dough Preparation",
    description: "We start with our signature dough recipe, made fresh daily and hand-stretched to perfection."
  },
  {
    icon: Sparkles,
    title: "Premium Toppings",
    description: "Only the finest halal ingredients and fresh vegetables are carefully selected and prepared."
  },
  {
    icon: Pizza,
    title: "Expert Assembly",
    description: "Our skilled chefs artfully combine sauce, cheese, and toppings with decades of expertise."
  },
  {
    icon: Flame,
    title: "Stone Oven Baking",
    description: "Baked to perfection in our traditional stone oven at optimal temperature for the ideal crisp."
  }
];

export default function PizzaTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <section className="py-20 bg-background" ref={containerRef}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The Art of <span className="text-primary">PIZZA MAKING</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every pizza is crafted with passion, precision, and the finest halal ingredients
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20 transform -translate-x-1/2 hidden md:block" />

          {timelineSteps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative mb-12 md:mb-20 last:mb-0"
              >
                <div className={`flex flex-col md:flex-row items-center gap-6 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                    <motion.div
                      initial={{ scale: 0.8 }}
                      animate={isInView ? { scale: 1 } : { scale: 0.8 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                      className="bg-card p-6 rounded-lg border hover-elevate"
                    >
                      <h3 className="text-2xl font-bold mb-3 flex items-center gap-3 md:hidden">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        {step.title}
                      </h3>
                      <h3 className="text-2xl font-bold mb-3 hidden md:block">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.2 + 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                    className="hidden md:flex w-16 h-16 rounded-full bg-primary shadow-lg items-center justify-center z-10 relative"
                  >
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </motion.div>

                  <div className="flex-1 hidden md:block" />
                </div>

                {index < timelineSteps.length - 1 && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                    className="absolute left-1/2 top-16 h-20 w-1 bg-gradient-to-b from-primary to-transparent transform -translate-x-1/2 origin-top hidden md:block"
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6, delay: timelineSteps.length * 0.2 }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-primary/10 rounded-full px-8 py-4">
            <p className="text-lg font-semibold text-primary flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Ready to Serve Hot & Fresh!
              <Sparkles className="w-5 h-5" />
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
