import { motion } from 'framer-motion';
import { scrollToId } from '../lib/scroll';

export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <motion.header
      className="nav"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
    >
      <button
        className="nav-logo"
        data-cursor="TOP"
        onClick={() => scrollToId('top')}
        aria-label="Back to top"
      >
        RA
      </button>
      <button
        className={`nav-menu${menuOpen ? ' nav-menu--open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="nav-menu-label">{menuOpen ? 'CLOSE' : 'MENU'}</span>
        <span className="nav-menu-icon" aria-hidden="true">
          <i />
          <i />
        </span>
      </button>
    </motion.header>
  );
}
