import Vue from 'vue'
import Router from 'vue-router'



const Home = r => require.ensure([], () => r(require('@/components/home.vue')), 'Home')
const Top = r => require.ensure([], () => r(require('@/components/top.vue')), 'Top')
const Search = r => require.ensure([], () => r(require('@/components/search.vue')), 'Search')
const toplist = r => require.ensure([], () => r(require('@/components/toplist.vue')), 'toplist')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },{
    	path:"/top",
    	component:Top,
    	name:"Top"
    },{
    	path:"/search",
    	component:Search,
    	name:"Search"
    },
    {
    	path:'/',
    	redirect:"/home"
    },{
    	path:"/top/toplist/:topid",
    	component:toplist,
    	name:"toplist"
    },
  ]
})
