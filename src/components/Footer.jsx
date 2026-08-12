import Globe from './Globe';
import { scrollToId } from '../lib/scroll';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div>
          <p className="footer-name">RAYAN ARSSI</p>
          <p className="footer-sub">DIGITAL DESIGNER × WEB &amp; FRONTEND DEVELOPER</p>
        </div>
        <div className="footer-globe">
          <Globe size={54} />
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026</span>
        <span className="footer-made">MADE WITH <b>DESIGN</b> + <b>CODE</b></span>
        <span className="footer-top" onClick={() => scrollToId('top')}>BACK TO TOP ↑</span>
      </div>
    </footer>
  );
}
