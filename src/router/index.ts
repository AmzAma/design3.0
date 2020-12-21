import { createRouter, createWebHashHistory } from "vue-router";

// 1. Define route components.
// These can be imported from other files



// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  {
    path: "/",
    redirect: "/home",
    component: () => import("../views/Home.vue"),
    children: [
      {
        path: "/home",
        component: () => import("../views/Home.vue")
      },
      {
        path: "/index",
        component: () => import("../views/Index.vue")
      },
      {
        path: "/design",
        component: () => import("../views/Design.vue")
      },
      {
        path: "/message",
        component: () => import("../views/Message.vue"),
      },
      {
        path: "/mine",
        component: () => import("../views/Mine.vue"),
      }
    ]
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