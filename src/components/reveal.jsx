import { motion } from "framer-motion";

function Reveal({ children, delay = 0, y = -0, x = 60, className=""}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: y, x: x }}
      className={className}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 1.2,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;