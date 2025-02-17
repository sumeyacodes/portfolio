import { getBlogPosts, BlogPost } from "@/db/models";
import styles from "../blog-pages.module.css";

interface BlogPostParams {
  params: Promise<{
    slug: string;
  }>;
}

export default async function IndividualBlog({ params }: BlogPostParams) {
  const blogPosts: BlogPost[] = await getBlogPosts();

  const slug = Number((await params).slug);
  const blog = blogPosts.find((blog) => blog.id === slug);

  return (
    <section className={styles.individualBlogSection}>
      <article className={styles.individualBlogArticle}>
        <h1 className={styles.individualBlogTitle}>{blog.title}</h1>
        <p className={styles.individualBlogPost}>{blog.post}</p>
      </article>
    </section>
  );
}
