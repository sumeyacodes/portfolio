"use client";

import { projects, containerVariants } from "@/utils";
import { motion } from "framer-motion";
import projectStyle from "./projects.module.css";
import Link from "next/link";

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
      <label className={projectStyle.projectsHeader}>
        <span>02.</span>
        <h1 className={projectStyle.projectsHeader}>My Projects</h1>
      </label>
      <motion.div className={projectStyle.projectsGrid}>
        {projects.map((project, index) => (
          <article key={index} className={projectStyle.projectCard}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <Link href={project.url} className={projectStyle.projectLink}>
              View Project
            </Link>
          </article>
        ))}
      </motion.div>
    </motion.section>
  );
}
