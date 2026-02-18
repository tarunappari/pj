"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/common/navbar.module.scss";
import BlurReveal from "../animations/BlurAnimation";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarInner}>
        <BlurReveal rootMargin="0px">
          <Link href="/" className={styles.logo}>
            <Image
              src="/assets/logo/logo.png"
              alt="Logo"
              width={120}
              height={40}
              priority
              className={styles.logoImage}
            />
          </Link>
        </BlurReveal>

        <ul className={styles.navLinks}>
          {navLinks.map(({ href, label }, i) => (
            <BlurReveal key={href} rootMargin="0px" delay={(i *= 300)}>
              <li>
                <Link href={href} className={styles.navLink}>
                  {label}
                </Link>
              </li>
            </BlurReveal>
          ))}
        </ul>
      </div>
    </nav>
  );
}
