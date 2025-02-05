"use client";

import { animationConfig, containerVariants } from "@/utils";
import { motion } from "framer-motion";
import aboutStyle from "./about.module.css";
import Link from "next/link";

export function About() {
  return (
    <motion.section
      id="about"
      className={aboutStyle.aboutSection}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.label {...animationConfig} className={aboutStyle.aboutHeader}>
        <span>01.</span>
        <h1>About Me</h1>
      </motion.label>

      <motion.article {...animationConfig} className={aboutStyle.aboutContent}>
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Turpis aenean mi
          ridiculus quisque ultricies vulputate! Sapien posuere interdum vel,
          velit himenaeos class venenatis. Quis platea habitant gravida nam
          torquent finibus. Ultricies tellus ultricies ullamcorper parturient
          ornare ornare convallis penatibus. Libero libero sapien elementum
          sagittis; hac euismod maximus! Ad sed varius luctus vulputate taciti
          ultricies. Sagittis nascetur aenean porttitor ultrices nulla lacinia
          condimentum.
        </p>
        <br />
        <p>
          Bibendum semper tellus nunc consectetur torquent porta dui montes.
          Vehicula dapibus diam facilisis viverra nascetur. Mattis blandit
          nascetur montes a in vulputate. Sem elit euismod quisque pulvinar sed,
          magna duis. Orci vulputate sit feugiat potenti sapien tortor taciti.
          Natoque torquent integer tortor nulla semper. Ac integer tellus litora
          nam tortor dictum leo maximus. Sapien montes dapibus netus interdum
          varius laoreet. Dapibus nibh hac taciti magna integer maximus sodales.
          Dapibus mi consectetur dapibus augue nulla cubilia sapien sodales.
          Tempus tellus quam ex magna dapibus. Aptent sodales dignissim gravida
          torquent; vulputate fermentum.
        </p>
        <br />
      </motion.article>
    </motion.section>
  );
}
