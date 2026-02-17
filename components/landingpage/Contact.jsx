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

  return (
    <section className={styles.container} id="contact">
      <div className={styles.content}>
        {/* Header */}
        <div className={styles.header}>
          <h2>Visit Us Today</h2>
          <p>We'd love to hear from you. Reach out to us anytime!</p>
        </div>

        {/* Main Content Grid */}
        <div className={styles.mainGrid}>
          {/* Left Side - Contact Info */}
          <div className={styles.infoSection}>
            <div className={styles.brandCard}>
              <div className={styles.brandHeader}>
                <h3>PJ Resto Cafe</h3>
              </div>

              <div className={styles.contactCards}>
                {contactInfo.map((info, index) => (
                  <div key={index} className={styles.infoCard}>
                    <div className={styles.iconBox}>{info.icon}</div>
                    <div className={styles.infoText}>
                      {info.details.map((detail, idx) => (
                        <p key={idx}>{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className={styles.actionButtons}>
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
              </div>
            </div>
          </div>

          <div className={styles.mapSection}>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
