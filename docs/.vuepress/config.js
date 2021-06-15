module.exports = {
    theme: 'reco',
    title: 'Henry Huang',
    description: 'A battle is won by him who is firmly resolved to win it.',
    dest: 'docs/public',
    head: [
        ['link',
            {
                rel: 'icon', href: '/h.png'
            }
        ],
    ],
    themeConfig: {
        type: 'blog',
        author: 'Henry Huang',
        authorAvatar: '/avatar.jpeg',
        // Search settings
        search: true,
        searchMaxSuggestions: 10,
        // Auto generate side bar
        subSidebar: 'auto',
        sidebarDepth: 4,
        nav: [
            {
                text: 'Home', link: '/', icon: 'reco-home'
            },
            {
                text: 'TimeLine', link: '/timeline/', icon: 'reco-date'
            },
        ],
        blogConfig: { // Blog configuration
            category: {
                location: 2, // The position occupied in the navigation bar menu, default to 2
                text: 'Blog' // Text default to "Category"
            },
            tag: {
                location: 3, // The position occupied in the navigation bar menu, default to 3
                text: 'Tag' // Text default to "Tag"
            },
            socialLinks: [ // Information bar displays social information
                {
                    icon: "reco-mail",
                    link: "mailto:henryhuang861219@gmail.com"
                },
                {
                    icon: "reco-github",
                    link: "https://github.com/henryhuang1219"
                },
                {
                    icon: "reco-linkedin",
                    link: "https://www.linkedin.com/in/henryhuang1219/"
                },
                {
                    icon: "reco-facebook",
                    link: "https://www.facebook.com/henry.huang.9659/"
                }
            ]
        },
        noFoundPageByTencent: false
    },
    locales: {
        '/': {
            lang: 'en-US'
        },
    },
}