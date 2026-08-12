import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const lines = [
  { text: 'GOOD DESIGN', x: [70, -80] },
  { text: 'SHOULD FEEL', x: [-60, 80] },
  { text: 'ALIVE.', x: [60, -40] },
];

export default function Statement() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const yAsterisk = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const rotAsterisk = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const arrowY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const x1 = useTransform(scrollYProgress, [0, 1], lines[0].x);
  const x2 = useTransform(scrollYProgress, [0, 1], lines[1].x);
  const x3 = useTransform(scrollYProgress, [0, 1], lines[2].x);
  const lineX = [x1, x2, x3];

  return (
    <section className="statement" ref={ref}>
      <motion.span className="statement-arrow statement-arrow--a" style={{ y: arrowY }} aria-hidden="true">↗</motion.span>
      <motion.span className="statement-arrow statement-arrow--b" style={{ y: arrowY }} aria-hidden="true">↘</motion.span>
      <span className="statement-x statement-x--a" aria-hidden="true">✕</span>
      <span className="statement-x statement-x--b" aria-hidden="true">✕</span>

      <motion.div className="statement-asterisk" style={{ y: yAsterisk, rotate: rotAsterisk }} aria-hidden="true">
        *
      </motion.div>

      {lines.map((line, i) => (
        <motion.div
          key={line.text}
          className="statement-line"
          style={{ x: lineX[i] }}
        >
          <span className="statement-text">{line.text}</span>
        </motion.div>
      ))}

      <div className="statement-tag">
        <span>SCROLL, IT MOVES</span>
      </div>
    </section>
  );
}
