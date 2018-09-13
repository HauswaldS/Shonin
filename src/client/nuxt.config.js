const pkg = require('./package');
const nodeExternals = require('webpack-node-externals');
const getDotenv = require('../server/utils/dotenv');
getDotenv();

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
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto'},
            {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Comfortaa'}

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
        'swiper/dist/css/swiper.css',
        '@fortawesome/fontawesome-free/css/all.css',
        '@/assets/css/main.css'
    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        '@/plugins/element-ui',
        '@/plugins/vue-awesome',
        {src: '@/plugins/graphql-apollo-client', ssr: false},
        {src: '@/plugins/vue-awesome-swiper.js', ssr: false}
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
                    iso: 'en-US',
                    file: 'en-US.js'
                },
                {
                    code: 'es',
                    iso: 'es-ES',
                    file: 'es-ES.js'
                },
                {
                    code: 'fr',
                    iso: 'fr-FR',
                    file: 'fr-FR.js'
                }
            ],
            rootRedirect: 'en',
            strategy: 'prefix',
            lazy: true,
            langDir: 'lang/'
        }]
    ],
    router: {
        middleware: 'check_auth'
    },
    env: {
        baseUrl: 'http://localhost:8080'
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
                        whitelist: [/es6-promise|\.(?!(?:js|json)$).{1,5}$/i, /^vue-awesome/]
                    })
                ];
            }
        }
    }
};
