import { useState } from 'react';
import Icon from '../../ui/Icon/Icon';
import SocialLinks from '../../ui/SocialLinks/SocialLinks';
import {
  footerQuickLinks,
  footerProducts,
  contactInfo,
  footerSocialLinks,
} from '../../../data/siteData';
import { subscribeToNewsletter, newsletterMessages } from '../../../services/newsletter';
import styles from './Footer.module.scss';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null); // message string or null
  const [statusType, setStatusType] = useState(null); // 'success' | 'error'
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);
    setStatusType(null);

    const result = await subscribeToNewsletter(email);

    if (result.ok) {
      setStatus(newsletterMessages.success);
      setStatusType('success');
      setEmail('');
    } else {
      const message =
        newsletterMessages[result.code] || newsletterMessages.server_error;
      setStatus(message);
      setStatusType('error');
    }

    setIsSubmitting(false);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (status) {
      setStatus(null);
      setStatusType(null);
    }
  };

  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.wheatLeft} aria-hidden="true" />
      <div className={styles.wheatRight} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <h3 className={styles.heading}>Stay Updated with TwisToz</h3>
            <p className={styles.text}>
              Subscribe to our newsletter for recipes, offers, and updates from our kitchen.
            </p>
            <form className={styles.form} onSubmit={handleSubscribe}>
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                className={styles.input}
                required
                disabled={isSubmitting}
                aria-describedby={status ? 'newsletter-status' : undefined}
              />
              <button
                type="submit"
                className={styles.subscribeBtn}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Subscribing…' : 'Subscribe'}
              </button>
            </form>
            {status && (
              <p
                id="newsletter-status"
                className={statusType === 'success' ? styles.successMsg : styles.errorMsg}
                role={statusType === 'success' ? 'status' : 'alert'}
              >
                {status}
              </p>
            )}
          </div>

          <div className={styles.column}>
            <h3 className={styles.heading}>Quick Links</h3>
            <ul className={styles.links}>
              {footerQuickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.heading}>Our Products</h3>
            <ul className={styles.links}>
              {footerProducts.map(({ label, href }) => (
                <li key={label}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.heading}>Get In Touch</h3>
            <ul className={styles.contactList}>
              <li>
                <Icon name="location" className={styles.contactIcon} />
                <span>{contactInfo.address}</span>
              </li>
              <li>
                <Icon name="phone" className={styles.contactIcon} />
                <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
              </li>
              <li>
                <Icon name="email" className={styles.contactIcon} />
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </li>
              <li>
                <Icon name="globe" className={styles.contactIcon} />
                <a href={`https://${contactInfo.website}`} target="_blank" rel="noopener noreferrer">
                  {contactInfo.website}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} TwisToz. All rights reserved.
          </p>

          <div className={styles.bottomSocialWrap}>
            <p className={styles.followLabel}>Follow Us</p>
            <SocialLinks links={footerSocialLinks} variant="premium" />
          </div>

          <p className={styles.tagline}>Taste the Twist, Feel the Love ❤️</p>
        </div>
      </div>
    </footer>
  );
}
