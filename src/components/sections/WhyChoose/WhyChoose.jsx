import { motion } from 'framer-motion';
import Icon from '../../ui/Icon/Icon';
import SafeImage from '../../ui/SafeImage/SafeImage';
import { whyChoosePoints, durumAdvantages } from '../../../data/siteData';
import images from '../../../data/images';
import { slideLeft, slideRight, scaleIn } from '../../../utils/animations';
import styles from './WhyChoose.module.scss';

export default function WhyChoose() {
  return (
    <section id="why-choose" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.left}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={slideLeft}
        >
          <span className={styles.eyebrow}>Why Us</span>
          <h2 className={styles.title}>
            Why Choose <span className={styles.brand}>TwisToz?</span>
          </h2>
          <ul className={styles.list}>
            {whyChoosePoints.map((point) => (
              <li key={point} className={styles.listItem}>
                <Icon name="check" className={styles.checkIcon} />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className={styles.center}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={scaleIn}
        >
          <div className={styles.imageWrap}>
            <SafeImage
              src={images.whyChoose}
              alt="Light creamy premium pasta bowl with fresh herbs"
              className={styles.image}
            />
          </div>
        </motion.div>

        <motion.div
          className={styles.right}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={slideRight}
        >
          <div className={styles.advantageBox}>
            <h3 className={styles.advantageTitle}>The Durum Wheat Advantage</h3>
            <div className={styles.advantages}>
              {durumAdvantages.map(({ id, title, description, icon }) => (
                <div key={id} className={styles.advantage}>
                  <Icon name={icon} className={styles.advantageIcon} />
                  <div>
                    <h4 className={styles.advantageName}>{title}</h4>
                    <p className={styles.advantageDesc}>{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
