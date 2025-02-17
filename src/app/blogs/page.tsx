import { getBlogPosts, BlogPost } from "@/db/models";
import { BlogCard } from "@/components/blogs/blog-cards";
import styles from "./blog-pages.module.css";

export default async function BlogsList() {
  const blogPosts: BlogPost[] = await getBlogPosts();

  return (
    <section className={styles.blogSection}>
      <h1>Latest Blog Posts</h1>
      {blogPosts.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </section>
  );
}
