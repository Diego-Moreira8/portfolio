import { useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";
import { NavDesktop } from "./NavDesktop";
import { NavMobile } from "./NavMobile";
import { pageSections } from "../utils/page-sections";

export function Header() {
  const [shadowVisible, setShadowVisible] = useState(false);
  const observerTarget = useRef(null);

  useEffect(() => {
    // Adiciona uma sombra no header quando o usuário rola para baixo
    const observer = new IntersectionObserver(
      (entries) => {
        setShadowVisible(!entries[0].isIntersecting);
      },
      {
        threshold: 1,
      },
    );

    observer.observe(observerTarget.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 h-fit w-full bg-white/75 text-black backdrop-blur-xs transition-shadow duration-1000 ${shadowVisible ? "shadow-md" : ""}`}
      >
        <div className="h-sticky-header-height mx-auto flex max-w-5xl items-center justify-between px-3">
          <a className="p-1 text-xl font-bold" href={pageSections.home.url}>
            <Logo />
          </a>

          <NavMobile />
          <NavDesktop />
        </div>
      </header>

      <div ref={observerTarget}>
        {/* 
          Usado para verificar se houve scroll para adicionar a sombra ao Header
        */}
      </div>
    </>
  );
}
100;
