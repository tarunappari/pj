"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import styles from "@/styles/landingpage/HeroSection.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../common/navbar";
import { IconToolsKitchen2, IconMap2 } from "@tabler/icons-react";
import phone from "@/public/assets/images/pj1.png";
import hero from "@/public/assets/images/pj2.png";
import desk from "@/public/assets/images/pj6.png";

// Using the actual image file that exists
const heroBg1 = "/assets/images/pj1.png";
const heroBg2 = "/assets/images/pj2.png";
const heroBg3 = "/assets/images/pj12.png";
const heroBg4 = "/assets/images/pj7.png";
const heroBg5 = "/assets/images/pj6.png";

export default function Hero() {
  const svgRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const svg = svgRef.current;
    if (!svg) return;

    const leftLeaves = svg.querySelectorAll('[href="#leftLeave"]');
    const rightLeaves = svg.querySelectorAll('[href="#rightLeave"]');

    // LEFT LEAVES
    leftLeaves.forEach((leaf, i) => {
      const index = i / (leftLeaves.length - 1);

      gsap.set(leaf, {
        rotate: index * -45 + 10,
        transformOrigin: "right bottom",
      });

      gsap.to(leaf, {
        scrollTrigger: {
          trigger: document.body,
          scrub: 0.2,
          start: `${index * 30}% top`,
          end: `${index * 45 + 25}% bottom`,
        },
        x: 600,
        y: 300,
        rotate: 15 - Math.sin((index * Math.PI) / 2 - Math.PI / 2) * 10,
        scale: 1.3,
      });
    });

    // RIGHT LEAVES
    rightLeaves.forEach((leaf, i) => {
      const index = i / (rightLeaves.length - 1);

      gsap.set(leaf, {
        rotate: index * 45 - 10,
        transformOrigin: "left bottom",
      });

      gsap.to(leaf, {
        scrollTrigger: {
          trigger: document.body,
          scrub: 0.2,
          start: `${index * 30}% top`,
          end: `${index * 45 + 25}% bottom`,
        },
        x: -650,
        y: 300,
        rotate: -15 + Math.sin((index * Math.PI) / 2 - Math.PI / 2) * 10,
        scale: 1.3,
      });
    });

    // Reveal SVG after mount (prevents flash)
    requestAnimationFrame(() => {
      svg.style.opacity = 1;
    });

    // Fade out Hero content when scrolling past the section (prevents overlap with About)
    const wrapper = svg.parentElement;
    if (wrapper) {
      gsap.to(svg, {
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: wrapper,
          start: "85% top",
          end: "bottom top",
          scrub: 0.3,
        },
      });
    }

    // Change SVG z-index after 200vh
    ScrollTrigger.create({
      trigger: document.body,
      start: "200vh top",
      onEnter: () => {
        svg.classList.add("behind");
      },
      onLeaveBack: () => {
        svg.classList.remove("behind");
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const heroImages = [
    { src: heroBg1, alt: "PJ Resto Cafe ambience 1" },
    { src: heroBg2, alt: "PJ Resto Cafe ambience 2" },
    { src: heroBg3, alt: "PJ Resto Cafe ambience 3" },
    { src: heroBg4, alt: "PJ Resto Cafe ambience 4" },
    { src: heroBg5, alt: "PJ Resto Cafe ambience 5" },
  ];

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Animation variants for Framer Motion
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

  const floatingVariants = {
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className={styles.wrapper}>
      <Navbar />
      <div className={styles.heroText}>
        <div style={{ marginTop: "-4rem" }} className={styles.heroCopy}>
          <h1>PJ</h1>
          <h2> Resto Cafe</h2>
          <h3 className={`${styles.heroSubtitle} yellow`}>Good Food. Great Memories.</h3>
          <div className={styles.btnDiv}>
            <button className={styles.table}>
              Book a Table <IconToolsKitchen2 />{" "}
            </button>
            <button className={styles.directions}>
              Get Directions <IconMap2 />
            </button>
          </div>
        </div>

        {/* <div className={styles.heroGallery}>
          <div className={styles.heroImageGrid}>
            {heroImages.map((image, index) => (
              <div
                key={index}
                className={`${styles.heroImageCard} ${
                  styles[`heroImageCard${index + 1}`]
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 22vw, 60vw"
                  className={styles.heroImage}
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div> */}

        <motion.div
          className="relative h-[400px] w-full sm:h-[500px]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Decorative Shapes */}
          <motion.div
            className="absolute -top-4 left-1/4 h-16 w-16 rounded-full  bg-[#BBD189]/50"
            variants={floatingVariants}
            animate="animate"
          />
          <motion.div
            className="absolute bottom-0 right-1/4 h-12 w-12 rounded-lg bg-green-200/50 dark:bg-green-800/30"
            variants={floatingVariants}
            animate="animate"
            style={{ transitionDelay: "0.5s" }}
          />
          <motion.div
            className="absolute bottom-1/4 -left-0 h-6 w-6 rounded-full bg-green-200/50 dark:bg-green-800/30"
            variants={floatingVariants}
            animate="animate"
            style={{ transitionDelay: "1s" }}
          />

          {/* Images */}
          <motion.div
            className="absolute left-1/2 top-0 h-48 w-100 -translate-x-1/2 rounded-2xl bg-muted p-2 shadow-lg sm:h-64 sm:w-100"
            style={{ transformOrigin: "bottom center" }}
            variants={imageVariants}
          >
            <img
              src={hero.src}
              alt="Student learning"
              className="h-full w-full rounded-xl object-cover"
            />
          </motion.div>
          <motion.div
            className="herophoneImg absolute right-10 top-1/3 h-0 w-50 rounded-2xl bg-muted p-2 shadow-lg sm:h-56 sm:w-56"
            style={{ transformOrigin: "left center" }}
            variants={imageVariants}
          >
            <img
              src={phone.src}
              alt="Tutor assisting"
              className="h-full w-full rounded-xl object-cover"
            />
          </motion.div>
          <motion.div
            className="absolute -bottom-0 left-10 h-32 w-82 rounded-2xl bg-muted p-2 shadow-lg sm:h-58 sm:w-80"
            style={{ transformOrigin: "top right" }}
            variants={imageVariants}
          >
            <img
              src={desk.src}
              alt="Collaborative discussion"
              className="h-full w-full rounded-xl object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
