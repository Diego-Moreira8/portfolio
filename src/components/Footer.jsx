import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="my-8 rounded-xl bg-black px-4 pt-4 pb-20 text-center text-white">
      <p className="my-4">
        Construído por
        <br />
        <Logo /> em 2025
      </p>

      <p className="my-4">
        🍪 Nenhum cookie.
        <br />
        Apenas meu portfolio!
      </p>

      <p className="mt-8 text-sm">© 2025 Diego — Licença MIT</p>
    </footer>
  );
}
