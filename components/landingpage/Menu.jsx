'use client'
import React from "react";
import { HorizontalScrollCarousel } from "../ui/horizontal";

import chap1 from "@/public/assets/spls/chap1.jpg";
import chap2 from "@/public/assets/spls/chap2.jpg";
import chap3 from "@/public/assets/spls/chap3.jpg";
import dum1 from "@/public/assets/spls/dum1.jpg";
import dum2 from "@/public/assets/spls/dum2.jpg";
import dum3 from "@/public/assets/spls/dum3.jpg";
import chelo1 from "@/public/assets/spls/chelo1.jpg";
import chelo2 from "@/public/assets/spls/chelo2.jpg";
import chelo3 from "@/public/assets/spls/chelo3.jpg";

import styles from "@/styles/landingpage/Menu.module.scss";
import FlowingMenu from "../ui/reactbits/flowmenu";

const images = [
  {
    src1: dum1,
    src2: dum2,
    src3: dum3,
    title: "DUM KA KHAANA",
    desci: "Aromatic coastal Andhra style biryan",
  },
  {
    src1: chap1,
    src2: chap2,
    src3: chap3,
    title: "CHANGO CHAP CHAP",
    desci: "Authentic village-style ",
  },
  {
    src1: chelo1,
    src2: chelo2,
    src3: chelo3,
    title: "CHELO KABAB",
    desci: "Freshly sourced seafood cooked.",
  },
];

const demoItems = [
  {
    link: "#",
    text: "Konaseema Style Curries",
    image: "https://picsum.photos/600/400?random=1",
  },
  {
    link: "#",
    text: "Authentic Pot Biryanis",
    image: "https://picsum.photos/600/400?random=2",
  },
  {
    link: "#",
    text: "Tandoori & Starters",
    image: "https://picsum.photos/600/400?random=3",
  },
  {
    link: "#",
    text: "Coastal Inspired Flavours",
    image: "https://picsum.photos/600/400?random=4",
  },
];

const Menu = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1>Our Signature Items</h1>

        <HorizontalScrollCarousel images={images} />

        <h1>Flavours of Konaseema</h1>

        <div style={{ height: "600px", position: "relative" }}>
          <FlowingMenu
            items={demoItems}
            speed={15}
            textColor="#ffffff"
            bgColor="#012c1b"
            marqueeBgColor="#ffffff"
            marqueeTextColor="#012c1b"
            borderColor="#ffffff"
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
