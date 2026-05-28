import { motion } from 'framer-motion';
import Button from '../Button/Button';
import SafeImage from '../SafeImage/SafeImage';
import { scaleIn } from '../../../utils/animations';
import styles from './ProductCard.module.scss';

export default function ProductCard({ name, description, image }) {
  return (
    <motion.article
      className={styles.card}
      variants={scaleIn}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      <div className={styles.imageWrap}>
        <SafeImage src={image} alt={name} className={styles.image} />
        <div className={styles.imageOverlay} />
      </div>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.description}>{description}</p>
      <Button variant="outline" className={styles.button}>
        View Details
      </Button>
    </motion.article>
  );
}
