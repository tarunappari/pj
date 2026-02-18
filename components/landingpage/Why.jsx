'use client'
import {motion} from 'framer-motion'
import React from "react";
import styles from "@/styles/landingpage/Why.module.scss";
import Image from "next/image";
import img1 from "@/public/assets/spl/spl2.png";
import img2 from "@/public/assets/images/pj2.png";
import img3 from "@/public/assets/images/pj6.png";
import tag from "@/public/assets/images/tag1.png";

const Why = () => {
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

  return (
    <div className={styles.container}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.7 }}
      >
        <div className={styles.main}>
          <motion.h2 variants={itemVariants}>WE BELIEVE IN</motion.h2>
          <motion.h1 variants={itemVariants}>
            ANDHRA<span>flavors</span>
          </motion.h1>
          <motion.h1 variants={itemVariants}>
            <span>Premium</span>Ambience
          </motion.h1>
          <motion.h1 variants={itemVariants}>FAMILY FRIENDLY</motion.h1>
          <motion.h1 variants={itemVariants}>
            FRESH <span>ingridients</span>
          </motion.h1>

          <div className={`${styles.imgContainer} ${styles.imgContainer1}`}>
            <Image src={img1} alt="img" />
          </div>
          <div className={`${styles.imgContainer} ${styles.imgContainer2}`}>
            <Image src={img3} alt="img" />
          </div>
          <div className={`${styles.imgContainer} ${styles.imgContainer4}`}>
            <Image src={tag} alt="tag" />
          </div>
          <div className={`${styles.imgContainer} ${styles.imgContainer3}`}>
            <Image src={img2} alt="img" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Why;
