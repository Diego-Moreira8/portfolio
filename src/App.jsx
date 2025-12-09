import { pageSections } from "./utils/page-sections";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import { AboutMe } from "./components/AboutMe";

export function App() {
  return (
    <div className="flex min-h-dvh flex-col bg-white font-mono text-black dark:bg-black dark:text-white">
      <Header />

      <div className="mx-auto w-full max-w-5xl px-4">
        <main
          className="scroll-mt-sticky-header-height"
          id={pageSections.home.id}
        >
          <Hero />
          <AboutMe />
        </main>

        <Footer />
      </div>
    </div>
  );
}
