import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _1eb2e8d3 = () => import('..\\pages\\faq.vue' /* webpackChunkName: "pages_faq" */).then(m => m.default || m)
const _f38adc42 = () => import('..\\pages\\what-is-thermacote.vue' /* webpackChunkName: "pages_what-is-thermacote" */).then(m => m.default || m)
const _e2dd2882 = () => import('..\\pages\\case-study.vue' /* webpackChunkName: "pages_case-study" */).then(m => m.default || m)
const _1a07525d = () => import('..\\pages\\contact.vue' /* webpackChunkName: "pages_contact" */).then(m => m.default || m)
const _ffa6aff8 = () => import('..\\pages\\applicators-map.vue' /* webpackChunkName: "pages_applicators-map" */).then(m => m.default || m)
const _206da74c = () => import('..\\pages\\admin.vue' /* webpackChunkName: "pages_admin" */).then(m => m.default || m)
const _8f37c094 = () => import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages_admin_index" */).then(m => m.default || m)
const _1c1f9916 = () => import('..\\pages\\admin\\users\\index.vue' /* webpackChunkName: "pages_admin_users_index" */).then(m => m.default || m)
const _7116d434 = () => import('..\\pages\\admin\\applicators\\index.vue' /* webpackChunkName: "pages_admin_applicators_index" */).then(m => m.default || m)
const _fad96b44 = () => import('..\\pages\\the-company.vue' /* webpackChunkName: "pages_the-company" */).then(m => m.default || m)
const _17692437 = () => import('..\\pages\\documentation.vue' /* webpackChunkName: "pages_documentation" */).then(m => m.default || m)
const _68c0b29e = () => import('..\\pages\\glossary.vue' /* webpackChunkName: "pages_glossary" */).then(m => m.default || m)
const _0a390148 = () => import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages_login_index" */).then(m => m.default || m)
const _23caef0e = () => import('..\\pages\\realisations.vue' /* webpackChunkName: "pages_realisations" */).then(m => m.default || m)
const _22035962 = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/en/faq",
			component: _1eb2e8d3,
			name: "faq___en"
		},
		{
			path: "/es/faq",
			component: _1eb2e8d3,
			name: "faq___es"
		},
		{
			path: "/fr/faq",
			component: _1eb2e8d3,
			name: "faq___fr"
		},
		{
			path: "/en/what-is-thermacote",
			component: _f38adc42,
			name: "what-is-thermacote___en"
		},
		{
			path: "/es/what-is-thermacote",
			component: _f38adc42,
			name: "what-is-thermacote___es"
		},
		{
			path: "/fr/what-is-thermacote",
			component: _f38adc42,
			name: "what-is-thermacote___fr"
		},
		{
			path: "/en/case-study",
			component: _e2dd2882,
			name: "case-study___en"
		},
		{
			path: "/es/case-study",
			component: _e2dd2882,
			name: "case-study___es"
		},
		{
			path: "/fr/case-study",
			component: _e2dd2882,
			name: "case-study___fr"
		},
		{
			path: "/en/contact",
			component: _1a07525d,
			name: "contact___en"
		},
		{
			path: "/es/contact",
			component: _1a07525d,
			name: "contact___es"
		},
		{
			path: "/fr/contact",
			component: _1a07525d,
			name: "contact___fr"
		},
		{
			path: "/en/applicators-map",
			component: _ffa6aff8,
			name: "applicators-map___en"
		},
		{
			path: "/es/applicators-map",
			component: _ffa6aff8,
			name: "applicators-map___es"
		},
		{
			path: "/fr/applicators-map",
			component: _ffa6aff8,
			name: "applicators-map___fr"
		},
		{
			path: "/en/admin",
			component: _206da74c,
			children: [
				{
					path: "",
					component: _8f37c094,
					name: "admin___en"
				},
				{
					path: "users",
					component: _1c1f9916,
					name: "admin-users___en"
				},
				{
					path: "applicators",
					component: _7116d434,
					name: "admin-applicators___en"
				}
			]
		},
		{
			path: "/es/admin",
			component: _206da74c,
			children: [
				{
					path: "",
					component: _8f37c094,
					name: "admin___es"
				},
				{
					path: "users",
					component: _1c1f9916,
					name: "admin-users___es"
				},
				{
					path: "applicators",
					component: _7116d434,
					name: "admin-applicators___es"
				}
			]
		},
		{
			path: "/fr/admin",
			component: _206da74c,
			children: [
				{
					path: "",
					component: _8f37c094,
					name: "admin___fr"
				},
				{
					path: "users",
					component: _1c1f9916,
					name: "admin-users___fr"
				},
				{
					path: "applicators",
					component: _7116d434,
					name: "admin-applicators___fr"
				}
			]
		},
		{
			path: "/en/the-company",
			component: _fad96b44,
			name: "the-company___en"
		},
		{
			path: "/es/the-company",
			component: _fad96b44,
			name: "the-company___es"
		},
		{
			path: "/fr/the-company",
			component: _fad96b44,
			name: "the-company___fr"
		},
		{
			path: "/en/documentation",
			component: _17692437,
			name: "documentation___en"
		},
		{
			path: "/es/documentation",
			component: _17692437,
			name: "documentation___es"
		},
		{
			path: "/fr/documentation",
			component: _17692437,
			name: "documentation___fr"
		},
		{
			path: "/en/glossary",
			component: _68c0b29e,
			name: "glossary___en"
		},
		{
			path: "/es/glossary",
			component: _68c0b29e,
			name: "glossary___es"
		},
		{
			path: "/fr/glossary",
			component: _68c0b29e,
			name: "glossary___fr"
		},
		{
			path: "/en/login",
			component: _0a390148,
			name: "login___en"
		},
		{
			path: "/es/login",
			component: _0a390148,
			name: "login___es"
		},
		{
			path: "/fr/login",
			component: _0a390148,
			name: "login___fr"
		},
		{
			path: "/en/realisations",
			component: _23caef0e,
			name: "realisations___en"
		},
		{
			path: "/es/realisations",
			component: _23caef0e,
			name: "realisations___es"
		},
		{
			path: "/fr/realisations",
			component: _23caef0e,
			name: "realisations___fr"
		},
		{
			path: "/en/",
			component: _22035962,
			name: "index___en"
		},
		{
			path: "/es/",
			component: _22035962,
			name: "index___es"
		},
		{
			path: "/fr/",
			component: _22035962,
			name: "index___fr"
		}
    ],
    
    
    fallback: false
  })
}
