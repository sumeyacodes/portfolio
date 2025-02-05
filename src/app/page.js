import { Hero } from "@/components/hero";
import mainPageStyles from "./page.module.css";
import { Projects } from "@/components/projects";
import { About } from "@/components/about/about";

export default function Home() {
  return (
    <main className={mainPageStyles.pageContainer}>
      <Hero />
      <About />
      <Projects />
    </main>
  );
}
