import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

export default function Reveal({
  children,
  delay = 0,
  y = 40,
  className = '',
  once = true,
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-12% 0px -12% 0px' }}
      transition={{ duration: 0.8, delay, ease }}
    >
      {children}
    </motion.div>
  );
}
