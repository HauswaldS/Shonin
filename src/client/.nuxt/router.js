import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _5e7788ce = () => import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages_login_index" */).then(m => m.default || m)
const _24eb85af = () => import('..\\pages\\admin.vue' /* webpackChunkName: "pages_admin" */).then(m => m.default || m)
const _e376481a = () => import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages_admin_index" */).then(m => m.default || m)
const _07db0e39 = () => import('..\\pages\\admin\\users\\index.vue' /* webpackChunkName: "pages_admin_users_index" */).then(m => m.default || m)
const _2f7e64c9 = () => import('..\\pages\\admin\\applicators\\index.vue' /* webpackChunkName: "pages_admin_applicators_index" */).then(m => m.default || m)
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
			path: "/login",
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
			path: "/admin",
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
			path: "/",
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
