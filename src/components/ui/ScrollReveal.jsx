import { motion, useReducedMotion } from "framer-motion";

function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}) {
  const shouldReduceMotion = useReducedMotion();

  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: -40, y: 0 },
    right: { x: 40, y: 0 },
  };

  const initialDirection =
    directions[direction] || directions.up;

  return (
    <motion.div
      className={className}
      initial={
        shouldReduceMotion
          ? false
          : {
              opacity: 0,
              ...initialDirection,
            }
      }
      whileInView={
        shouldReduceMotion
          ? {}
          : {
              opacity: 1,
              x: 0,
              y: 0,
            }
      }
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export default ScrollReveal;