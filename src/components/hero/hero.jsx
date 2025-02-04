"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import styles from "./hero.module.css";

const animationConfig = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export function Hero() {
  return (
    <motion.section {...animationConfig} className={styles.heroContainer}>
      <article className={styles.wrapper}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.introTitle}>Hi, my name is</h1>
          <h2 className={styles.titleName}>Sumeya Ahmed.</h2>
          <h3 className={styles.careerTitle}>
            I'm a Junior Fullstack Developer.
          </h3>
          <p className={styles.description}>I like to build cool things.</p>
        </div>
        <div>
          <Link href="#projects" className={styles.projectLink}>
            Check out my projects!
          </Link>
        </div>
      </article>
    </motion.section>
  );
}
