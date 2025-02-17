import styles from "./blog-pages.module.css";

interface BlogPageLayoutProps {
  children: React.ReactNode;
}

export default function BlogPageLayout({ children }: BlogPageLayoutProps) {
  return <main className={styles.main}>{children}</main>;
}
