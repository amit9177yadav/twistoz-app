import { motion } from 'framer-motion';
import Icon from '../../ui/Icon/Icon';
import Button from '../../ui/Button/Button';
import ProductShowcase from './ProductShowcase';
import { aboutHighlights } from '../../../data/siteData';
import { slideLeft, slideRight } from '../../../utils/animations';
import styles from './About.module.scss';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.bgDecor} aria-hidden="true" />
      <div className={styles.bgPattern} aria-hidden="true" />

      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={slideLeft}
        >
          <div className={styles.headerBlock}>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowDot} aria-hidden="true" />
              Our Story
            </span>
            <h2 className={styles.title}>
              About <span className={styles.titleAccent}>TwisToz</span>
            </h2>
            <span className={styles.titleLine} aria-hidden="true" />
          </div>

          <p className={styles.lead}>
            TwisToz brings the authentic taste of Italy to your kitchen. Crafted from
            100% pure durum wheat semolina, our premium pasta and vermicelli are made
            using traditional techniques and modern hygienic processing — delivering
            perfect texture, rich nutrition, and unforgettable flavour in every bite.
          </p>

          <blockquote className={styles.quoteBox}>
            <span className={styles.quoteMark} aria-hidden="true">&ldquo;</span>
            <p className={styles.quoteText}>
              From our state-of-the-art facility to your family table, we are committed
              to quality you can taste and trust.
            </p>
          </blockquote>

          <ul className={styles.highlights}>
            {aboutHighlights.map(({ id, label, icon }) => (
              <li key={id} className={styles.highlight}>
                <span className={styles.highlightIcon}>
                  <Icon name={icon} />
                </span>
                <span className={styles.highlightLabel}>{label}</span>
              </li>
            ))}
          </ul>

          <Button href="#why-choose" variant="primary" icon="arrow" className={styles.cta}>
            Know More
          </Button>
        </motion.div>

        <motion.div
          className={styles.visual}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={slideRight}
        >
          <ProductShowcase />
        </motion.div>
      </div>
    </section>
  );
}
