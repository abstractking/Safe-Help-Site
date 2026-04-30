import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Thanks! I\'ll call you back soon. Or call me now at 337-249-3707');
  };

  return (
    <section className={styles.contact} id="contact" ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.info}
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
        >
          <h2 className={styles.title}>Get in Touch</h2>
          <p className={styles.subtitle}>
            Need a quote? Have questions? Fill out the form or just call me directly.
          </p>

          <div className={styles.contactMethods}>
            <div className={styles.method}>
              <div className={styles.methodIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div>
                <div className={styles.methodLabel}>Phone</div>
                <a href="tel:337-249-3707" className={styles.methodValue}>337-249-3707</a>
              </div>
            </div>

            <div className={styles.method}>
              <div className={styles.methodIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <div className={styles.methodLabel}>Service Area</div>
                <div className={styles.methodValue}>Kinder & Nearby Areas</div>
              </div>
            </div>

            <div className={styles.method}>
              <div className={styles.methodIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <div>
                <div className={styles.methodLabel}>Hours</div>
                <div className={styles.methodValue}>7 Days a Week</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form
          className={styles.form}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
        >
          <div className={styles.field}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="service">Service Needed</label>
            <select
              id="service"
              value={formData.service}
              onChange={(e) => setFormData({...formData, service: e.target.value})}
              required
            >
              <option value="">Select a service</option>
              <option value="haul">Hauling & Delivery</option>
              <option value="move">Moving & Labor</option>
              <option value="tech">Tech Help</option>
              <option value="help">General Help</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className={styles.field}>
            <label htmlFor="message">Details</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              rows={4}
              placeholder="Tell me what you need help with..."
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
          
          <p className={styles.formNote}>
            Or call me directly at <a href="tel:337-249-3707">337-249-3707</a>
          </p>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
