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
        component: () => import("../views/Mine.vue"),
        beforEnter(){
          
        }
      }
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
    path: "/sendquestion",
    component: () => import("../views/Sendquestion.vue")
  },
  {
    path: "/replyquestion",
    component: () => import("../views/Replyquestion.vue")
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
    path: "/messageinfo",
    component: () => import("../views/Messageinfo.vue"),
  },
  {
    path: "/notice",
    component: () => import("../views/Notice.vue"),
  },
  {
    path: "/designer/:desId",
    name: "Designer",
    props: true,
    component: () => import("../views/Designer.vue"),
  },
  {
    path: "/caseexhibition/:desId",
    name: "caseexhibition",
    props: true,
    component: () => import("../views/CaseExhibition.vue"),
  },
  {
    path: "/blogexhibition/:desId",
    name: "blogexhibition",
    props: true,
    component: () => import("../views/BlogExhibition.vue"),
  },
  {
    path: "/Particular/:particularId",
    name: "Particular",
    props: true,
    component: () => import("../views/Particular.vue"),
  },
  {
    path: "/IndexCase/:IndexCaseId",
    name: "IndexCase",
    props: true,
    component: () => import("../views/IndexCase.vue"),
  }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
export const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})