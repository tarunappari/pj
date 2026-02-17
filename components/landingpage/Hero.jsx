"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "@/styles/landingpage/HeroSection.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../common/navbar";
import { IconToolsKitchen2, IconMap2 } from "@tabler/icons-react";
import { log } from "three";

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

  return (
    <div className={styles.wrapper}>
      <Navbar />
      <div className={styles.heroText}>
        <div className={styles.heroGallery}>
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
        </div>
        <div style={{ marginTop: "-4rem" }} className={styles.heroCopy}>
          <h1>PJ</h1>
          <h2> Resto Cafe</h2>
          <h3 className={styles.heroSubtitle}>Good Food. Great Memories.</h3>
          <div className={styles.btnDiv}>
            <button className={styles.table}>
              Book a Table <IconToolsKitchen2 />{" "}
            </button>
            <button className={styles.directions}>
              Get Directions <IconMap2 />
            </button>
          </div>
        </div>
      </div>
     
    </div>
  );
}
