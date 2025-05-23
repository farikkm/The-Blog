import { PAGES } from "../constants";

export const routes = [
  {
    href: '/',
    filePath: `${PAGES}/home/index.html`,
    loadStyles: async () => {
      await import("../pages/home/style.css")
    },
    loadScripts: async () => {
      await import("../pages/home/script.js")
    }
  },
  {
    href: '/about',
    filePath: `${PAGES}/about/index.html`
  },
]