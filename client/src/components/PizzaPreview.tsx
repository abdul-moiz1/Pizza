import { motion } from "framer-motion";
import { useMemo } from "react";

interface PizzaPreviewProps {
  size: string;
  crust: string;
  sauce: string;
  cheese: string;
  toppings: string[];
}

const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

const ToppingDot = ({ type, style }: { type: string; style: React.CSSProperties }) => {
  const getToppingStyle = () => {
    if (type.includes('pepperoni')) {
      return {
        background: 'radial-gradient(circle at 30% 30%, #E74C3C, #C0392B)',
        border: '2px solid #A93226',
      };
    }
    if (type.includes('chicken')) {
      return {
        background: 'radial-gradient(circle at 30% 30%, #F4D03F, #D4AC0D)',
        border: '2px solid #B8860B',
      };
    }
    if (type.includes('beef') || type.includes('sausage')) {
      return {
        background: 'radial-gradient(circle at 30% 30%, #8B4513, #654321)',
        border: '2px solid #5D4037',
      };
    }
    if (type.includes('bacon')) {
      return {
        background: 'linear-gradient(45deg, #D35400 25%, #E67E22 25%, #E67E22 50%, #D35400 50%, #D35400 75%, #E67E22 75%)',
        border: '2px solid #CA6F1E',
      };
    }
    if (type.includes('mushroom')) {
      return {
        background: 'radial-gradient(circle at 30% 30%, #D7CCC8, #A1887F)',
        border: '2px solid #8D6E63',
      };
    }
    if (type.includes('pepper')) {
      return {
        background: 'radial-gradient(circle at 30% 30%, #7CB342, #558B2F)',
        border: '2px solid #33691E',
      };
    }
    if (type.includes('olive')) {
      return {
        background: 'radial-gradient(circle at 30% 30%, #424242, #212121)',
        border: '2px solid #000',
      };
    }
    if (type.includes('tomato')) {
      return {
        background: 'radial-gradient(circle at 30% 30%, #FF6B6B, #EE5A6F)',
        border: '2px solid #C0392B',
      };
    }
    if (type.includes('onion')) {
      return {
        background: 'radial-gradient(circle at 30% 30%, #E8D5E8, #D8BFD8)',
        border: '2px solid #BA68C8',
      };
    }
    if (type.includes('jalapeno')) {
      return {
        background: 'radial-gradient(circle at 30% 30%, #9CCC65, #7CB342)',
        border: '2px solid #689F38',
      };
    }
    if (type.includes('pineapple')) {
      return {
        background: 'radial-gradient(circle at 30% 30%, #FFF59D, #FFF176)',
        border: '2px solid #F9A825',
      };
    }
    return {
      background: 'radial-gradient(circle at 30% 30%, #FF6B6B, #EE5A6F)',
      border: '2px solid #C0392B',
    };
  };

  return (
    <div
      className="absolute rounded-full shadow-lg"
      style={{
        ...getToppingStyle(),
        ...style,
      }}
    />
  );
};

export default function PizzaPreview({ size, crust, sauce, cheese, toppings }: PizzaPreviewProps) {
  const getPizzaSize = () => {
    switch (size) {
      case 'small': return 180;
      case 'medium': return 220;
      case 'large': return 260;
      case 'xlarge': return 300;
      default: return 220;
    }
  };

  const getCrustThickness = () => {
    switch (crust) {
      case 'thin': return 0.88;
      case 'thick': return 0.78;
      case 'stuffed': return 0.75;
      default: return 0.82;
    }
  };

  const getCrustStyle = () => {
    const baseStyle = {
      background: 'radial-gradient(circle at 40% 35%, #E8C7A0, #D4A574 30%, #C19A6B 55%, #A8875A 80%, #8B7043)',
      boxShadow: 'inset 0 -4px 15px rgba(0, 0, 0, 0.15), inset 0 4px 10px rgba(255, 255, 255, 0.08), 0 8px 25px rgba(0, 0, 0, 0.25)',
    };

    if (crust === 'stuffed') {
      return {
        ...baseStyle,
        background: 'radial-gradient(circle at 40% 35%, #F0D4B0, #E8C29A 25%, #D4A574 45%, #C19A6B 65%, #9D7D56)',
        boxShadow: 'inset 0 -4px 15px rgba(0, 0, 0, 0.15), inset 0 4px 10px rgba(255, 255, 255, 0.08), 0 0 0 3px rgba(255, 230, 180, 0.3), 0 8px 25px rgba(0, 0, 0, 0.25)',
      };
    }

    if (crust === 'thin') {
      return {
        ...baseStyle,
        background: 'radial-gradient(circle at 40% 35%, #D4B090, #C8A882 35%, #B8996B 60%, #9D7D56)',
      };
    }

    if (crust === 'thick') {
      return {
        ...baseStyle,
        background: 'radial-gradient(circle at 40% 35%, #F0D8B8, #E0C8A0 25%, #D4A574 50%, #C19A6B 70%, #A8875A)',
      };
    }

    return baseStyle;
  };

  const pizzaSize = getPizzaSize();
  const crustThickness = getCrustThickness();

  const toppingPositions = useMemo(() => {
    return toppings.map((toppingId, index) => {
      const seed = toppingId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) + index;
      const angle = seededRandom(seed * 3) * Math.PI * 2;
      // Spread toppings across pizza surface (15-50% of radius for better visibility)
      const radiusRatio = 0.15 + seededRandom(seed * 7) * 0.35;
      const radius = pizzaSize * radiusRatio;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      const sizeVar = 18 + seededRandom(seed * 5) * 14;
      const rotation = seededRandom(seed * 11) * 360;
      
      return { x, y, sizeVar, rotation };
    });
  }, [toppings, pizzaSize]);

  return (
    <div className="bg-gradient-to-br from-card to-muted rounded-lg flex flex-col items-center justify-center p-6 min-h-[400px]">
      <motion.div 
        key={size}
        className="rounded-full relative shadow-2xl"
        style={getCrustStyle()}
        initial={{ 
          width: pizzaSize * 0.8,
          height: pizzaSize * 0.8,
          scale: 0.8
        }}
        animate={{ 
          width: pizzaSize,
          height: pizzaSize,
          scale: 1
        }}
        transition={{ 
          type: "spring",
          stiffness: 300,
          damping: 25,
          duration: 0.6
        }}
      >
        {/* Crust texture */}
        <div 
          className="absolute inset-0 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle at 60% 40%, transparent 30%, rgba(120, 90, 40, 0.25) 70%)',
          }}
        />
        
        {/* Inner pizza base (different size based on crust) */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute inset-0 rounded-full m-auto"
          style={{
            width: `${crustThickness * 100}%`,
            height: `${crustThickness * 100}%`,
            background: 'radial-gradient(circle at 45% 40%, #F0D4B0, #E8C29A 40%, #D4A574 75%)',
            boxShadow: 'inset 0 1px 4px rgba(0, 0, 0, 0.12)',
          }}
          transition={{ 
            type: "spring", 
            stiffness: 250, 
            damping: 22,
            delay: 0.1
          }}
        />
        
        {/* Sauce layer with pouring animation */}
        {sauce && sauce !== 'none' && (
          <>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 0.75, opacity: 1 }}
              className="absolute inset-0 rounded-full m-auto overflow-hidden"
              style={{
                width: '75%',
                height: '75%',
              }}
              transition={{ 
                type: "spring", 
                stiffness: 200, 
                damping: 18,
                delay: 0.2
              }}
            >
              <motion.div
                initial={{ clipPath: 'circle(0% at 50% 50%)' }}
                animate={{ clipPath: 'circle(100% at 50% 50%)' }}
                className="absolute inset-0 rounded-full"
                style={{
                  background: sauce === 'marinara' 
                    ? 'radial-gradient(circle at 45% 40%, #E74C3C, #DC3545 50%, #C92A2A 80%)'
                    : sauce === 'bbq' 
                    ? 'radial-gradient(circle at 45% 40%, #A0522D, #8B4513 50%, #654321 80%)'
                    : sauce === 'white' 
                    ? 'radial-gradient(circle at 45% 40%, #FAFAEC, #F5F5DC 50%, #E8E8D0 80%)'
                    : 'radial-gradient(circle at 45% 40%, #5A9370, #4A7C59 50%, #2F5233 80%)',
                  boxShadow: 'inset 0 1px 6px rgba(0, 0, 0, 0.18)',
                }}
                transition={{ 
                  duration: 0.8, 
                  ease: [0.4, 0, 0.2, 1],
                  delay: 0.3
                }}
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                className="absolute inset-0"
                style={{
                  background: `
                    radial-gradient(circle at 30% 25%, rgba(255, 255, 255, 0.3) 0%, transparent 15%),
                    radial-gradient(circle at 70% 60%, rgba(255, 255, 255, 0.2) 0%, transparent 10%),
                    radial-gradient(circle at 45% 80%, rgba(255, 255, 255, 0.25) 0%, transparent 12%)
                  `,
                }}
                transition={{ 
                  delay: 0.8,
                  duration: 0.5
                }}
              />
            </motion.div>
          </>
        )}

        {/* Cheese layer with melting animation */}
        {cheese && cheese !== 'none' && (
          <>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: cheese === 'light' ? 0.60 : cheese === 'extra' ? 0.72 : 0.68,
                opacity: cheese === 'light' ? 0.75 : 0.92
              }}
              className="absolute inset-0 rounded-full m-auto"
              style={{
                width: cheese === 'light' ? '60%' : cheese === 'extra' ? '72%' : '68%',
                height: cheese === 'light' ? '60%' : cheese === 'extra' ? '72%' : '68%',
                background: 'radial-gradient(circle at 50% 40%, #FFFAEC, #FFF8DC 40%, #FFE4B5 70%, #F0D58C 90%)',
                boxShadow: 'inset 0 1px 4px rgba(255, 220, 120, 0.35), inset 0 -1px 4px rgba(139, 105, 20, 0.15)',
              }}
              transition={{ 
                type: "spring", 
                stiffness: 250, 
                damping: 18,
                delay: 0.9
              }}
            />
            {/* Cheese melting texture bubbles with animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: [0, 0.5, 0.4],
                scale: [0.8, 1.05, 1]
              }}
              className="absolute inset-0 rounded-full m-auto"
              style={{
                width: cheese === 'light' ? '60%' : cheese === 'extra' ? '72%' : '68%',
                height: cheese === 'light' ? '60%' : cheese === 'extra' ? '72%' : '68%',
                background: `
                  radial-gradient(circle at 25% 30%, rgba(255, 255, 220, 0.9) 0%, transparent 5%),
                  radial-gradient(circle at 65% 45%, rgba(255, 255, 220, 0.7) 0%, transparent 4%),
                  radial-gradient(circle at 40% 60%, rgba(255, 255, 220, 0.8) 0%, transparent 4.5%),
                  radial-gradient(circle at 75% 25%, rgba(255, 255, 220, 0.6) 0%, transparent 3.5%),
                  radial-gradient(circle at 20% 70%, rgba(255, 255, 220, 0.7) 0%, transparent 4%),
                  radial-gradient(circle at 85% 65%, rgba(255, 255, 220, 0.8) 0%, transparent 5%),
                  radial-gradient(circle at 50% 40%, rgba(255, 255, 220, 0.5) 0%, transparent 3%)
                `,
              }}
              transition={{ 
                delay: 1.1,
                duration: 0.8,
                times: [0, 0.6, 1]
              }}
            />
            {/* Extra cheese layer with stretch effect */}
            {cheese === 'extra' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 0.3, scale: 1 }}
                className="absolute inset-0 rounded-full m-auto"
                style={{
                  width: '68%',
                  height: '68%',
                  background: 'radial-gradient(circle at 50% 50%, rgba(255, 248, 220, 0.6) 0%, transparent 60%)',
                  filter: 'blur(2px)',
                }}
                transition={{ 
                  delay: 1.3,
                  duration: 0.6
                }}
              />
            )}
          </>
        )}
        
        {/* Realistic topping dots with natural spread */}
        {toppings.map((toppingId, index) => {
          const position = toppingPositions[index];
          const hasCheeseLayer = cheese && cheese !== 'none';
          const toppingDelay = hasCheeseLayer ? 1.4 : 0.9;

          return (
            <motion.div
              key={`${toppingId}-${index}`}
              initial={{ 
                scale: 0,
                x: 0,
                y: -100,
                opacity: 0,
                rotate: -45,
              }}
              animate={{ 
                scale: 1,
                x: position.x,
                y: position.y,
                opacity: 1,
                rotate: position.rotation,
              }}
              transition={{ 
                type: "spring",
                stiffness: 180,
                damping: 14,
                delay: toppingDelay + index * 0.06,
                rotate: {
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                }
              }}
            >
              <ToppingDot 
                type={toppingId}
                style={{
                  width: `${position.sizeVar}px`,
                  height: `${position.sizeVar}px`,
                }}
              />
            </motion.div>
          );
        })}
      </motion.div>
      
      {/* Topping count text */}
      {toppings.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="mt-6 text-center"
        >
          <motion.p
            key={toppings.length}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="text-lg font-semibold text-foreground"
          >
            {toppings.length} {toppings.length === 1 ? 'topping' : 'toppings'} added
          </motion.p>
        </motion.div>
      )}
    </div>
  );
}
