import Login from "./pages/auth/Login";
import NotFound from "./pages/commons/NotFound";
import DashView from "./pages/core/DashView";
import EmptyRouterView from "./pages/core/EmptyRouterView";
// Routes
const embeddingRoutes = [
  {
    path: "/dashboard",
    component: EmptyRouterView,
    name: "仪表盘",
    meta: {
      icon: "dash",
      hidden: false,
      breadcrumb: false
    },
    children: [
      {
        path: "",
        component: () => import("./pages/dashboard/Dash1"),
        name: "dash01",
        meta: {
          icon: "",
          description: "我怎么知道"
        }
      },
      {
        path: "dash1",
        component: () => import("./pages/dashboard/Dash2"),
        name: "dash02",
        meta: {
          icon: "",
          description: "我怎么知道"
        }
      }
    ]
  },
  {
    path: "/dbj",
    component: EmptyRouterView,
    name: "大保健",
    meta: {
      icon: "dash",
      hidden: false,
      breadcrumb: false
    },
    children: [
      {
        path: "",
        component: () => import("./pages/dashboard/Dash1"),
        name: "dash03",
        meta: {
          icon: "",
          description: "我怎么知道"
        }
      },
      {
        path: "dash04",
        component: () => import("./pages/dashboard/Dash2"),
        name: "dash05",
        meta: {
          icon: "",
          description: "我怎么知道"
        }
      }
    ]
  }
];
const routes = [
  {
    path: "/login",
    component: Login
  },
  {
    path: "/",
    meta: {
      requiresAuth: true
    },
    component: DashView,
    children: []
  },
  {
    // not found handler
    path: "*",
    component: NotFound
  }
];

routes[routes.length - 2].children = routes[routes.length - 2].children.concat(
  embeddingRoutes
);
export default routes;
