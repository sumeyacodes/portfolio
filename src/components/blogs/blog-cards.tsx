"use client";

import styles from "./blog-cards.module.css";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { BlogPost } from "@/db/models";

interface BlogCardProps {
  blog: BlogPost;
}

export function BlogCard({ blog }: BlogCardProps) {
  return (
    <article className={styles.card}>
      <Image
        src={blog.image || "/blog-image.png"}
        alt={blog.title}
        width={300}
        height={200}
        className={styles.image}
      />
      <section>
        <h1>{blog.title}</h1>
        <p>{blog.post}</p>
        <Link href={`/blogs/${blog.id}`} className={styles.link}>
          <ExternalLink />
        </Link>
      </section>
    </article>
  );
}
