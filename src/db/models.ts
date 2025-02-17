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

export async function getIndividualBlogPosts({ id }): Promise<BlogPost> {
  const results = await db("SELECT * FROM blogs WHERE id = $1", [id]);
  console.log(results);
  // return results as BlogPost;
  return results.length > 0 ? (results[0] as BlogPost) : null;
}
