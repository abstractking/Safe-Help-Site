import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './About.module.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className={styles.about} id="about" ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.badge}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            USMC VETERAN
          </div>

          <h2 className={styles.title}>Why Choose Safe Help Services?</h2>
          
          <div className={styles.story}>
            <p>
              I'm Adrian Mallett, a proud USMC veteran serving the Kinder, Louisiana community. 
              After years of military service, I know what it means to show up on time, follow through 
              on commitments, and get the job done right the first time.
            </p>
            <p>
              Too many people have been burned by unreliable contractors who don't show up or quote 
              one price and charge another. I built Safe Help Services on the values I learned in 
              the Marines: <strong>integrity, dependability, and mission completion</strong>.
            </p>
            <p>
              Whether you need furniture moved, tech help, or general handyman work, you're not just 
              hiring a service — you're getting a neighbor who takes pride in doing right by you.
            </p>
          </div>

          <div className={styles.values}>
            <div className={styles.value}>
              <div className={styles.valueNumber}>01</div>
              <div>
                <h3 className={styles.valueTitle}>I Show Up</h3>
                <p className={styles.valueDesc}>
                  When I say I'll be there, I'm there. No ghosting, no excuses.
                </p>
              </div>
            </div>

            <div className={styles.value}>
              <div className={styles.valueNumber}>02</div>
              <div>
                <h3 className={styles.valueTitle}>Fair Pricing</h3>
                <p className={styles.valueDesc}>
                  You get a quote upfront. No surprise charges, no hidden fees.
                </p>
              </div>
            </div>

            <div className={styles.value}>
              <div className={styles.valueNumber}>03</div>
              <div>
                <h3 className={styles.valueTitle}>Mission-Focused</h3>
                <p className={styles.valueDesc}>
                  Your task is my mission. I don't leave until it's done right.
                </p>
              </div>
            </div>
          </div>

          <a href="tel:337-249-3707" className={styles.ctaButton}>
            Call Adrian: 337-249-3707
          </a>
        </motion.div>

        <motion.div
          className={styles.imageContainer}
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.imagePlaceholder}>
            {/* Placeholder for Adrian's action photo */}
            <div className={styles.placeholderContent}>
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <path d="M21 15l-5-5L5 21"/>
              </svg>
              <p>Adrian in Action Photo</p>
            </div>
          </div>
          <div className={styles.yearsCard}>
            <div className={styles.yearsNumber}>5+</div>
            <div className={styles.yearsText}>Years Serving<br />Kinder & Nearby</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
