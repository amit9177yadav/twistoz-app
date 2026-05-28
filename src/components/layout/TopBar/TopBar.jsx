import Icon from '../../ui/Icon/Icon';
import SocialLinks from '../../ui/SocialLinks/SocialLinks';
import { topBarFeatures, socialLinks, contactInfo } from '../../../data/siteData';
import styles from './TopBar.module.scss';

export default function TopBar() {
  return (
    <div className={styles.topBar}>
      <div className={styles.container}>
        <ul className={styles.features}>
          {topBarFeatures.map(({ id, label, icon }) => (
            <li key={id} className={styles.feature}>
              <Icon name={icon} className={styles.featureIcon} />
              <span>{label}</span>
            </li>
          ))}
        </ul>

        <div className={styles.right}>
          <span className={styles.phone}>
            <Icon name="phone" className={styles.phoneIcon} />
            Customer Care:{' '}
            <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
          </span>
          <SocialLinks links={socialLinks} variant="compact" />
        </div>
      </div>
    </div>
  );
}
