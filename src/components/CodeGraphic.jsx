export function CodeGraphic() {
  return (
    <div className="flex w-full flex-col items-center gap-2 sm:gap-4">
      <div className="flex w-full justify-center gap-1 sm:gap-2">
        <div className="bg-primary h-3 w-4/10 rounded-4xl"></div>
        <div className="bg-secondary h-3 w-2/10 rounded-4xl"></div>
      </div>
      <div className="flex w-full justify-center gap-1 sm:gap-2">
        <div className="bg-secondary h-3 w-2/10 rounded-4xl"></div>
        <div className="bg-soft-dark dark:bg-soft-white h-3 w-3/10 rounded-4xl"></div>
        <div className="bg-soft-dark dark:bg-soft-white h-3 w-2/10 rounded-4xl"></div>
      </div>
      <div className="flex w-full justify-center gap-1 sm:gap-2">
        <div className="bg-soft-dark dark:bg-soft-white h-3 w-3/10 rounded-4xl"></div>
        <div className="bg-primary h-3 w-1/10 rounded-4xl"></div>
        <div className="bg-secondary h-3 w-2/10 rounded-4xl"></div>
      </div>
    </div>
  );
}
