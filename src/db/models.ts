"use server";

import { db } from "./config";

export interface BlogPost {
  id: number;
  title: string;
  post: string;
  image?: string;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const results = await db("SELECT * FROM blogs");
  return results as BlogPost[];
}

// export async function seedDatabase() {
//   try {
//     const title = "My First Post";
//     const post = "This is a seeded blog post!";

//     await db("INSERT INTO blogs (title, post) VALUES ($1, $2) RETURNING *", [
//       title,
//       post,
//     ]);

//     console.log("Database seeded successfully!");
//   } catch (error) {
//     console.error("Error seeding database:", error);
//   }
// }
