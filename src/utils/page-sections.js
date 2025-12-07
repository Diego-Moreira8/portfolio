// Seções do site. Objetos podem ser acessados pelo nome da seção.
export const pageSections = {
  home: {
    title: "Início",
    id: "inicio",
    get url() {
      return "#" + this.id;
    },
  },
  about: {
    title: "Sobre Mim",
    id: "sobre-mim",
    get url() {
      return "#" + this.id;
    },
  },
  howItWorks: {
    title: "Meus Projetos",
    id: "meus-projetos",
    get url() {
      return "#" + this.id;
    },
  },
  contact: {
    title: "Contato",
    id: "contato",
    get url() {
      return "#" + this.id;
    },
  },
};

// Versão em array, que pode ser mapeado para gerar componentes.
export const pageSectionsArray = Object.entries(pageSections).map(
  (sectionObject) => sectionObject[1],
);
