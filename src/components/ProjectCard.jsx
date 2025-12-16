export function ProjectCard({ project }) {
  const { screenshot, title, description, techs, repoUrl, demoUrl } = project;

  return (
    <div className="bg-soft-white dark:bg-soft-dark flex w-[calc(220px+2rem)] snap-center flex-col gap-4 rounded-lg p-4 lg:w-[calc(250px+2rem)] dark:text-white">
      <img
        className="dark:border-soft-white border-soft-dark aspect-4/3 w-[220px] max-w-none rounded-md border-2 object-cover lg:w-[250px]"
        src={screenshot}
        alt={`Captura de tela do projeto ${title}`}
      />
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-sm">{description}</p>

      <div className="flex justify-center gap-2">
        {/* eslint-disable-next-line no-unused-vars */}
        {techs.map(({ Icon, techName }, index) => (
          <span key={index} title={techName}>
            <Icon className="h-5 w-fit" />
            <span className="sr-only">{techName}</span>
          </span>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        <a className="font-bold hover:underline" href={repoUrl} target="_blank">
          Repositório
        </a>
        <a className="font-bold hover:underline" href={demoUrl} target="_blank">
          Demonstração
        </a>
      </div>
    </div>
  );
}
