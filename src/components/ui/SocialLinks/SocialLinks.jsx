import Icon from '../Icon/Icon';
import styles from './SocialLinks.module.scss';

export default function SocialLinks({ links, variant = 'compact', className = '' }) {
  return (
    <ul className={`${styles.list} ${styles[variant]} ${className}`.trim()}>
      {links.map(({ id, label, href, brandColor }) => (
        <li key={id}>
          <a
            href={href}
            aria-label={`TwisToz on ${label}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            style={{ '--brand-color': brandColor }}
          >
            <span className={styles.iconWrap}>
              <Icon name={id} className={styles.icon} />
            </span>
            {variant === 'premium' && <span className={styles.label}>{label}</span>}
          </a>
        </li>
      ))}
    </ul>
  );
}
