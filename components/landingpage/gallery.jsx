'use client'
import InteractiveImageBentoGallery from "../ui/gallerygrid";
import styles from "@/styles/landingpage/gallery.module.scss";

import pj1 from "@/public/assets/images/pj1.png";
import pj2 from "@/public/assets/images/pj2.png";
import pj3 from "@/public/assets/images/pj3.png";
import pj4 from "@/public/assets/images/pj4.png";
import pj5 from "@/public/assets/images/pj5.png";
import pj6 from "@/public/assets/images/pj6.png";
import pj7 from "@/public/assets/images/pj7.png";
import pj8 from "@/public/assets/images/pj8.png";
import pj9 from "@/public/assets/images/pj9.png";
import pj10 from "@/public/assets/images/pj10.png";
import pj11 from "@/public/assets/images/pj11.png";
import pj12 from "@/public/assets/images/pj12.png";
import pj13 from "@/public/assets/images/pj13.png";
import pj14 from "@/public/assets/images/pj14.png";
import pj15 from "@/public/assets/images/pj15.png";
import pj16 from "@/public/assets/images/pj16.png";
import BlurReveal from "../animations/BlurAnimation";

const imageItems = [
  {
    id: 1,
    title: "Mountain Vista",
    desc: "Serenity above the clouds.",
    url: pj1,
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    title: "Coastal Arch",
    desc: "Where the land meets the sea.",
    url: pj14,
    span: "md:row-span-1",
  },
  {
    id: 3,
    title: "Forest Canopy",
    desc: "Sunlight filtering through leaves.",
    url: pj13,
    span: "md:row-span-1",
  },
  {
    id: 4,
    title: "Desert Dunes",
    desc: "Golden sands under the sun.",
    url: pj16,
    span: "md:row-span-2",
  },
  {
    id: 5,
    title: "City at Night",
    desc: "A vibrant urban landscape.",
    url: pj5,
    span: "md:row-span-1",
  },
  {
    id: 6,
    title: "Misty Lake",
    desc: "Morning fog over calm waters.",
    url: pj15,
    span: "md:col-span-2 md:row-span-1",
  },
  {
    id: 7,
    title: "Forest Canopy",
    desc: "Sunlight filtering through leaves.",
    url: pj6,
    span: "md:row-span-1",
  },
  {
    id: 8,
    title: "Desert Dunes",
    desc: "Golden sands under the sun.",
    url: pj8,
    span: "md:row-span-2",
  },
  {
    id: 9,
    title: "City at Night",
    desc: "A vibrant urban landscape.",
    url: pj9,
    span: "md:row-span-1",
  },
  {
    id: 10,
    title: "Misty Lake",
    desc: "Morning fog over calm waters.",
    url: pj10,
    span: "md:col-span-2 md:row-span-1",
  },
  {
    id: 11,
    title: "Extra Image 1",
    desc: "Additional visual content.",
    url: pj11,
    span: "md:row-span-1",
  },
  {
    id: 12,
    title: "Extra Image 2",
    desc: "Additional visual content.",
    url: pj12,
    span: "md:row-span-1",
  },
  {
    id: 13,
    title: "Extra Image 2",
    desc: "Additional visual content.",
    url: pj2,
    span: "md:row-span-1",
  },
  {
    id: 14,
    title: "Extra Image 2",
    desc: "Additional visual content.",
    url: pj3,
    span: "md:row-span-1",
  },
  {
    id: 15,
    title: "Extra Image 2",
    desc: "Additional visual content.",
    url: pj4,
    span: "md:row-span-1",
  },
  {
    id: 16,
    title: "Extra Image 2",
    desc: "Additional visual content.",
    url: pj7,
    span: "md:row-span-1",
  },
];

export default function Gallery() {
  return (
    <div className={` ${styles.container} w-full antialiased`}>
      <InteractiveImageBentoGallery
        imageItems={imageItems}
        title="Moments at"
        description="A glimpse into the flavours, celebrations, and warm hospitality that define PJ Resto Café."
      />

      <div className={styles.partySection}>
        <BlurReveal>
          <h1>
            Celebrate With <span className="yellow">Us</span>
          </h1>
        </BlurReveal>
        <BlurReveal delay={200}>
          <p>
            Our spacious party hall accommodates <span>25 to 350 guests</span>,
            making it ideal for birthdays, corporate gatherings, family
            functions, and special occasions.
          </p>
        </BlurReveal>
      </div>
    </div>
  );
}
