import Project from "./Project";

import screenshotTest from "../images/ss.png";

export default function TestProject() {
  return (
    <Project
      title={"Nome do Projeto"}
      src={screenshotTest}
      alt={"Texto alternativo de teste"}
      description={
        "Descrição do projeto aqui. Asd ef wef we wie weir naioudhasd asd asudasdo. "
      }
      repoUrl={"#"}
      projectUrl={"#"}
    />
  );
}
