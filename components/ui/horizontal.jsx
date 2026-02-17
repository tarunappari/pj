"use client";

import * as React from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";
import styles from "@/styles/landingpage/Menu.module.scss";

const HorizontalScrollCarousel = ({ images }) => {
  const targetRef = React.useRef();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["25%", "-88.5%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] w-full">
      <div className="sticky -top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {images.map((data, i) => (
            <Card data={data} key={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ data }) => {
  return (
    <div className={styles.card}>
      <div className={`${styles.imgContainer} ${styles.imgContainer1}`}>
        <Image
          src={data.src1}
          fill
          style={{ objectFit: "cover" }}
          alt="carousel image"
        />
      </div>
      <div className={`${styles.imgContainer} ${styles.imgContainer2}`}>
        <Image
          src={data.src2}
          fill
          style={{ objectFit: "cover" }}
          alt="carousel image"
        />
      </div>
      <div className={`${styles.imgContainer} ${styles.imgContainer3}`}>
        <Image
          src={data.src3}
          fill
          style={{ objectFit: "cover" }}
          alt="carousel image"
        />
      </div>

      <h2>{data.title}</h2>
    </div>
  );
};

export { HorizontalScrollCarousel };
