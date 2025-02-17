"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { animationVariants } from "@/utils/animation-config";
import styles from "./hero.module.css";

export function Hero() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={animationVariants}
      viewport={{ once: true, amount: 0.2 }}
      className={styles.hero}
    >
      <h1>Hi, my name is</h1>
      <h2>Sumeya.</h2>
      <h3>I&apos;m a Junior Fullstack Developer.</h3>
      <p>I like to build things.</p>

      <Link href="#projects" className={styles.projectButton}>
        Check out my projects!
      </Link>
    </motion.section>
  );
}
