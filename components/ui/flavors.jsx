import React, { useState, useEffect, useRef } from "react";
import styles from "@/styles/landingpage/SPecialFlavors.module.scss";
import spl1 from "@/public/assets/spl/spl1.jpg";
import spl2 from "@/public/assets/spl/spl2.png";
import spl3 from "@/public/assets/spl/spl3.jpg";
import spl4 from "@/public/assets/spl/spl4.jpg";

const pages = [
  {
    leftBgImage: spl1,
    rightBgImage: null,
    leftContent: null,
    rightContent: {
      heading: "🌿 Konaseema Style Curries",
      description:
        "Slow-cooked with traditional Andhra spices and fresh coastal ingredients, our Konaseema curries bring bold flavours and homely warmth to every plate. From tangy gravies to rich, aromatic blends, each dish reflects the soul of the Godavari region.",
    },
  },
  {
    leftBgImage: null,
    rightBgImage: spl2,
    leftContent: {
      heading: "🍲 Authentic & Pot Biryanis",
      description:
        "Sealed and slow-cooked to perfection, our dum and pot biryanis are layered with fragrant basmati rice, premium cuts, and handcrafted spice blends. Every serving delivers deep aroma, tender texture, and unforgettable taste.",
    },
    rightContent: null,
  },
  {
    leftBgImage: spl3,
    rightBgImage: null,
    leftContent: null,
    rightContent: {
      heading: "🔥 Tandoori & Starters",
      description:
        "Marinated with signature spices and grilled to smoky perfection, our starters are crafted fresh for every order. Crispy, juicy, and bursting with flavour — the perfect beginning to a memorable meal.",
    },
  },
  {
    leftBgImage: null,
    rightBgImage: spl4,
    leftContent: {
      heading: "🌊 Coastal Inspired Flavours",
      description:
        "Inspired by the rivers and coastlines of Konaseema, our seafood and specialty dishes celebrate freshness and authenticity. Each bite captures the essence of Andhra’s rich culinary heritage.",
    },
    rightContent: null,
  },
];

export default function Flavors() {
  const [currentPage, setCurrentPage] = useState(1);
  const numOfPages = pages.length;
  const animTime = 1000;
  const scrolling = useRef(false);

  const navigateUp = () => {
    if (currentPage > 1) setCurrentPage((p) => p - 1);
  };

  const navigateDown = () => {
    if (currentPage < numOfPages) setCurrentPage((p) => p + 1);
  };

  const handleWheel = (e) => {
    const goingDown = e.deltaY > 0;
    const canGoDown = currentPage < numOfPages;
    const canGoUp = currentPage > 1;

    if ((goingDown && canGoDown) || (!goingDown && canGoUp)) {
      e.preventDefault();

      if (scrolling.current) return;

      scrolling.current = true;
      if (goingDown) {
        navigateDown();
      } else {
        navigateUp();
      }
      setTimeout(() => (scrolling.current = false), animTime);
      return;
    }
  };

  const handleKeyDown = (e) => {
    if (scrolling.current) return;
    if (e.key === "ArrowUp") {
      if (currentPage > 1) {
        e.preventDefault();
        scrolling.current = true;
        navigateUp();
        setTimeout(() => (scrolling.current = false), animTime);
      }
    } else if (e.key === "ArrowDown") {
      if (currentPage < numOfPages) {
        e.preventDefault();
        scrolling.current = true;
        navigateDown();
        setTimeout(() => (scrolling.current = false), animTime);
      }
    }
  };

  return (
    <div
      className="relative overflow-hidden h-screen bg-[#012c1b]"
      onWheel={handleWheel}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {pages.map((page, i) => {
        const idx = i + 1;
        const isActive = currentPage === idx;
        const upOff = "translateY(-100%)";
        const downOff = "translateY(100%)";
        const leftTrans = isActive ? "translateY(0)" : downOff;
        const rightTrans = isActive ? "translateY(0)" : upOff;

        return (
          <div
            key={idx}
            className={`absolute inset-0 ${styles.flavorsContainer}`}
          >
            {/* Left Half */}
            <div
              className="absolute top-0 left-0 w-1/2 h-full transition-transform duration-[1000ms]"
              style={{ transform: leftTrans }}
            >
              <div
                className={`w-full h-full ${
                  page.leftContent
                    ? "bg-white"
                    : "bg-cover bg-center bg-no-repeat"
                }`}
                style={{
                  backgroundImage:
                    !page.leftContent && page.leftBgImage
                      ? `url(${page.leftBgImage.src})`
                      : undefined,
                }}
              >
                {page.leftContent && (
                  <div className="flex flex-col items-center justify-center h-full text-black p-8 text-center">
                    <h2 className="text-3xl uppercase mb-4">
                      {page.leftContent.heading}
                    </h2>
                    <p className="text-lg">{page.leftContent.description}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Right Half */}
            <div
              className="absolute top-0 left-1/2 w-1/2 h-full transition-transform duration-[1000ms]"
              style={{ transform: rightTrans }}
            >
              <div
                className={`w-full h-full ${
                  page.rightContent
                    ? "bg-white"
                    : "bg-cover bg-center bg-no-repeat"
                }`}
                style={{
                  backgroundImage:
                    !page.rightContent && page.rightBgImage
                      ? `url(${page.rightBgImage.src})`
                      : undefined,
                }}
              >
                {page.rightContent && (
                  <div className="flex flex-col items-center justify-center h-full text-black p-8 text-center">
                    <h2 className="text-3xl uppercase mb-4">
                      {page.rightContent.heading}
                    </h2>

                    {typeof page.rightContent.description === "string" ? (
                      <p className="text-lg">{page.rightContent.description}</p>
                    ) : (
                      <div className="text-lg">
                        {page.rightContent.description}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
