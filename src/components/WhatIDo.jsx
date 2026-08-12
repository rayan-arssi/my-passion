import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from './Reveal';
import { designDisciplines, devDisciplines } from '../data/skills';

const ease = [0.22, 1, 0.36, 1];

function List({ items }) {
  return (
    <motion.ul
      className="whatido-list"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
        exit: { transition: { staggerChildren: 0.03 } },
      }}
    >
      {items.map((item, i) => (
        <motion.li
          key={item}
          className="whatido-item"
          variants={{
            hidden: { y: 40, opacity: 0, rotate: 1 },
            visible: { y: 0, opacity: 1, rotate: 0, transition: { duration: 0.6, ease } },
            exit: { y: -20, opacity: 0, transition: { duration: 0.3, ease } },
          }}
        >
          <span className="whatido-num">{String(i + 1).padStart(2, '0')}</span>
          <span className="whatido-name">{item}</span>
          <span className="whatido-brush" aria-hidden="true" />
        </motion.li>
      ))}
    </motion.ul>
  );
}

export default function WhatIDo() {
  const [mode, setMode] = useState('DESIGN');

  return (
    <section className="section whatido" id="whatido">
      <div className="container">
        <header className="section-head">
          <Reveal>
            <h2 className="section-title">WHAT I DO</h2>
          </Reveal>
          <Reveal delay={0.12}>
            <span className="handnote">one brain, two modes</span>
          </Reveal>
        </header>

        <Reveal className="whatido-togglewrap">
          <div className="whatido-toggle" role="tablist">
            {['DESIGN', 'DEVELOPMENT'].map((m) => (
              <button
                key={m}
                role="tab"
                aria-selected={mode === m}
                className={`whatido-togglebtn${mode === m ? ' whatido-togglebtn--active' : ''}`}
                onClick={() => setMode(m)}
              >
                {m}
                {mode === m && (
                  <motion.span
                    className="whatido-togglefill"
                    layoutId="toggleFill"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="whatido-body">
          <div className="whatido-mode" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.div
                key={mode}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <span className="whatido-mode-label">
                  {mode === 'DESIGN' ? '→ the look & the feel' : '→ the logic & the code'}
                </span>
                {mode === 'DESIGN' ? <List items={designDisciplines} /> : <List items={devDisciplines} />}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="whatido-side" aria-hidden="true">
            <span className="whatido-side-big">{mode === 'DESIGN' ? 'D' : 'D'}</span>
            <span className="whatido-side-sub">{mode === 'DESIGN' ? 'DESIGN' : 'DEV'}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
