import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "home",
      component: () => import("@/pages/Home.tsx"),
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("@/pages/Profile.tsx"),
    },
    {
      path: "/403",
      name: "403",
      component: () => import("@/pages/403.tsx"),
    },
    {
      path: "/404",
      name: "404",
      component: () => import("@/pages/404.tsx"),
    },
  ],
})

export default router
