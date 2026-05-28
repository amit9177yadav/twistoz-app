import { motion } from 'framer-motion';
import Button from '../../ui/Button/Button';
import FeaturesBar from '../FeaturesBar/FeaturesBar';
import SafeImage from '../../ui/SafeImage/SafeImage';
import images from '../../../data/images';
import { slideLeft, slideRight, floatAnimation, floatAnimationSlow } from '../../../utils/animations';
import styles from './Hero.module.scss';

const floatingElements = [
  { className: styles.floatPasta1, delay: 0 },
  { className: styles.floatPasta2, delay: 0.5 },
  { className: styles.floatTomato, delay: 0.2 },
  { className: styles.floatBasil1, delay: 0.8 },
  { className: styles.floatBasil2, delay: 1.2 },
  { className: styles.floatWheat, delay: 0.6 },
];

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.bgPattern} aria-hidden="true" />

      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial="hidden"
          animate="visible"
          variants={slideLeft}
        >
          <span className={styles.eyebrow}>100% Pure Durum Wheat</span>
          <h1 className={styles.title}>
            Taste the Twist,{' '}
            <span className={styles.highlight}>Feel the Love</span>
          </h1>
          <p className={styles.subtitle}>
            Premium pasta &amp; vermicelli made from 100% pure durum wheat.
          </p>
          <Button href="#products" variant="navy" icon="arrow" className={styles.cta}>
            Explore Products
          </Button>
        </motion.div>

        <motion.div
          className={styles.visual}
          initial="hidden"
          animate="visible"
          variants={slideRight}
        >
          <div className={styles.imageGlow} aria-hidden="true" />
          <div className={styles.imageWrap}>
            <SafeImage
              src={images.hero}
              alt="Premium golden vermicelli — fine delicate pasta strands"
              className={styles.heroImage}
              loading="eager"
              fetchPriority="high"
            />
          </div>

          {floatingElements.map(({ className, delay }, i) => (
            <motion.span
              key={i}
              className={className}
              aria-hidden="true"
              animate={i % 2 === 0 ? floatAnimation.animate : floatAnimationSlow.animate}
              transition={{ ...floatAnimation.animate.transition, delay }}
            />
          ))}
        </motion.div>
      </div>

      <FeaturesBar />
    </section>
  );
}
