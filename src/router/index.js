import Vue from 'vue'
import VueRouter from 'vue-router'

import Recipe from '../components/Recipe.vue'
import EditRecipe from '../components/EditRecipe.vue'


Vue.use(VueRouter)

//import Login from '../components/auth/Login.vue'
const routes = [
  {
    path: "/",
    component: () => import("@/components/auth/Auth"),
    redirect: '/login',
    children: [
      {
        name: "login",
        path: "/login",
        component: () => import("@/components/auth/Login")
      },
      {
        name: "register",
        path: "/register",
        component: () => import("@/components/auth/Register")
      }
    ]
  },
  {
  path: "/layout",
  component: () => import("@/views/Layout"),
  redirect: '/home',
  children: [
  {
    path: '/home',
    name: 'Home',
    component: () => import("@/views/Home")

  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("@/views/About")
  },
  {
    path: '/create',
    name: 'Create',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("@/components/CreateRecipe")
  }
  ,
  {path:'/recipe/:id',component:Recipe,name:'recipe'},
  {path:'/edit/:id',component:EditRecipe,name:'edit'}
]
},
  
    {path:'*',redirect:{name:'home'}},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let isAuthenticated= localStorage.getItem('isAuthenticated');

  if (to.name !== 'login'&& isAuthenticated==="false") {
    if(to.name == 'register'){
      next();
    }
    else{
      next('/login');


      
    }
    
   } else {
     next();

     
   }
 });
export default router
