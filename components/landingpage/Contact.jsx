"use client";
import React from "react";
import styles from "@/styles/landingpage/Contact.module.scss";
import {
  IconMapPin,
  IconPhone,
  IconClock,
  IconBrandWhatsapp,
  IconSparkles,
  IconMail,
} from "@tabler/icons-react";
import BlurReveal from "../animations/BlurAnimation";
import { motion } from "framer-motion";

const Contact = () => {
  const contactInfo = [
    {
      icon: <IconMapPin size={24} stroke={1.5} />,
      title: "Location",
      details: [
        "Junction, beside Pragati nursing home,",
        "Ravulapadu, Lakshmi Polavaram, Andhra Pradesh 533238",
      ],
    },
    {
      icon: <IconPhone size={24} stroke={1.5} />,
      title: "Phone",
      details: ["+91 98889 16667"],
      link: "tel:+919888916667",
    },
    {
      icon: <IconMail size={24} stroke={1.5} />,
      title: "Phone",
      details: ["email@gmail.com"],
      link: "mail:email@gmail.com",
    },
    {
      icon: <IconClock size={24} stroke={1.5} />,
      title: "timings",
      details: ["SUN - SAT : 11AM - 11PM"],
      link: "",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <section className={styles.container} id="contact">
      <div className={styles.content}>
        {/* Header */}
        <div className={styles.header}>
          <BlurReveal>
            <h2>
              Visit Us <span className="yellow">Today</span>
            </h2>
          </BlurReveal>
          <BlurReveal delay={200}>
            <p>We'd love to hear from you. Reach out to us anytime!</p>
          </BlurReveal>
        </div>

        {/* Main Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
          className={styles.mainGrid}
        >
          {/* Left Side - Contact Info */}
          <div className={styles.infoSection}>
            <div className={styles.brandCard}>
              <motion.div variants={itemVariants}    className={styles.brandHeader}>
                <h3>PJ Resto Cafe</h3>
              </motion.div>

              <div className={styles.contactCards}>
                {contactInfo.map((info, index) => (
                  <motion.div variants={itemVariants} key={index} className={styles.infoCard}>
                    <div className={styles.iconBox}>{info.icon}</div>
                    <div className={styles.infoText}>
                      {info.details.map((detail, idx) => (
                        <p key={idx}>{detail}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Action Buttons */}
              <motion.div variants={itemVariants} className={styles.actionButtons}>
                <a href="tel:+919888916667" className={styles.callButton}>
                  <IconPhone size={20} stroke={2} />
                  Call Now
                </a>
                <a
                  href="https://wa.me/919888916667"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.whatsappButton}
                >
                  <IconBrandWhatsapp size={20} stroke={2} />
                  WhatsApp
                </a>
              </motion.div>
            </div>
          </div>

          <motion.div variants={itemVariants} className={styles.mapSection}>
            <div className={styles.mapContainer}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.4125451677546!2d81.83704037491975!3d16.756138484027385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37c1002358faa1%3A0x4cdca3a0fe6032b7!2sJuluru&#39;s%20PJ%20Resto%20Cafe!5e0!3m2!1sen!2sin!4v1771357416026!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PJ Resto Cafe Location"
              ></iframe>
              <div className={styles.mapOverlay}>
                <a
                  href="https://maps.app.goo.gl/pQHVbpiVa6hz7rWd6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.directionsButton}
                >
                  <IconMapPin size={18} stroke={2} />
                  Get Directions
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
