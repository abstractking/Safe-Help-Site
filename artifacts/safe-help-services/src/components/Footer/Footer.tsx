import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoText}>SAFE HELP</span>
              <span className={styles.logoSubtext}>SERVICES</span>
            </div>
            <p className={styles.tagline}>
              Veteran-owned. Reliable. Local to Kinder, LA.
            </p>
          </div>

          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h3>Services</h3>
              <a href="#services">Hauling & Delivery</a>
              <a href="#services">Moving & Labor</a>
              <a href="#services">Tech Help</a>
              <a href="#services">General Help</a>
            </div>

            <div className={styles.linkGroup}>
              <h3>Quick Links</h3>
              <a href="#about">About Adrian</a>
              <a href="#work">Work</a>
              <a href="#contact">Contact</a>
            </div>

            <div className={styles.linkGroup}>
              <h3>Contact</h3>
              <a href="tel:337-249-3707">337-249-3707</a>
              <a href="sms:337-249-3707">Send a Text</a>
              <a href="https://www.facebook.com/adrian.mallett1" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
              <a href="https://www.linkedin.com/in/john-adrian-mallett-78316649/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} Safe Help Services. All rights reserved.
          </p>
          <p className={styles.attribution}>
            Website by <a href="https://amstudios.com" target="_blank" rel="noopener noreferrer">A&M Studios</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
