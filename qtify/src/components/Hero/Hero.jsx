import React from "react";
import styles from "./Hero.module.css";
import headphones from "../../assets/headphones.png"; // Use your correct image path

function Hero() {
  return (
    <div className={styles.hero}>
  <div className={styles.inner}>
    <div className={styles.content}>
      <h1>100 Thousand Songs, ad-free</h1>
      <h1>Over thousands podcast episodes</h1>
    </div>

    <div className={styles.imageContainer}>
      <img src={headphones} alt="hero" />
    </div>
  </div>
</div>
  );
}

export default Hero;