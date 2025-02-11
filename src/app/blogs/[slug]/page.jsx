import { getBlogPosts } from "@/api/models";
import styles from "../blog.module.css";

export default async function IndividualBlog({ params }) {
  const blogPosts = await getBlogPosts();
  const slug = (await params).slug;

  const blog = blogPosts.find((blog) => blog.id == slug);

  return (
    <section className={styles.individualBlogSection}>
      <article className={styles.individualBlogArticle}>
        <h1 className={styles.individualBlogTitle}>{blog.title}</h1>
        <p className={styles.individualBlogPost}>{blog.post}</p>
      </article>
    </section>
  );
}
