import Icon from '../Icon/Icon';
import styles from './Button.module.scss';

const variantClass = {
  primary: styles.primary,
  secondary: styles.secondary,
  outline: styles.outline,
  navy: styles.navy,
};

export default function Button({
  children,
  variant = 'primary',
  href,
  icon,
  iconPosition = 'right',
  className = '',
  type = 'button',
  ...props
}) {
  const classes = [styles.button, variantClass[variant], className].filter(Boolean).join(' ');

  const content = (
    <>
      {icon && iconPosition === 'left' && <Icon name={icon} className={styles.icon} />}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <Icon name={icon} className={styles.icon} />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {content}
    </button>
  );
}
