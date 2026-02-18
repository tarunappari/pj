"use client";
import React from "react";
import styles from "@/styles/landingpage/About.module.scss";
import { motion } from "framer-motion";
import pj1 from "@/public/assets/images/pj5.png";
import pj2 from "@/public/assets/images/pj9.png";
import pj3 from "@/public/assets/images/pj8.png";
import tag from "@/public/assets/images/tag.png";
import Image from "next/image";
import BlurReveal from "../animations/BlurAnimation";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const slideFromRight = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,

      transition: {
        duration: 0.3,
        ease: "easeOut",
        delay: 1,
      },
    },
  };

  return (
    <motion.div className={styles.mainContainer}>
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
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
          className={styles.content}
        >
          <div className={styles.topContent}>
            <motion.h2 variants={itemVariants}>
              Taste of <span>Konaseema</span>
            </motion.h2>
            <div>
              <motion.p variants={itemVariants}>
                Nestled in the heart of Konaseema, PJ Resto Café brings together
                tradition, flavour, and hospitality. Inspired by the rich
                culinary heritage of coastal Andhra, we serve dishes prepared
                with fresh ingredients, bold spices, and time-honoured recipes.
              </motion.p>
              <motion.p variants={itemVariants}>
                From aromatic biryanis to Konaseema-style curries, every plate
                is crafted to create comfort, celebration, and connection.
                Whether you're dining with family or hosting a special
                gathering, PJ Resto Café is where great food becomes great
                memories.
              </motion.p>
            </div>
          </div>

          <motion.h1 variants={slideFromRight}>
            <span></span>
            <i className="yellow">Godavari</i> Hospitality
          </motion.h1>
        </motion.div>
        <BlurReveal delay={1000}>
          <div className={styles.imageContainer}>
            <div className={styles.tag}>
              <Image src={tag} alt="tag" />
            </div>
            <div className={styles.imageGrid}>
              <motion.div
                variants={itemVariants}
                className={`${styles.singleImg} ${styles.imageCard}`}
              >
                <Image src={pj1} alt="pj" fill className={styles.heroImage} />
              </motion.div>

              <div className={styles.doubleImg}>
                <motion.div
                  variants={itemVariants}
                  className={styles.imageCard}
                >
                  <Image src={pj2} alt="pj" fill />
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className={styles.imageCard}
                >
                  <Image src={pj3} alt="pj" fill />
                </motion.div>
              </div>
            </div>
          </div>
        </BlurReveal>
      </div>
    </motion.div>
  );
};

export default About;
