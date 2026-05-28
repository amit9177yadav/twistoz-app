import { motion } from 'framer-motion';
import { floatAnimationSlow } from '../../../utils/animations';
import styles from './ProductShowcase.module.scss';
import showcaseStyles from './ProductShowcaseLayout.module.scss';

export default function ProductShowcase() {
  return (
    <div className={showcaseStyles.showcase}>
      <motion.div
        className={showcaseStyles.wheatLeft}
        aria-hidden="true"
        animate={floatAnimationSlow.animate}
      />
      <motion.div
        className={showcaseStyles.wheatRight}
        aria-hidden="true"
        animate={floatAnimationSlow.animate}
        transition={{ delay: 1 }}
      />

      <motion.div
        className={showcaseStyles.package}
        whileHover={{ scale: 1.03, rotate: -1 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <div className={styles.packageTop}>
          <span className={styles.brand}>
            Twis<span className={styles.brandAccent}>To</span>z
          </span>
        </div>
        <div className={styles.packageBody}>
          <span className={styles.productName}>Penne</span>
          <span className={styles.productType}>Pasta</span>
          <div className={styles.pastaIllustration} aria-hidden="true" />
        </div>
        <div className={styles.packageBadge}>100% Durum Wheat</div>
      </motion.div>

      <div className={showcaseStyles.bowl}>
        <div className={showcaseStyles.bowlInner}>
          <div className={showcaseStyles.pastaPile} aria-hidden="true" />
        </div>
      </div>

      <motion.span
        className={showcaseStyles.floatPasta}
        aria-hidden="true"
        animate={floatAnimationSlow.animate}
        transition={{ delay: 0.5 }}
      />
    </div>
  );
}
