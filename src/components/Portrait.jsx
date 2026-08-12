import { BrushBlob } from './Brush';
import heroPhoto from '../images/hero_section.png';

function PlaceholderArt({ variant }) {
  return (
    <div className={`portrait-art portrait-art--${variant}`} aria-hidden="true">
      <span className="portrait-art-sun" />
      <span className="portrait-art-ring" />
      <span className="portrait-art-line" />
      <span className="portrait-art-square" />
      <span className="portrait-art-label">PORTRAIT</span>
    </div>
  );
}

export default function Portrait({ variant = 'hero', className = '' }) {
  return (
    <figure className={`portrait portrait--${variant} ${className}`}>
      <BrushBlob className="portrait-blob" id={`blob-${variant}`} />
      <div className="portrait-frame">
        {variant === 'hero' ? (
          <img className="portrait-photo" src={heroPhoto} alt="Rayan Arssi, in the studio" />
        ) : (
          <PlaceholderArt variant={variant} />
        )}
      </div>
      <span className="portrait-tag">{variant === 'hero' ? 'PHOTO 01' : 'PHOTO 02'}</span>
      <figcaption className="portrait-caption">
        {variant === 'hero' ? 'rayan, in the studio' : 'candid — actually working'}
      </figcaption>
    </figure>
  );
}
