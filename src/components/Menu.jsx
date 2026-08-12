import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { scrollToId, getLenis } from '../lib/scroll';
import Globe from './Globe';

const links = [
  { label: 'WORK', id: 'work' },
  { label: 'POSTERS', id: 'posters' },
  { label: 'ABOUT', id: 'about' },
  { label: 'SKILLS', id: 'skills' },
  { label: 'CONTACT', id: 'contact' },
];

export default function Menu({ open, setOpen }) {
  useEffect(() => {
    const lenis = getLenis();
    if (open) {
      lenis?.stop();
      document.body.style.overflow = 'hidden';
    } else {
      lenis?.start();
      document.body.style.overflow = '';
    }
    return () => {
      lenis?.start();
      document.body.style.overflow = '';
    };
  }, [open]);

  const go = (id) => {
    setOpen(false);
    setTimeout(() => scrollToId(id), 350);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="menu"
          initial={{ clipPath: 'inset(0% 0% 100% 0%)' }}
          animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
          exit={{ clipPath: 'inset(0% 0% 100% 0%)' }}
          transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="menu-bgtext" aria-hidden="true">
            RA
          </div>
          <div className="menu-globe">
            <Globe size={88} />
          </div>
          <div className="menu-inner">
            <nav className="menu-nav">
              {links.map((link, i) => (
                <div key={link.id} className="menu-linkwrap" style={{ overflow: 'hidden' }}>
                  <motion.button
                    className="menu-link"
                    onClick={() => go(link.id)}
                    initial={{ y: '110%' }}
                    animate={{ y: '0%' }}
                    exit={{ y: '60%', opacity: 0 }}
                    transition={{
                      delay: 0.25 + i * 0.07,
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <span className="menu-num">0{i + 1}</span>
                    <span className="menu-label">
                      {link.label}
                      <i className="menu-brush" aria-hidden="true" />
                    </span>
                  </motion.button>
                </div>
              ))}
            </nav>
            <div className="menu-foot">
              <span className="menu-foot-mail">r.arssi@outlook.com</span>
              <span className="menu-foot-socials">LINKEDIN</span>
              <span className="menu-foot-tag">DESIGN × CODE</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
