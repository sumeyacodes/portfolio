import { getBlogPosts } from "@/api/models";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import styles from "./blog.module.css";

export default async function BlogsList() {
  const blogPosts = await getBlogPosts();

  return (
    <section className={styles.blogSection}>
      <h1 className={styles.title}>Latest Blog Posts</h1>
      {blogPosts.map((blog) => (
        <article key={blog.id} className={styles.blogArticle}>
          <Image
            src={blog.image || "/images/default-blog-image.jpg"}
            alt={blog.title}
            className={styles.blogImage}
            width={300}
            height={300}
          />
          <h2 className={styles.blogTitle}>{blog.title}</h2>
          <p className={styles.blogContent}>{blog.post}</p>
          <Link href={`/blogs/${blog.id}`} className={styles.blogsLink}>
            <ExternalLink />
          </Link>
        </article>
      ))}
    </section>
  );
}
