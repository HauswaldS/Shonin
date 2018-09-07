const pkg = require('./package');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: 'universal',

    /*
    ** Headers of the page
    */
    head: {
        title: pkg.name,
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: pkg.description}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },

    /*
    ** Customize the progress-bar color
    */
    loading: {color: '#FFFFFF'},

    /*
    ** Global CSS
    */
    css: [
        'element-ui/lib/theme-chalk/index.css',
        '@fortawesome/fontawesome-free/css/all.css'
    ],

    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        '@/plugins/element-ui',
        '@/plugins/vue-awesome',
        {src: '@/plugins/graphql-apollo-client', ssr: false}
    ],

    /*
    ** Nuxt.js modules
    */
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/sitemap',
        ['nuxt-i18n', {
            defaultLocale: 'en',
            locales: [
                {
                    code: 'en',
                    file: 'en-US.js'
                },
                {
                    code: 'es',
                    file: 'es-ES.js'
                },
                {
                    code: 'fr',
                    file: 'fr-FR.js'
                }
            ],
            lazy: true,
            langDir: 'lang/'
        }]
    ],
    router: {
        middleware: 'check_auth'
    },
    /*
    ** Build configuration
    */
    build: {
        vendor: ['vue-awesome'],
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
            // Run ESLint on save
            if (ctx.isDev && ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                });
            }
            if (ctx.isServer) {
                config.externals = [
                    nodeExternals({
                        whitelist: [/^vue-awesome/]
                    })
                ];
            }
        }
    }
};
