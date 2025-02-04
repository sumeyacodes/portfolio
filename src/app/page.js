import { Hero } from "@/components/hero/hero";
import { NavBar } from "@/components/navbar";
import mainPageStyles from "./page.module.css";

export default function Home() {
  return (
    <main className={mainPageStyles.pageContainer}>
      <header className={mainPageStyles.navbar}>
        <NavBar />
      </header>

      <section className={mainPageStyles.pageContent}>
        <Hero />
      </section>
    </main>
  );
}
