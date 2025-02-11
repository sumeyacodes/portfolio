import styles from "./blog.module.css";
export default function BlogLayout({ children }) {
  return <main className={styles.main}>{children}</main>;
}
