export function LinkButton({ url, Icon, text }) {
  return (
    <a className="relative mx-auto my-8 block w-fit" href={url} target="_blank">
      <div className="hover:shadow-buttons flex w-fit items-center gap-2 rounded-xl bg-black px-6 py-4 text-center font-bold text-white transition-all hover:-translate-1 dark:bg-white dark:text-black">
        {Icon && <Icon className="h-6 w-auto" />}
        <span>{text}</span>
      </div>
    </a>
  );
}
