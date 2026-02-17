import React from "react";
import styles from "@/styles/landingpage/Why.module.scss";
import Image from "next/image";
import img1 from "@/public/assets/spl/spl2.png";
import img2 from "@/public/assets/images/pj2.png";
import img3 from "@/public/assets/images/pj6.png";
import tag from "@/public/assets/images/tag1.png";

const Why = () => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.main}>
          <h2>WE BELIEVE IN</h2>
          <h1>
            ANDHRA<span>flavors</span>
          </h1>
          <h1>
            <span>Premium</span>Ambience
          </h1>
          <h1>FAMILY FRIENDLY</h1>
          <h1>
            FRESH <span>ingridients</span>
          </h1>

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
      </div>
    </div>
  );
};

export default Why;
