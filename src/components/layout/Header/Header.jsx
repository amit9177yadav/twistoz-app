import { useState } from 'react';
import Logo from '../../ui/Logo/Logo';
import Icon from '../../ui/Icon/Icon';
import TopBar from '../TopBar/TopBar';
import { navLinks } from '../../../data/siteData';
import styles from './Header.module.scss';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <TopBar />

      <div className={styles.navbar}>
        <div className={styles.container}>
          <a href="#home" className={styles.logo} onClick={closeMenu}>
            <Logo />
          </a>

          <nav
            className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}
            aria-label="Main navigation"
          >
            <ul className={styles.navList}>
              {navLinks.map(({ id, label, href, active }) => (
                <li key={id} className={styles.navItem}>
                  <a
                    href={href}
                    className={`${styles.navLink} ${active ? styles.active : ''}`}
                    onClick={closeMenu}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            className={styles.menuToggle}
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} />
          </button>
        </div>
      </div>

      {menuOpen && <div className={styles.overlay} onClick={closeMenu} aria-hidden="true" />}
    </header>
  );
}
