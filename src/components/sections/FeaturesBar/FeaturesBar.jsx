import { motion } from 'framer-motion';
import Icon from '../../ui/Icon/Icon';
import { heroFeatures } from '../../../data/siteData';
import { staggerContainer, scaleIn } from '../../../utils/animations';
import styles from './FeaturesBar.module.scss';

const colorClass = {
  orange: styles.orange,
  royal: styles.royal,
};

export default function FeaturesBar() {
  return (
    <div className={styles.wrapper}>
      <motion.div
        className={styles.bar}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        variants={staggerContainer}
      >
        {heroFeatures.map(({ id, label, icon, color }) => (
          <motion.div key={id} className={styles.item} variants={scaleIn}>
            <div className={`${styles.iconCircle} ${colorClass[color]}`}>
              <Icon name={icon} className={styles.icon} />
            </div>
            <span className={styles.label}>{label}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
