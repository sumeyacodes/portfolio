"use client";

import { useState } from "react";
import styles from "./admin-page.module.css";
import { createBlogPost, BlogPost } from "@/db/models";

export default function AdminDashboard() {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const formData: BlogPost = { title, post };
      const newBlogPost: BlogPost = await createBlogPost(formData);
      setMessage("Blog post created successfully!");
      setTitle("");
      setPost("");
    } catch (error) {
      setMessage("Error creating blog post");
      console.error(error);
    }
  };

  return (
    <main className={styles.main}>
      <h1>Admin Dashboard</h1>

      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>Create New Blog Post</h2>

        {message && <p className={styles.message}>{message}</p>}

        <div className={styles.formGroup}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="post">Content:</label>
          <textarea
            id="post"
            value={post}
            onChange={(e) => setPost(e.target.value)}
            rows={10}
            required
          />
        </div>

        <button type="submit">Create Post</button>
      </form>
    </main>
  );
}
