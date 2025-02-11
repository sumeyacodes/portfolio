import { Hero, About, Projects } from "@/components";
import mainPageStyles from "./page.module.css";

export default function Home() {
  return (
    <main className={mainPageStyles.pageContainer}>
      <Hero />
      <About />
      <Projects />
    </main>
  );
}
