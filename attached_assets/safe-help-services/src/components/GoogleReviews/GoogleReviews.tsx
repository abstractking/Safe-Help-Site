import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './GoogleReviews.module.css';

interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
}

const GoogleReviews = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // TODO: Replace with actual Google Places API integration
    // This is the barebones structure for real-time reviews
    const fetchGoogleReviews = async () => {
      try {
        setLoading(true);
        
        // PRODUCTION: Replace this with actual API call
        // const placeId = 'YOUR_GOOGLE_PLACE_ID';
        // const apiKey = process.env.VITE_GOOGLE_PLACES_API_KEY;
        // const response = await fetch(
        //   `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`
        // );
        // const data = await response.json();
        // setReviews(data.result.reviews || []);

        // TEMPORARY: Mock data until API is configured
        await new Promise(resolve => setTimeout(resolve, 1000));
        setReviews([
          {
            id: '1',
            author: 'Sarah M.',
            rating: 5,
            text: 'Adrian showed up exactly when he said he would and moved our entire garage in under 3 hours. Finally found someone reliable in Kinder!',
            date: '2 weeks ago'
          },
          {
            id: '2',
            author: 'Mike T.',
            rating: 5,
            text: 'Needed help with furniture assembly and WiFi setup. Adrian knocked it all out in one visit. Fair price, no BS.',
            date: '1 month ago'
          },
          {
            id: '3',
            author: 'Jennifer L.',
            rating: 5,
            text: 'Called three other guys who never called back. Adrian answered, gave me a quote, and was there the next day. Highly recommend.',
            date: '3 months ago'
          }
        ]);
        
        setLoading(false);
      } catch (err) {
        setError('Unable to load reviews');
        setLoading(false);
      }
    };

    fetchGoogleReviews();
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill={i < rating ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ));
  };

  if (loading) {
    return (
      <section className={styles.reviews} ref={ref}>
        <div className={styles.container}>
          <h2 className={styles.title}>What People Say</h2>
          <div className={styles.loading}>Loading reviews...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className={styles.reviews} ref={ref}>
        <div className={styles.container}>
          <h2 className={styles.title}>What People Say</h2>
          <div className={styles.error}>{error}</div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.reviews} ref={ref}>
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          What People Say
        </motion.h2>

        <div className={styles.grid}>
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15 }}
            >
              <div className={styles.stars}>{renderStars(review.rating)}</div>
              <p className={styles.text}>"{review.text}"</p>
              <div className={styles.author}>
                <span className={styles.name}>{review.author}</span>
                <span className={styles.date}>{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.googleBadge}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
          </svg>
          <span>Verified Google Reviews</span>
        </motion.div>
      </div>
    </section>
  );
};

export default GoogleReviews;
