import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../../ui/SectionHeader/SectionHeader';
import SafeImage from '../../ui/SafeImage/SafeImage';
import { galleryImages } from '../../../data/siteData';
import styles from './Gallery.module.scss';

export default function Gallery() {
  const trackRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const track = trackRef.current;
    if (!track) return;
    setCanScrollLeft(track.scrollLeft > 0);
    setCanScrollRight(track.scrollLeft < track.scrollWidth - track.clientWidth - 1);
  };

  const scroll = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * track.clientWidth * 0.75, behavior: 'smooth' });
    setTimeout(updateScrollState, 350);
  };

  return (
    <section id="recipes" className={styles.gallery}>
      <div className={styles.container}>
        <SectionHeader
          title="From Our Kitchen to Yours"
          subtitle="A glimpse of our world"
        />

        <div className={styles.carousel}>
          <motion.button
            type="button"
            className={`${styles.navBtn} ${styles.prev}`}
            onClick={() => scroll(-1)}
            disabled={!canScrollLeft}
            aria-label="Previous images"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </motion.button>

          <div className={styles.track} ref={trackRef} onScroll={updateScrollState}>
            {galleryImages.map(({ id, src, alt }, index) => (
              <motion.div
                key={id}
                className={styles.slide}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <SafeImage src={src} alt={alt} className={styles.image} />
              </motion.div>
            ))}
          </div>

          <motion.button
            type="button"
            className={`${styles.navBtn} ${styles.next}`}
            onClick={() => scroll(1)}
            disabled={!canScrollRight}
            aria-label="Next images"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
