import { useEffect, useRef, useState } from "react";
import { Sandwich } from "./Icons/Sandwich";
import { pageSectionsArray } from "../utils/page-sections";

export function NavMobile() {
  const [navOpen, setNavOpen] = useState(false);
  const navDialogRef = useRef(null);

  function handleKeyPress(e) {
    if (e.key === "Escape" && navOpen) {
      toggleNav(false);
    }
  }

  function openNav() {
    toggleNav(true);
  }

  function closeNav() {
    toggleNav(false);
  }

  function toggleNav(opening) {
    const body = document.body;
    const navDialog = navDialogRef.current;
    const fadeIn = "var(--animate-quick-fade)";
    const fadeOut = "var(--animate-quick-fade-out)";

    if (opening) {
      body.style.overflow = "hidden";
      navDialog.style.animation = fadeIn;
      navDialog.showModal();
      setNavOpen(true);
    } else {
      body.style.overflow = "auto";
      navDialog.style.animation = fadeOut;
    }

    navDialog.addEventListener(
      "animationend",
      () => {
        navDialog.style.animation = "";

        if (!opening) {
          navDialog.close();
          setNavOpen(false);
        }
      },
      { once: true },
    );
  }

  useEffect(() => {
    // Garante que a nav mobile feche ao aumentar a largura da janela
    const observer = new ResizeObserver((entries) => {
      const body = entries[0].contentRect.width;
      const headerBreakpointPx = 640; /* Largura onde alterna entre mobile e desktop */

      if (body > headerBreakpointPx) toggleNav(false);
    });

    observer.observe(document.body);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="block sm:hidden">
      <button
        onClick={openNav}
        className="h-5 w-6 p-1"
        type="button"
        title="Abrir menu de navegação"
      >
        <Sandwich className="size-full" />
        <span className="sr-only">Abrir menu de navegação</span>
      </button>

      <dialog
        ref={navDialogRef}
        onKeyDown={handleKeyPress}
        className="fixed left-0 h-dvh max-h-none w-full max-w-none bg-transparent backdrop:h-dvh backdrop:w-screen backdrop:bg-transparent lg:hidden"
      >
        <nav
          onClick={closeNav}
          className="flex size-full items-end justify-end bg-white/75 p-4 pb-12 backdrop-blur-xs dark:bg-black/75 dark:text-white"
        >
          <ul className="flex h-full flex-col flex-wrap items-end justify-end gap-4">
            {pageSectionsArray.map(({ id, title, url }, index) => (
              <li
                key={id}
                className="size-fit"
                style={{
                  animation: "var(--animate-drop-in)",
                  animationDelay: `${(pageSectionsArray.length - index) * 0.05}s`,
                }}
              >
                <a
                  className="hover:bg-secondary active:bg-primary px-2 py-1 text-lg transition-colors hover:font-bold dark:hover:text-black"
                  href={url}
                  autoFocus={index === 0}
                >
                  {title.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </dialog>
    </div>
  );
}
