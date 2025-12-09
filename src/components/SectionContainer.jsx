export function SectionContainer({ children, id, softBg = false }) {
  const softBgColors =
    "bg-soft-white text-black dark:bg-soft-dark dark:text-white";

  return (
    <section
      className={`scroll-mt-sticky-header-height my-8 rounded-2xl p-2 sm:px-8 sm:py-16 ${softBg ? softBgColors : ""}`}
      id={id}
    >
      {children}
    </section>
  );
}
