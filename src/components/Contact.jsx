import { motion } from 'framer-motion';
import Reveal from './Reveal';
import SplitWords from './SplitWords';
import Magnetic from './Magnetic';
import Globe from './Globe';
import { BrushSwoosh } from './Brush';

const EMAIL = 'r.arssi@outlook.com';

const head = ['LET\'S MAKE', 'SOMETHING', 'GREAT.'];

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="contact-top">
        <Reveal delay={0.1}>
          <span className="contact-kicker">HAVE AN IDEA, PROJECT OR OPPORTUNITY?</span>
        </Reveal>
        <div className="contact-globe">
          <Globe size={72} />
        </div>
      </div>

      <h2 className="contact-head">
        {head.map((line, i) => (
          <span key={line} className="contact-headline">
            <SplitWords text={line} delay={0.05 + i * 0.08} className="contact-head-word" />
            {i === head.length - 1 && (
              <span className="contact-brush">
                <BrushSwoosh />
              </span>
            )}
          </span>
        ))}
      </h2>

      <Reveal delay={0.2} className="contact-actions">
        <Magnetic>
          <a className="btn btn--solid" href={`mailto:${EMAIL}?subject=Let's%20make%20something%20great`}>
            GET IN TOUCH
          </a>
        </Magnetic>
        <Magnetic>
          <a className="btn" href={`mailto:${EMAIL}?subject=Hi%20Rayan`}>
            EMAIL ME
          </a>
        </Magnetic>
      </Reveal>

      <Reveal delay={0.25} className="contact-email">
        <a href={`mailto:${EMAIL}`} className="contact-mail" data-cursor="WRITE">
          {EMAIL}
        </a>
      </Reveal>

      <div className="contact-socials">
        <Magnetic strength={0.3}>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" data-cursor="LINK">LINKEDIN ↗</a>
        </Magnetic>
        <span className="contact-x">×</span>
      </div>
    </section>
  );
}
