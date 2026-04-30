import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = () => {
  const services = [
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="1" y="3" width="15" height="13"/>
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
          <circle cx="5.5" cy="18.5" r="2.5"/>
          <circle cx="18.5" cy="18.5" r="2.5"/>
        </svg>
      ),
      label: 'HAUL',
      desc: 'Truck • Trailer • Delivery'
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
          <line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      ),
      label: 'MOVE',
      desc: 'Loading • Furniture • Yard'
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="3" width="20" height="14" rx="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      ),
      label: 'TECH',
      desc: 'WiFi • Computer • Streaming'
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
        </svg>
      ),
      label: 'HELP',
      desc: 'Assembly • Mounting • Tasks'
    }
  ];

  return (
    <section className={styles.hero} id="home">
      {/* Background grid pattern */}
      <div className={styles.gridPattern} />

      <div className={styles.container}>
        <div className={styles.content}>
          {/* Veteran Badge */}
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            VETERAN-OWNED & OPERATED
          </motion.div>

          {/* Headline */}
          <motion.h1
            className={styles.headline}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            TIRED OF<br />
            <span className={styles.headlineWhite}>UNRELIABLE</span><br />
            <span className={styles.headlineGold}>HELP?</span>
          </motion.h1>

          <motion.div
            className={styles.divider}
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          />

          <motion.p
            className={styles.subheadline}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Reliable Local Help You Can Count On
          </motion.p>

          {/* Adrian's Quote */}
          <motion.div
            className={styles.quote}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
          >
            <p className={styles.quoteName}>ADRIAN MALLETT</p>
            <p className={styles.quoteText}>
              "I've got you covered. I actually show up, on time."
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.a
            href="tel:337-249-3707"
            className={styles.ctaButton}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <div>
              <div className={styles.ctaLabel}>CALL OR TEXT NOW</div>
              <div className={styles.ctaPhone}>337-249-3707</div>
            </div>
          </motion.a>

          {/* Trust Indicators */}
          <motion.div
            className={styles.trustIndicators}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <div className={styles.indicator}>
              <div className={styles.dot} />
              <span>Local to Kinder</span>
            </div>
            <div className={styles.indicator}>
              <div className={styles.dot} />
              <span>Jobs from $50</span>
            </div>
            <div className={styles.indicator}>
              <div className={styles.dot} />
              <span>No Runaround</span>
            </div>
          </motion.div>
        </div>

        {/* Adrian Character - Placeholder for extracted flyer image */}
        <motion.div
          className={styles.characterContainer}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className={styles.character}>
            {/* This is where Adrian's extracted image will go */}
            <div className={styles.characterPlaceholder}>
              {/* USMC Hat */}
              <div className={styles.hat}>
                <span>USMC</span>
              </div>
              {/* Hoodie with logo */}
              <div className={styles.hoodie}>
                <div className={styles.hoodieText}>
                  SAFE HELP<br />SERVICES
                </div>
              </div>
              {/* Arms */}
              <div className={styles.armLeft} />
              <div className={styles.armRight} />
            </div>
            <div className={styles.glow} />
          </div>
          <div className={styles.readyBadge}>READY NOW</div>
        </motion.div>
      </div>

      {/* Service Icons Strip */}
      <div className={styles.servicesStrip}>
        <div className={styles.servicesContainer}>
          {services.map((service, index) => (
            <motion.div
              key={service.label}
              className={styles.serviceCard}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className={styles.serviceIcon}>{service.icon}</div>
              <div className={styles.serviceLabel}>{service.label}</div>
              <div className={styles.serviceDesc}>{service.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
