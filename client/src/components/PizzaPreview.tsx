import { motion } from "framer-motion";

interface PizzaPreviewProps {
  size: string;
  crust: string;
  sauce: string;
  cheese: string;
  toppings: string[];
}

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

export default function PizzaPreview({ size, sauce, cheese, toppings }: PizzaPreviewProps) {
  const getPizzaSize = () => {
    switch (size) {
      case 'small': return 180;
      case 'medium': return 220;
      case 'large': return 260;
      case 'xlarge': return 300;
      default: return 220;
    }
  };

  const pizzaSize = getPizzaSize();

  return (
    <div className="aspect-square bg-gradient-to-br from-card to-muted rounded-lg flex items-center justify-center p-6">
      <motion.div 
        className="rounded-full relative shadow-2xl"
        style={{
          background: 'radial-gradient(circle at 35% 35%, #D4A574, #C19A6B 40%, #B8860B 70%, #8B6914)',
          boxShadow: 'inset 0 -8px 30px rgba(0, 0, 0, 0.3), inset 0 8px 20px rgba(255, 255, 255, 0.1), 0 15px 40px rgba(0, 0, 0, 0.4)',
        }}
        animate={{ 
          width: pizzaSize,
          height: pizzaSize,
        }}
        transition={{ 
          type: "spring",
          stiffness: 200,
          damping: 25
        }}
      >
        {/* Crust texture */}
        <div 
          className="absolute inset-0 rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle at 60% 40%, transparent 30%, rgba(139, 105, 20, 0.3) 60%)',
          }}
        />
        
        {/* Inner pizza base */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 0.82 }}
          className="absolute inset-0 rounded-full m-auto"
          style={{
            width: '82%',
            height: '82%',
            background: 'radial-gradient(circle at 40% 40%, #E8C29A, #D4A574)',
            boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.2)',
          }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        />
        
        {/* Sauce layer */}
        {sauce && sauce !== 'none' && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 0.75, opacity: 1 }}
            className="absolute inset-0 rounded-full m-auto"
            style={{
              width: '75%',
              height: '75%',
              background: sauce === 'marinara' 
                ? 'radial-gradient(circle at 40% 40%, #DC3545, #C92A2A 60%, #A61E1E)'
                : sauce === 'bbq' 
                ? 'radial-gradient(circle at 40% 40%, #8B4513, #654321 60%, #4A3621)'
                : sauce === 'white' 
                ? 'radial-gradient(circle at 40% 40%, #F5F5DC, #E8E8D0 60%, #D3D3C0)'
                : 'radial-gradient(circle at 40% 40%, #4A7C59, #2F5233 60%, #1F3322)',
              boxShadow: 'inset 0 2px 12px rgba(0, 0, 0, 0.3)',
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        )}

        {/* Cheese layer */}
        {cheese && cheese !== 'none' && (
          <>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: cheese === 'light' ? 0.60 : cheese === 'extra' ? 0.72 : 0.68,
                opacity: cheese === 'light' ? 0.7 : 0.95
              }}
              className="absolute inset-0 rounded-full m-auto"
              style={{
                width: cheese === 'light' ? '60%' : cheese === 'extra' ? '72%' : '68%',
                height: cheese === 'light' ? '60%' : cheese === 'extra' ? '72%' : '68%',
                background: 'radial-gradient(circle at 45% 35%, #FFF8DC, #FFE4B5 50%, #F0D58C 80%)',
                boxShadow: 'inset 0 2px 8px rgba(255, 200, 100, 0.5), inset 0 -2px 8px rgba(139, 105, 20, 0.2)',
              }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 20,
                delay: 0.15 
              }}
            />
            {/* Cheese texture bubbles */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              className="absolute inset-0 rounded-full m-auto"
              style={{
                width: cheese === 'light' ? '60%' : cheese === 'extra' ? '72%' : '68%',
                height: cheese === 'light' ? '60%' : cheese === 'extra' ? '72%' : '68%',
                background: `
                  radial-gradient(circle at 25% 30%, rgba(255, 255, 220, 0.8) 0%, transparent 4%),
                  radial-gradient(circle at 65% 45%, rgba(255, 255, 220, 0.6) 0%, transparent 3%),
                  radial-gradient(circle at 40% 60%, rgba(255, 255, 220, 0.7) 0%, transparent 3.5%),
                  radial-gradient(circle at 75% 25%, rgba(255, 255, 220, 0.5) 0%, transparent 2.5%),
                  radial-gradient(circle at 20% 70%, rgba(255, 255, 220, 0.6) 0%, transparent 3%),
                  radial-gradient(circle at 85% 65%, rgba(255, 255, 220, 0.7) 0%, transparent 4%)
                `,
              }}
              transition={{ 
                delay: 0.4,
                duration: 0.6
              }}
            />
          </>
        )}
        
        {/* Realistic topping dots */}
        {cheese && cheese !== 'none' && toppings.map((toppingId, index) => {
          const totalToppings = toppings.length;
          const rings = Math.ceil(Math.sqrt(totalToppings));
          const currentRing = Math.floor(index / (totalToppings / rings));
          const itemsInRing = Math.ceil(totalToppings / rings);
          const angleStep = (Math.PI * 2) / itemsInRing;
          const angle = angleStep * (index % itemsInRing) + (currentRing * 0.5);
          const radius = (pizzaSize * (0.15 + currentRing * 0.08));
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          const toppingHash = toppingId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
          const sizeVar = 12 + ((toppingHash % 8) + index % 4);

          return (
            <motion.div
              key={`${toppingId}-${index}`}
              initial={{ 
                scale: 0,
                x: 0,
                y: -100,
                opacity: 0,
              }}
              animate={{ 
                scale: 1,
                x: x,
                y: y,
                opacity: 1,
              }}
              transition={{ 
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.3 + index * 0.05
              }}
            >
              <ToppingDot 
                type={toppingId}
                style={{
                  width: `${sizeVar}px`,
                  height: `${sizeVar}px`,
                }}
              />
            </motion.div>
          );
        })}
        
        {/* Topping counter badge */}
        {toppings.length > 0 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="absolute -top-3 -right-3 bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold shadow-lg border-4 border-background"
          >
            <motion.span
              key={toppings.length}
              initial={{ scale: 1.5 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 15 }}
            >
              {toppings.length}
            </motion.span>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
