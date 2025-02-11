import { sql } from "../../config";

export async function getBlogPosts() {
  const results = await sql`SELECT * FROM blogs`;
  return results;
}

export async function seedDatabase() {
  try {
    const title = "My First Post";
    const post = "This is a seeded blog post!";

    await sql(`INSERT INTO blogs (title, post) VALUES ($1, $2) RETURNING *`, [
      title,
      post,
    ]);

    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}
