import { pageSectionsArray } from "../utils/page-sections";

export function NavDesktop() {
  return (
    <nav className="hidden sm:block">
      <ul className="flex">
        {pageSectionsArray.map(({ id, title, url }) => (
          <li key={id}>
            <a
              className="hover:bg-secondary px-2 py-1 transition-colors hover:font-bold"
              href={url}
            >
              {title.toUpperCase()}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
