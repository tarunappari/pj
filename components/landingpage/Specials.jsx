"use client";
import React from "react";
import styles from "@/styles/landingpage/Specials.module.scss";
import { IconAward, IconFlame, IconLeaf } from "@tabler/icons-react";
import BlurReveal from "../animations/BlurAnimation";
import { motion } from "framer-motion";

const Specials = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };
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
            <BlurReveal>
              <h2>Our Pride</h2>
            </BlurReveal>
            <BlurReveal delay={200}>
              <p>Celebrating flavor, tradition, and the love of our guests</p>
            </BlurReveal>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            className={styles.awardsGrid}
          >
            <div className={styles.card}>
              <motion.div variants={itemVariants}>
                <IconAward />
              </motion.div>
              <motion.h3 variants={itemVariants}>
                Guest Favourite Spot
              </motion.h3>
              <motion.p variants={itemVariants}>
                Loved by families and food enthusiasts for unforgettable dining
                experiences filled with warmth and authentic taste.
              </motion.p>
              <motion.span variants={itemVariants}>
                VOTED BY OUR GUESTS
              </motion.span>
            </div>

            <div className={`${styles.card} ${styles.highlightCard1}`}>
              <motion.div variants={itemVariants}>
                <IconLeaf />
              </motion.div>
              <motion.h3 variants={itemVariants}>
                Authentic Konaseema Flavours
              </motion.h3>
              <motion.p variants={itemVariants}>
                Traditional coastal Andhra recipes prepared with bold spices and
                time-honoured cooking techniques.
              </motion.p>
              <motion.span variants={itemVariants}>
                ROOTED IN TRADITION
              </motion.span>
            </div>

            <div className={`${styles.card} ${styles.highlightCard}`}>
              <motion.div variants={itemVariants}>
                <IconFlame />
              </motion.div>
              <motion.h3 variants={itemVariants}>
                Fresh & Local Ingredients
              </motion.h3>
              <motion.p variants={itemVariants}>
                We prioritize fresh produce and quality ingredients to ensure
                every dish delivers comfort and richness in every bite.
              </motion.p>
              <motion.span variants={itemVariants}>
                QUALITY YOU CAN TASTE
              </motion.span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Specials;
