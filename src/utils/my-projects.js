import { techStack as t } from "./tech-stack";

/*
 * Capturas de tela dos projetos devem ter alturas:
 * lg: 768p
 * sm: 180p
 *
 * https://squoosh.app/
 * Method: Browser high quality
 * Compress: WebP
 * Effort: 6
 * Quality: 75
 */
import palomaScreenshot from "../assets/projects-screenshots/paloma-sm.webp";
import miniDriveScreenshot from "../assets/projects-screenshots/mini-drive-sm.webp";
import cvAppScreenshot from "../assets/projects-screenshots/cv-app-sm.webp";
import todoListScreenshot from "../assets/projects-screenshots/todo-list-sm.webp";
import ticTacToeScreenshot from "../assets/projects-screenshots/tic-tac-toe-sm.webp";
import fakeStoreScreenshot from "../assets/projects-screenshots/fake-store-sm.webp";

export const myProjects = [
  {
    screenshot: palomaScreenshot,
    title: "Landing Page",
    description: `Um site comercial para psicóloga.`,
    techs: [t.react, t.tailwind, t.figma],
    demoUrl: "https://palomadantas.com.br/",
  },
  {
    screenshot: miniDriveScreenshot,
    title: "Mini Drive",
    description: `
      Uma aplicação web de armazenamento e compartilhamento de arquivos.
    `,
    techs: [t.nodeJS, t.express, t.postgreSQL],
    repoUrl: "https://github.com/Diego-Moreira8/mini-drive",
    demoUrl: "https://mini-drive-eg47.onrender.com/",
  },
  {
    screenshot: fakeStoreScreenshot,
    title: "Fake Store",
    description: `Um projeto de loja online fictícia.`,
    techs: [t.react, t.javaScript, t.css],
    repoUrl: "https://github.com/Diego-Moreira8/odin-shopping-cart",
    demoUrl: "https://odin-shopping-cart-kappa.vercel.app/",
  },
  {
    screenshot: cvAppScreenshot,
    title: "CV App",
    description: `
      Web App que permite aos usuários gerar currículos imprimíveis.
    `,
    techs: [t.react, t.typeScript, t.css],
    repoUrl: "https://github.com/Diego-Moreira8/cv-app",
    demoUrl: "https://diego-moreira8.github.io/cv-app",
  },
  {
    screenshot: todoListScreenshot,
    title: "Lista de Tarefas",
    description: `Um aplicativo simples de lista de tarefas.`,
    techs: [t.javaScript, t.sass, t.webpack],
    repoUrl: "https://github.com/Diego-Moreira8/odin-todo-list",
    demoUrl: "https://diego-moreira8.github.io/odin-todo-list",
  },
  {
    screenshot: ticTacToeScreenshot,
    title: "Jogo da Velha",
    description: `Um jogo da velha com placar.`,
    techs: [t.javaScript, t.css, t.html],
    repoUrl: "https://github.com/Diego-Moreira8/odin-tic-tac-toe",
    demoUrl: "https://diego-moreira8.github.io/odin-tic-tac-toe",
  },
];
