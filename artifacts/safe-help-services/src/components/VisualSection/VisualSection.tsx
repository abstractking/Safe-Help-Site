import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './VisualSection.module.css';

const VisualSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const images = [
    { id: 1, title: 'Hauling & Transport', category: 'HAUL' },
    { id: 2, title: 'Furniture Moving', category: 'MOVE' },
    { id: 3, title: 'Tech Setup', category: 'TECH' },
    { id: 4, title: 'Assembly Work', category: 'HELP' },
  ];

  return (
    <section className={styles.visual} id="work" ref={ref}>
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          Work I've Done
        </motion.h2>

        <div className={styles.grid}>
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              className={styles.card}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className={styles.imagePlaceholder}>
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <path d="M21 15l-5-5L5 21"/>
                </svg>
                <p className={styles.placeholderText}>{image.title}</p>
              </div>
              <div className={styles.overlay}>
                <span className={styles.category}>{image.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisualSection;
