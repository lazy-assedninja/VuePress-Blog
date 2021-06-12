const path = require("path");

module.exports = (options, context, api) => {
    return {
        title: "Henry Huang",
        theme: "@vuepress/blog",
        themeConfig: {
            directories: [
                {
                    id: "blog",
                    dirname: "zh/blog",
                    title: "Blog",
                    path: "/zh/blog/",
                    itemPermalink: "/zh/:year/:month/:day/:slug"
                },
                {
                    id: "portfolio",
                    dirname: "zh/portfolio",
                    title: "Portfolio",
                    path: "/zh/portfolio/",
                    itemPermalink: "/zh/:year/:month/:day/:slug"
                }
            ],
            nav: [
                {
                    text: "Blog",
                    link: "/zh/blog/"
                },
                {
                    text: "Portfolio",
                    link: "/zh/portfolio/"
                }
            ],
            footer: {
                contact: [
                    {
                        type: "mail",
                        link: "mailto:henryhuang861219@gmail.com"
                    },
                    {
                        type: "github",
                        link: "https://github.com/henryhuang1219"
                    },
                    {
                        type: "linkedin",
                        link: "https://www.linkedin.com/in/henryhuang1219/"
                    },
                    {
                        type: "facebook",
                        link: "https://www.facebook.com/henry.huang.9659/"
                    }
                ],
                copyright: [
                    {
                        text: "Henry Huang © 2021"
                    }
                ]
            },
            smoothScroll: true
        },
        alias: {
            "@assets": path.resolve(__dirname, "../assets")
        }
    };
};
