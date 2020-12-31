import { createRouter, createWebHashHistory } from "vue-router";

import Home from '../views/Home.vue'

// 1. Define route components.
// These can be imported from other files



// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  {
    path: "/",
    redirect: "/index",
    component: Home,
    children: [ 
      {
        path: "/home",
        component: () => import("../views/Home.vue"),
        redirect:"/home/index",
        children:[
          {
            path: "/homefollow",
            component: () => import("../views/HomeFollow.vue"),
          },
          {
            path: "/index",
            component: () => import("../views/Index.vue"),
          },
        ]
      },
      {
        path: "/design",
        component: () => import("../views/Design.vue"),
      },
      {
        path: "/message",
        component: () => import("../views/Message.vue"),
      },
      {
        path: "/mine",
        name:"Mine",
        component: () => import("../views/Mine.vue"),
      },
      
    ],
  },
  {
    path: "/login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/add",
    component: () => import("../views/Add.vue")
  },
  {
    path: "/comment",
    component: () => import("../views/Comment.vue")
  },
  {
    path: "/fabulous",
    component: () => import("../views/Fabulous.vue"),
  },
  {
    path: "/designer",
    component: () => import("../views/Designer.vue"),
  },
  {
    path: "/caseexhibition",
    component: () => import("../views/CaseExhibition.vue"),
  },
  {
    path: "/Particular/:particularId",
    name: "Particular",
    component: () => import("../views/Particular.vue"),
  },
  {
        path: "/change",
        component: () => import("../views/change.vue"),
      }
]


export const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

router.beforeEach((to, from, next) => {
  if ( to.name === "Mine") {
    if (localStorage.getItem("id")) {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});