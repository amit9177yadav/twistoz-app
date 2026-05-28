import styles from './SectionHeader.module.scss';

export default function SectionHeader({ title, subtitle, light = false, centered = true }) {
  return (
    <div className={`${styles.header} ${centered ? styles.centered : ''} ${light ? styles.light : ''}`}>
      <div className={styles.titleWrap}>
        <span className={styles.decor} aria-hidden="true" />
        <h2 className={styles.title}>{title}</h2>
        <span className={styles.decor} aria-hidden="true" />
      </div>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
