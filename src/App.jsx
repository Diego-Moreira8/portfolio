import { pageSections } from "./utils/page-sections";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <div className="flex min-h-dvh flex-col bg-white font-mono text-black">
      <Header />

      <div className="mx-auto w-full max-w-5xl p-4">
        <main
          className="scroll-mt-sticky-header-height"
          id={pageSections.home.id}
        ></main>

        <Footer />
      </div>
    </div>
  );
}
