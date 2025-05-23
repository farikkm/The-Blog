import { routes } from "./routes";
import { PAGE404 } from "../constants";

export async function router() {
  const app = document.getElementById("app");

  const path = window.location.pathname;
  const file = routes.find((route) => route.href === path);
  const html = await fetch(file?.filePath || PAGE404).then((res) => res.text());

  app.innerHTML = html;

  await file.loadStyles();
  await file.loadScripts();
}

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  router();
});

function navigateTo(url) {
  history.pushState(null, null, url);
  router();
}
