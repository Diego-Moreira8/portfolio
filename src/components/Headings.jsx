export function Heading1({ url, children }) {
  return (
    <a
      className="border-b-secondary mx-auto mt-8 mb-4 block w-fit border-b-4 text-3xl font-bold"
      href={url}
    >
      <h1>{children}</h1>
    </a>
  );
}

export function Heading2({ children }) {
  return <h2 className="mt-8 mb-4 text-2xl font-bold">{children}</h2>;
}
