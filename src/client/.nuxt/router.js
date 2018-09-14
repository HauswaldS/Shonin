import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _48cb03f6 = () => import('..\\pages\\faq.vue' /* webpackChunkName: "pages_faq" */).then(m => m.default || m)
const _227a6c5c = () => import('..\\pages\\what-is-thermacote.vue' /* webpackChunkName: "pages_what-is-thermacote" */).then(m => m.default || m)
const _4cfe133c = () => import('..\\pages\\case-study.vue' /* webpackChunkName: "pages_case-study" */).then(m => m.default || m)
const _12f1b800 = () => import('..\\pages\\contact.vue' /* webpackChunkName: "pages_contact" */).then(m => m.default || m)
const _9843b2b2 = () => import('..\\pages\\applicators-map.vue' /* webpackChunkName: "pages_applicators-map" */).then(m => m.default || m)
const _24eb85af = () => import('..\\pages\\admin.vue' /* webpackChunkName: "pages_admin" */).then(m => m.default || m)
const _e376481a = () => import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages_admin_index" */).then(m => m.default || m)
const _07db0e39 = () => import('..\\pages\\admin\\users\\index.vue' /* webpackChunkName: "pages_admin_users_index" */).then(m => m.default || m)
const _2f7e64c9 = () => import('..\\pages\\admin\\applicators\\index.vue' /* webpackChunkName: "pages_admin_applicators_index" */).then(m => m.default || m)
const _dc88dafe = () => import('..\\pages\\the-company.vue' /* webpackChunkName: "pages_the-company" */).then(m => m.default || m)
const _04c020cc = () => import('..\\pages\\documentation.vue' /* webpackChunkName: "pages_documentation" */).then(m => m.default || m)
const _7f1a096e = () => import('..\\pages\\glossary.vue' /* webpackChunkName: "pages_glossary" */).then(m => m.default || m)
const _5e7788ce = () => import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages_login_index" */).then(m => m.default || m)
const _78097694 = () => import('..\\pages\\realisations.vue' /* webpackChunkName: "pages_realisations" */).then(m => m.default || m)
const _19079c9c = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)



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
			component: _48cb03f6,
			name: "faq___en"
		},
		{
			path: "/es/faq",
			component: _48cb03f6,
			name: "faq___es"
		},
		{
			path: "/fr/faq",
			component: _48cb03f6,
			name: "faq___fr"
		},
		{
			path: "/en/what-is-thermacote",
			component: _227a6c5c,
			name: "what-is-thermacote___en"
		},
		{
			path: "/es/what-is-thermacote",
			component: _227a6c5c,
			name: "what-is-thermacote___es"
		},
		{
			path: "/fr/what-is-thermacote",
			component: _227a6c5c,
			name: "what-is-thermacote___fr"
		},
		{
			path: "/en/case-study",
			component: _4cfe133c,
			name: "case-study___en"
		},
		{
			path: "/es/case-study",
			component: _4cfe133c,
			name: "case-study___es"
		},
		{
			path: "/fr/case-study",
			component: _4cfe133c,
			name: "case-study___fr"
		},
		{
			path: "/en/contact",
			component: _12f1b800,
			name: "contact___en"
		},
		{
			path: "/es/contact",
			component: _12f1b800,
			name: "contact___es"
		},
		{
			path: "/fr/contact",
			component: _12f1b800,
			name: "contact___fr"
		},
		{
			path: "/en/applicators-map",
			component: _9843b2b2,
			name: "applicators-map___en"
		},
		{
			path: "/es/applicators-map",
			component: _9843b2b2,
			name: "applicators-map___es"
		},
		{
			path: "/fr/applicators-map",
			component: _9843b2b2,
			name: "applicators-map___fr"
		},
		{
			path: "/en/admin",
			component: _24eb85af,
			children: [
				{
					path: "",
					component: _e376481a,
					name: "admin___en"
				},
				{
					path: "users",
					component: _07db0e39,
					name: "admin-users___en"
				},
				{
					path: "applicators",
					component: _2f7e64c9,
					name: "admin-applicators___en"
				}
			]
		},
		{
			path: "/es/admin",
			component: _24eb85af,
			children: [
				{
					path: "",
					component: _e376481a,
					name: "admin___es"
				},
				{
					path: "users",
					component: _07db0e39,
					name: "admin-users___es"
				},
				{
					path: "applicators",
					component: _2f7e64c9,
					name: "admin-applicators___es"
				}
			]
		},
		{
			path: "/fr/admin",
			component: _24eb85af,
			children: [
				{
					path: "",
					component: _e376481a,
					name: "admin___fr"
				},
				{
					path: "users",
					component: _07db0e39,
					name: "admin-users___fr"
				},
				{
					path: "applicators",
					component: _2f7e64c9,
					name: "admin-applicators___fr"
				}
			]
		},
		{
			path: "/en/the-company",
			component: _dc88dafe,
			name: "the-company___en"
		},
		{
			path: "/es/the-company",
			component: _dc88dafe,
			name: "the-company___es"
		},
		{
			path: "/fr/the-company",
			component: _dc88dafe,
			name: "the-company___fr"
		},
		{
			path: "/en/documentation",
			component: _04c020cc,
			name: "documentation___en"
		},
		{
			path: "/es/documentation",
			component: _04c020cc,
			name: "documentation___es"
		},
		{
			path: "/fr/documentation",
			component: _04c020cc,
			name: "documentation___fr"
		},
		{
			path: "/en/glossary",
			component: _7f1a096e,
			name: "glossary___en"
		},
		{
			path: "/es/glossary",
			component: _7f1a096e,
			name: "glossary___es"
		},
		{
			path: "/fr/glossary",
			component: _7f1a096e,
			name: "glossary___fr"
		},
		{
			path: "/en/login",
			component: _5e7788ce,
			name: "login___en"
		},
		{
			path: "/es/login",
			component: _5e7788ce,
			name: "login___es"
		},
		{
			path: "/fr/login",
			component: _5e7788ce,
			name: "login___fr"
		},
		{
			path: "/en/realisations",
			component: _78097694,
			name: "realisations___en"
		},
		{
			path: "/es/realisations",
			component: _78097694,
			name: "realisations___es"
		},
		{
			path: "/fr/realisations",
			component: _78097694,
			name: "realisations___fr"
		},
		{
			path: "/en/",
			component: _19079c9c,
			name: "index___en"
		},
		{
			path: "/es/",
			component: _19079c9c,
			name: "index___es"
		},
		{
			path: "/fr/",
			component: _19079c9c,
			name: "index___fr"
		}
    ],
    
    
    fallback: false
  })
}
