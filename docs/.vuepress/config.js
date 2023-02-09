module.exports = {
    theme: 'reco',
    title: 'Lazy-assed Ninja',
    description: 'Good old days.',
    dest: 'docs/public',
    head: [
        // On a mobile device, the search box can be zoomed in when focused, and scrolled left or right when not focused.
        // This can be done by setting the meta.
        ['meta',
            {
                name: 'viewport',
                content: 'width=device-width,initial-scale=1,user-scalable=no'
            }
        ],
        ['link',
            {
                rel: 'icon',
                href: '/icon.png'
            }
        ],
    ],
    themeConfig: {
        type: 'blog',
        author: 'Henry Huang',
        authorAvatar: '/avatar.jpeg',
        search: true,
        startYear: '2021',
        searchMaxSuggestions: 10,
        subSidebar: 'auto',
        sidebarDepth: 2,
        nav: [
            {
                text: 'Home',
                link: '/',
                icon: 'reco-home'
            },
            {
                text: 'TimeLine',
                link: '/timeline/',
                icon: 'reco-date'
            },
            {
                text: 'Contact',
                icon: 'reco-message',
                items: [
                    {
                        icon: 'reco-mail',
                        text: 'Email',
                        link: 'mailto:henryhuang861219@gmail.com'
                    },
                    {
                        icon: 'reco-github',
                        text: 'GitHub',
                        link: 'https://github.com/henryhuang1219'
                    },
                    {
                        icon: 'reco-linkedin',
                        text: 'LinkedIn',
                        link: 'https://www.linkedin.com/in/henryhuang1219/'
                    },
                    {
                        icon: 'reco-facebook',
                        text: 'Facebook',
                        link: 'https://www.facebook.com/henry.huang.9659/'
                    }
                ]
            }
        ],
        blogConfig: {
            category: {
                location: 2, // The position occupied in the navigation bar menu, default to 2
                text: 'Category' // Text default to "Category"
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
        vssueConfig: {
            platform: 'github',
            owner: 'henryhuang1219',
            repo: 'henryhuang1219.github.io',
            clientId: process.env.OAUTH_APP_CLIENT_ID,
            clientSecret: process.env.OAUTH_APP_CLIENT_SECRET,
            locale: 'en',
        },
        noFoundPageByTencent: false
    },
    locales: {
        '/': {
            lang: 'en-US'
        },
    },
    plugins: [
        [
            '@vuepress/google-analytics',
            {
                'ga': process.env.TRACKING_ID
            }
        ]
    ]
}