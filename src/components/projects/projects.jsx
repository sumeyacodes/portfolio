"use client";

import { projects, containerVariants } from "@/utils";
import { motion } from "framer-motion";
import projectStyle from "./projects.module.css";
import Link from "next/link";
import { HoverEffect } from "../ui/project-card-hover";

export function Projects() {
  return (
    <motion.section
      id="projects"
      className={projectStyle.projectSection}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.label className={projectStyle.projectsHeader}>
        <span>02.</span>
        <h1 className={projectStyle.projectsHeader}>My Projects</h1>
      </motion.label>

      <HoverEffect items={projects} />
    </motion.section>
  );
}
