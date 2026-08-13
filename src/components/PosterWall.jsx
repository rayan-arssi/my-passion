import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getLenis } from '../lib/scroll';
import Reveal from './Reveal';
import { posters } from '../data/posters';

const ease = [0.22, 1, 0.36, 1];

function PosterArt({ poster }) {
  if (poster.image) {
    return (
      <div className={`pwall-art pwall-art--${poster.variant} pwall-art--photo`} aria-hidden="true">
        <img className="pwall-photo" src={poster.image} alt="" />
        <span className="pwall-photo-overlay" />
        <span className="pwall-index">{poster.id}</span>
      </div>
    );
  }
  return (
    <div className={`pwall-art pwall-art--${poster.variant}`} aria-hidden="true">
      <span className="pwall-art-title">{poster.title}</span>
      {poster.variant === 0 && (
        <>
          <span className="pwall-circle" />
          <span className="pwall-dot" />
        </>
      )}
      {poster.variant === 1 && (
        <>
          <span className="pwall-stripes" />
          <span className="pwall-bar" />
        </>
      )}
      {poster.variant === 2 && (
        <>
          <span className="pwall-arch" />
          <span className="pwall-lines">
            <i /><i /><i />
          </span>
        </>
      )}
      {poster.variant === 3 && (
        <>
          <span className="pwall-blob" />
          <span className="pwall-num">{poster.id}</span>
        </>
      )}
      {poster.variant === 4 && (
        <>
          <span className="pwall-grid">
            <i /><i /><i /><i />
          </span>
          <span className="pwall-x">×</span>
        </>
      )}
      <span className="pwall-index">{poster.id}</span>
    </div>
  );
}

function PosterTile({ poster }) {
  return (
    <>
      <PosterArt poster={poster} />
      <span className="pwall-tag">{poster.tag}</span>
    </>
  );
}

function Lightbox({ poster, onClose, count, onPrev, onNext }) {
  useEffect(() => {
    const lenis = getLenis();
    lenis?.stop();
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      lenis?.start();
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div
      className="lightbox"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      onClick={onClose}
    >
      <motion.div
        className={`lightbox-frame lightbox-frame--${poster.ratio || 'square'}`}
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.8, y: 40, rotate: -4, opacity: 0 }}
        animate={{ scale: 1, y: 0, rotate: -2, opacity: 1 }}
        exit={{ scale: 0.85, y: 30, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 180, damping: 20 }}
      >
        <PosterTile poster={poster} />
      </motion.div>

      <div className="lightbox-bar">
        <button className="lightbox-close" onClick={onClose}>CLOSE ✕</button>
        <span className="lightbox-count">{poster.id} / {count}</span>
        <div className="lightbox-nav">
          <button onClick={onPrev}>←</button>
          <button onClick={onNext}>→</button>
        </div>
      </div>
    </motion.div>
  );
}

export default function PosterWall() {
  const [openIndex, setOpenIndex] = useState(null);

  const openPoster = openIndex !== null ? posters[openIndex] : null;
  const count = posters.length;

  const prev = () => setOpenIndex((openIndex + count - 1) % count);
  const next = () => setOpenIndex((openIndex + 1) % count);

  return (
    <section className="section pwall" id="posters">
      <div className="container">
        <header className="section-head">
          <Reveal>
            <h2 className="section-title">POSTER WALL</h2>
          </Reveal>
          <Reveal delay={0.12}>
            <span className="handnote">just the design side — UI, visuals, explorations</span>
          </Reveal>
        </header>

        <motion.div layout className="wall-grid">
          <AnimatePresence mode="popLayout">
            {posters.map((poster, i) => (
              <motion.button
                key={poster.id}
                layout
                className={`wall-item wall-item--${poster.ratio || 'square'}${poster.image ? ' wall-item--photo' : ''}`}
                style={
                  poster.image
                    ? {
                        aspectRatio: poster.aspect,
                        ...(poster.span
                          ? { gridColumn: `span ${poster.span}`, marginTop: -160 }
                          : {}),
                        ...(poster.marginTop !== undefined ? { marginTop: poster.marginTop } : {}),
                      }
                    : undefined
                }
                data-cursor="OPEN"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                whileHover={{ rotate: -1.5, scale: 1.03 }}
                transition={{ duration: 0.4, ease, delay: i * 0.03 }}
                onClick={() => setOpenIndex(i)}
              >
                <PosterTile poster={poster} />
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {openPoster && (
          <Lightbox
            poster={openPoster}
            count={count}
            onClose={() => setOpenIndex(null)}
            onPrev={prev}
            onNext={next}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
