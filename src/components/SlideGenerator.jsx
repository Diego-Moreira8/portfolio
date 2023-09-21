// Stores all projects and generates that will be used on the carousel

import Project from "./Project";

import memoryCard from "../images/memory-card.gif";
import cvApp from "../images/cv-app.gif";
import rockPaperScissors from "../images/rock-paper-scissors.gif";
import landingPage from "../images/landing-page.gif";
import bst from "../images/bst.png";
import mergeSort from "../images/merge-sort.png";
import portfolio from "../images/portfolio.gif";

const PROJECTS = [
  {
    title: "Jogo da Memória - BoJack Horseman",
    src: memoryCard,
    alt: "Capturas de tela do projeto Jogo da Memória",
    description: `Este projeto foi proposto como parte do currículo do site 
      The Odin Project para prática de Hooks do React. Trata-se de um jogo da 
      memória, inspirado pela série BoJack Horseman.`,
    repoUrl: "https://github.com/Diego-Moreira8/odin-memory-card",
    projectUrl: "https://diego-moreira8.github.io/odin-memory-card/",
  },
  {
    title: "App de Currículo Profissional",
    src: cvApp,
    alt: "Capturas de tela do projeto App de Currículo Profissional",
    description: `Este projeto foi proposto como parte do currículo do site 
      The Odin Project para prática dos conceitos básicos de React. Nele, o 
      usuário pode registrar informações de seu currículo profissional.`,
    repoUrl: "https://github.com/Diego-Moreira8/odin-cv-project",
    projectUrl: "https://diego-moreira8.github.io/odin-cv-project/",
  },
  {
    title: "Jogo de Pedra, Papel ou Tesoura",
    src: rockPaperScissors,
    alt: "Capturas de tela do projeto Pedra, Papel ou Tesoura",
    description: `Este projeto foi proposto como parte do currículo do site 
      The Odin Project para prática de JavaScript puro e Event Listeners.`,
    repoUrl:
      "https://github.com/Diego-Moreira8/odin-rock-paper-scissors-project",
    projectUrl:
      "https://diego-moreira8.github.io/odin-rock-paper-scissors-project/",
  },
  {
    title: "Landing Page",
    src: landingPage,
    alt: "Capturas de tela do projeto de Landing Page",
    description: `Projeto proposto no Alura 7 Days of Code. O objetivo era 
      transformar um projeto do Figma em código em 7 dias. Nele pude praticar 
      HTML e CSS puro.`,
    repoUrl:
      "https://github.com/Diego-Moreira8/alura-optimus-tech-landing-page",
    projectUrl:
      "https://diego-moreira8.github.io/alura-optimus-tech-landing-page/",
  },
  {
    title: "Árvore de Busca Binária",
    src: bst,
    alt: "Ilustração de uma Árvore de Busca Binária",
    description: `Este projeto foi proposto como parte do currículo do site 
    The Odin Project, para fixação dos conceitos de estruturas de dados. No 
    projeto pude criar uma implementação de uma Binary Search Tree.`,
    repoUrl: "https://github.com/Diego-Moreira8/odin-balanced-bst/tree/main",
  },
  {
    title: "Algoritmos de Ordenação",
    src: mergeSort,
    alt: "Ilustração do algorítmo Merge Sort",
    description: `Este projeto foi proposto como parte do currículo do site 
    The Odin Project, também para fixação dos conceitos de estruturas de 
    dados. A tarefa era criar um algoritmo de merge sort. Acabei escrevendo 
    mais alguns para fixar o aprendizado.`,
    repoUrl: "https://github.com/Diego-Moreira8/odin-sort-algorithms",
  },
  {
    title: "Este site",
    src: portfolio,
    alt: "Capturas de tela do meu portfólio",
    description: `Este projeto foi proposto como parte do currículo do site 
    The Odin Project, para fixação do aprendizado em HTML e CSS avançados. 
    Resolvi aproveitar o conhecimento em React e desenvolvi o projeto utilizando
    a biblioteca.`,
    repoUrl: "https://github.com/Diego-Moreira8/portfolio",
  },
];

export default function SlideGenerator() {
  return PROJECTS.map((p) => (
    <Project
      title={p.title}
      src={p.src}
      alt={p.alt}
      description={p.description}
      repoUrl={p.repoUrl}
      projectUrl={p.projectUrl}
    />
  ));
}
