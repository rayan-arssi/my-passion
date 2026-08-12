import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import Reveal from './Reveal';
import { skills } from '../data/skills';

function SkillCard({ skill, mx, my, depth, onHover }) {
  const x = useTransform(mx, (v) => v * (8 + depth * 12));
  const y = useTransform(my, (v) => v * (8 + depth * 12));

  return (
    <motion.button
      className="tool-card"
      style={{ x, y }}
      data-cursor="INFO"
      onMouseEnter={(e) => onHover(skill, e)}
      onMouseLeave={() => onHover(null)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 0.55, delay: (depth % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="tool-card-inner" style={{ ['--d']: `${(depth % 4) * 0.9}s` }}>
        <span className="tool-card-name">{skill.name}</span>
        <span className="tool-card-plus">+</span>
      </span>
    </motion.button>
  );
}

export default function Toolbox() {
  const gridRef = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 60, damping: 20 });
  const smy = useSpring(my, { stiffness: 60, damping: 20 });
  const [tip, setTip] = useState(null);

  const onMove = (e) => {
    const r = gridRef.current.getBoundingClientRect();
    mx.set((e.clientX - r.left - r.width / 2) / (r.width / 2));
    my.set((e.clientY - r.top - r.height / 2) / (r.height / 2));
  };

  const onReset = () => {
    mx.set(0);
    my.set(0);
    setTip(null);
  };

  const showTip = (skill, e) => {
    if (!skill) return setTip(null);
    const grid = gridRef.current.getBoundingClientRect();
    const card = e.currentTarget.getBoundingClientRect();
    const left = card.left - grid.left;
    const toLeft = left > grid.width / 2;
    setTip({ skill, x: left, y: card.top - grid.top + card.height / 2, toLeft });
  };

  return (
    <section className="section toolbox" id="skills">
      <div className="container">
        <header className="section-head">
          <Reveal>
            <h2 className="section-title">MY TOOLBOX</h2>
          </Reveal>
          <Reveal delay={0.12}>
            <span className="handnote">hover a tool — see how I use it</span>
          </Reveal>
        </header>

        <div className="toolbox-grid" ref={gridRef} onMouseMove={onMove} onMouseLeave={onReset}>
          {skills.map((s, i) => (
            <SkillCard
              key={s.name}
              skill={s}
              mx={smx}
              my={smy}
              depth={i % 4}
              onHover={showTip}
            />
          ))}

          <AnimatePresence>
            {tip && (
              <motion.div
                className={`tool-tip${tip.toLeft ? ' tool-tip--left' : ''}`}
                style={{ left: tip.x, top: tip.y }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.2 }}
              >
                <span className="tool-tip-name">{tip.skill.name}</span>
                <span className="tool-tip-text">{tip.skill.use}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
