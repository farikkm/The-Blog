export const routes = [
    {
        path: /^\/signin$/,
        view: async (app) => {
            const response = await fetch('src/pages/signin/index.html');

            app.innerHTML = await response.text();
        },
        loadStyles: async () => {
            await import('../pages/signin/styles/index.css');
        },
        loadScripts: async () => {
            await import('../pages/signin/scripts/index.js');
        }
    },
    {
        path: /^\/signup$/,
        view: async (app) => {
            const response = await fetch('src/pages/signup/index.html');

            app.innerHTML = await response.text();
        },
        loadStyles: async () => {
            await import('../pages/signup/styles/index.css');
        },
        loadScripts: async () => {
            await import('../pages/signup/scripts/index.js');
        }
    },
    {
        path: /^\/$/,
        view: async (app) => {
            const response = await fetch('src/pages/home/index.html');

            app.innerHTML = await response.text();
        },
        loadStyles: async () => {
            await import('../pages/home/styles/index.css');
        },
        loadScripts: async () => {
            await import('../pages/home/scripts/index.js');
        }
    }
];