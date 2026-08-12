import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

export function BrushSwoosh({
  delay = 0,
  duration = 0.9,
  className = '',
  color = '#F05A3C',
  strokeWidth = 26,
}) {
  return (
    <svg
      viewBox="0 0 320 60"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
      fill="none"
    >
      <motion.path
        d="M 4 46 C 70 10 150 6 240 16 C 282 21 304 28 316 34"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: '-15% 0px' }}
        transition={{ duration, delay, ease }}
      />
      <path
        d="M 4 46 C 70 10 150 6 240 16 C 282 21 304 28 316 34"
        stroke={color}
        strokeWidth={strokeWidth - 12}
        strokeLinecap="round"
        opacity="0.35"
        transform="translate(0 2)"
      />
    </svg>
  );
}

export function BrushBlob({
  className = '',
  delay = 0.4,
  color = '#F05A3C',
  id = 'blob1',
}) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <motion.path
        d="M100 12 C 145 8 182 30 190 74 C 197 116 176 158 132 182 C 86 207 40 190 24 148 C 8 108 24 68 54 30 C 74 6 86 14 100 12 Z"
        fill={color}
        initial={{ scale: 0.4, rotate: -12, opacity: 0 }}
        whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay, ease, type: 'spring', stiffness: 90, damping: 14 }}
      />
      <path
        d="M100 12 C 145 8 182 30 190 74 C 197 116 176 158 132 182 C 86 207 40 190 24 148 C 8 108 24 68 54 30 C 74 6 86 14 100 12 Z"
        fill="none"
        stroke="#14120f"
        strokeWidth="2"
        transform="translate(6 5)"
        opacity="0"
      />
    </svg>
  );
}
