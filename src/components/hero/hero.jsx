"use client";

import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { animationConfig } from "@/utils/animation-config";
import heroStyles from "./hero.module.css";

export function Hero() {
  return (
    <motion.section {...animationConfig} className={heroStyles.heroContainer}>
      <section className={heroStyles.wrapper}>
        <h1 className={heroStyles.introTitle}>Hi, my name is</h1>
        <h2 className={heroStyles.titleName}>Sumeya Ahmed.</h2>
        <h3 className={heroStyles.careerTitle}>
          I'm a Junior Fullstack Developer.
        </h3>
        <p className={heroStyles.description}>I like to build cool things.</p>

        <Link
          to="projects"
          smooth="true"
          duration={500}
          spy="true"
          className={heroStyles.projectButton}
        >
          Check out my projects!
        </Link>
      </section>
    </motion.section>
  );
}
