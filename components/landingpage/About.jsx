import React from "react";
import styles from "@/styles/landingpage/About.module.scss";

import pj1 from "@/public/assets/images/pj5.png";
import pj2 from "@/public/assets/images/pj9.png";
import pj3 from "@/public/assets/images/pj8.png";
import tag from "@/public/assets/images/tag.png";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.mainContainer}>
      {/* <div className={styles.waveSection}>
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className={styles.wave}
        >
          <path
            d="M0,80 C150,120 350,40 600,70 C850,100 1050,140 1440,80 L1440,0 L0,0 Z"
            fill="#fff"
          />
        </svg>
      </div> */}
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.topContent}>
            <h2>
              Taste of <span>Konaseema</span>
            </h2>
            <div>
              <p>
                Nestled in the heart of Konaseema, PJ Resto Café brings together
                tradition, flavour, and hospitality. Inspired by the rich
                culinary heritage of coastal Andhra, we serve dishes prepared
                with fresh ingredients, bold spices, and time-honoured recipes.
              </p>
              <p>
                From aromatic biryanis to Konaseema-style curries, every plate
                is crafted to create comfort, celebration, and connection.
                Whether you're dining with family or hosting a special
                gathering, PJ Resto Café is where great food becomes great
                memories.
              </p>
            </div>
          </div>

          <h1>
            <span></span>Godavari Hospitality
          </h1>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.tag}>
            <Image src={tag} alt="tag" />
          </div>
          <div className={styles.imageGrid}>
            <div className={`${styles.singleImg} ${styles.imageCard}`}>
              <Image src={pj1} alt="pj" fill className={styles.heroImage} />
            </div>

            <div className={styles.doubleImg}>
              <div className={styles.imageCard}>
                <Image src={pj2} alt="pj" fill />
              </div>

              <div className={styles.imageCard}>
                <Image src={pj3} alt="pj" fill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
