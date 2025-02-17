"use client";

import { animationVariants } from "@/utils";
import { motion } from "framer-motion";
import { HoverEffect } from "../ui/project-card-hover";
import { projects } from "./projects-info";
import styles from "./projects.module.css";

export function Projects() {
  return (
    <motion.section
      id="projects"
      initial="hidden"
      whileInView="visible"
      variants={animationVariants}
      className={styles.projects}
    >
      <label>
        <span>02.</span>
        <h1>My Projects</h1>
      </label>

      <HoverEffect items={projects} />
    </motion.section>
  );
}
