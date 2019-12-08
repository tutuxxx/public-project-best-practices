module.exports = {
    title: 'Hello',
    description: 'Hello',
    head: [
        ['link', { rel: 'icon', href: '/hello.png' }],
    ],
    markdown: {
        lineNumbers: true
    },
    serviceWorker: true,
    base: '/public-project-best-practices/',
    themeConfig: {
        logo: '/hello.png',
        lastUpdated: 'lastUpdate',
        nav: [
            { text: '指南', link: '/pages/GUIDE/index.md' },
            {
                text: '了解更多',
                ariaLabel: '了解更多',
                items: [
                    { text: 'Hello API', link: '/pages/API/index.md' },
                    { text: 'Hello CLI', link: '/pages/CLI/index.md' },
                ]
            },
            { text: 'Github', link: 'https://github.com/tutuxxx/public-project-best-practices.git' },
        ],
        sidebar: {
            '/pages/API/':[
                {
                    title: 'API',
                    collapsable: false,
                    children: [
                        ['say.md', 'say']
                    ]
                }
            ],
        }
    }
}
