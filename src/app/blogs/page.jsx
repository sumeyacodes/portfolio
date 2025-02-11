import { getBlogPosts } from "@/api/models";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import styles from "./blog.module.css";

export default async function BlogPage() {
  const blogPosts = await getBlogPosts();

  return (
    <section className={styles.blogSection}>
      <h1 className={styles.title}>Latest Blog Posts</h1>
      <div className={styles.grid}>
        {blogPosts.map((blog) => (
          <article key={blog.id} className={styles.blogArticle}>
            <div className={styles.imageContainer}>
              <Image
                src={blog.imag || "/images/default-blog-image.jpg"}
                alt={blog.title}
                className={styles.blogImage}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className={styles.contentContainer}>
              <h2 className={styles.blogTitle}>{blog.title}</h2>
              <p className={styles.blogContent}>{blog.post}</p>

              <Link href={`/blogs/${blog.id}`} className={styles.blogsLink}>
                <ExternalLink />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
