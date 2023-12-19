import {createRouter, createWebHistory} from "vue-router"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            // component: PageHome,
            component: () => import("./pages/Home.tsx"),
        },
    ],
})

export default router
