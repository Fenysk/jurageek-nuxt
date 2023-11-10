export default defineNuxtConfig({
    app: {
        head: {
            title: "JuraGeek - C'est plus grand à l'intérieur !",
            meta: [
                {
                    name: "description",
                    content:
                        "JuraGeek est la première association du Jura dédiée au jeu-vidéo, et bien plus encore !",
                },
            ],
        },
    },
    modules: ["@nuxtjs/tailwindcss"],
    tailwindcss: {
        cssPath: "~/assets/css/tailwind.css",
        configPath: "tailwind.config",
        exposeConfig: false,
        exposeLevel: 2,
        config: {},
        injectPosition: "first",
        viewer: true,
    },
});