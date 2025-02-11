import { getBlogPosts } from "@/api/db";

export default async function BlogPage({ params }) {
  const blogPosts = await getBlogPosts();
  const slug = (await params).slug;

  const blog = blogPosts.find((blog) => blog.id == slug);

  return (
    <section>
      <article key={blog.id} className="text-white">
        <h1>{blog.title}</h1>
        <p>{blog.post}</p>
      </article>
    </section>
  );
}
