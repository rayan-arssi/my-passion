import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Reveal from './Reveal';
import SplitWords from './SplitWords';
import Portrait from './Portrait';
import { timeline } from '../data/skills';

const ease = [0.22, 1, 0.36, 1];

export default function About() {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 78%', 'end 55%'],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-copy">
            <Reveal>
              <h2 className="about-hello">
                <SplitWords text="HEY, I'M RAYAN." delay={0.05} />
              </h2>
            </Reveal>

            <div className="about-roles">
              {['DIGITAL DESIGNER.', 'FRONTEND DEVELOPER.', 'CREATIVE THINKER.'].map((r, i) => (
                <Reveal key={r} delay={0.08 * i}>
                  <p className={`about-role about-role--${i}`}>{r}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.15}>
              <p className="about-text">
                I like turning ideas into digital experiences.
                <br />
                My work sits between design and development —
                <br />
                combining visual thinking with code to create
                <br />
                websites that don't just work, they feel good to use.
              </p>
            </Reveal>

            <Reveal delay={0.2} className="about-annot">
              <span className="about-arrow" aria-hidden="true">↘</span>
              <span className="about-annot-text handnote">the profile shot, obviously</span>
              <span className="about-circle" aria-hidden="true" />
            </Reveal>
          </div>

          <Reveal delay={0.15} className="about-photo-col">
            <Portrait variant="about" />
            <span className="about-stamp" aria-hidden="true">RA × 2026</span>
          </Reveal>
        </div>

        <div className="about-timeline" ref={timelineRef}>
          <motion.span className="about-timeline-line" style={{ scaleY: lineScale }} />
          {timeline.map((t, i) => (
            <motion.div
              key={t.year}
              className="about-tl-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.6, ease, delay: 0.1 * i }}
            >
              <span className="about-tl-dot" aria-hidden="true" />
              <span className="about-tl-year">{t.year}</span>
              <span className="about-tl-text">{t.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
