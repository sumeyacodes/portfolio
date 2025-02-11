// app/blog/page.js
import { getBlogPosts } from "@/api/db";

export default async function BlogPage() {
  const blogPosts = await getBlogPosts();

  return (
    <section>
      {blogPosts.map((blog) => (
        <article key={blog.id} className="text-white">
          <h1>{blog.title}</h1>
          <p>{blog.post}</p>
        </article>
      ))}
    </section>
  );
}
