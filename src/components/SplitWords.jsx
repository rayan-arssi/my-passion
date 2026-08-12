import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

export default function SplitWords({
  text,
  className = '',
  delay = 0,
  stagger = 0.06,
  as: Tag = 'span',
}) {
  const words = text.split(' ');
  return (
    <Tag className={`split ${className}`} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} className="split-word-wrap" style={{ display: 'inline-block', overflow: 'hidden' }}>
          <motion.span
            className="split-word"
            initial={{ y: '115%', opacity: 0 }}
            whileInView={{ y: '0%', opacity: 1 }}
            viewport={{ once: true, margin: '-12% 0px -12% 0px' }}
            transition={{ duration: 0.7, delay: delay + i * stagger, ease }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
