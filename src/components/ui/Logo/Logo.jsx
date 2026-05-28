import styles from './Logo.module.scss';

export default function Logo() {
  return (
    <img
      src="/images/twistoz-logo.png"
      alt="Twistoz - Taste the Twist, Feel the Love"
      className={styles.logo}
      decoding="async"
      fetchPriority="high"
    />
  );
}
