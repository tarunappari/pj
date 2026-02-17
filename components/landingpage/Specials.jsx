import React from "react";
import styles from "@/styles/landingpage/Specials.module.scss";
import { IconAward, IconFlame, IconLeaf } from "@tabler/icons-react";

const Specials = () => {
  return (
    <div className={styles.container}>
      <div className={styles.waveSection}>
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className={styles.wave}
        >
          <path
            d="M0,80 C150,120 350,40 600,70 C850,100 1050,140 1440,80 L1440,0 L0,0 Z"
            fill="#114b3a"
          />
        </svg>
      </div>

      <div className={styles.content}>
        <div className={styles.awardsSection}>
          <div className={styles.awardsHeader}>
            <h2>Our Pride</h2>
            <p>Celebrating flavor, tradition, and the love of our guests</p>
          </div>

          <div className={styles.awardsGrid}>
            <div className={styles.card}>
              <div>
                <IconAward />
              </div>
              <h3>Guest Favourite Spot</h3>
              <p>
                Loved by families and food enthusiasts for unforgettable dining
                experiences filled with warmth and authentic taste.
              </p>
              <span>
                 VOTED BY OUR GUESTS
              </span>
            </div>

            <div className={`${styles.card} ${styles.highlightCard1}`}>
              <div>
                <IconLeaf />
              </div>
              <h3>Authentic Konaseema Flavours</h3>
              <p>
                Traditional coastal Andhra recipes prepared with bold spices and
                time-honoured cooking techniques.
              </p>
              <span>
                 ROOTED IN TRADITION
              </span>
            </div>

            <div className={`${styles.card} ${styles.highlightCard}`}>
              <div>
                <IconFlame />
              </div>
              <h3>Fresh & Local Ingredients</h3>
              <p>
                We prioritize fresh produce and quality ingredients to ensure
                every dish delivers comfort and richness in every bite.
              </p>
              <span>
                 QUALITY YOU CAN TASTE
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specials;
