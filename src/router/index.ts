import { createRouter, createWebHistory } from "vue-router";

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
  ],
});

export default router;
