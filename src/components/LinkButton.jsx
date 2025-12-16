export function LinkButton({ url, Icon, text }) {
  return (
    <a
      className="hover:bg-soft-dark hover:dark:bg-soft-white mx-auto my-8 flex w-fit items-center gap-2 rounded-xl bg-black px-6 py-4 text-center font-bold text-white transition-transform duration-75 active:scale-95 dark:bg-white dark:text-black"
      href={url}
      target="_blank"
    >
      {Icon && <Icon className="h-6 w-auto" />}
      <span>{text}</span>
    </a>
  );
}
