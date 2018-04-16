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
        component: EmptyRouterView,
        name: "仪表盘首页",
        meta: {
          icon: "dash",
          description: "这是仪表盘首页"
        },
        children: [
          {
            path: "1-1",
            component: () => import("./pages/dashboard/Dash1"),
            name: "仪表盘1-1",
            meta: {
              icon: "",
              description: "我怎么知道"
            }
          },
          {
            path: "1-2",
            component: () => import("./pages/dashboard/Dash2"),
            name: "仪表盘1-2",
            meta: {
              icon: "",
              description: "我怎么知道"
            }
          }
        ]
      },
      {
        path: "dash1",
        component: EmptyRouterView,
        name: "dash02",
        meta: {
          icon: "",
          description: "我怎么知道"
        },
        children: [
          {
            path: "2-1",
            component: () => import("./pages/dashboard/Dash1"),
            name: "仪表盘2-1",
            meta: {
              icon: "",
              description: "我怎么知道"
            }
          },
          {
            path: "2-2",
            component: () => import("./pages/dashboard/Dash2"),
            name: "仪表盘2-2",
            meta: {
              icon: "",
              description: "我怎么知道"
            }
          }
        ]
      }
    ]
  },
  {
    path: "/products",
    component: EmptyRouterView,
    name: "商品管理",
    meta: {
      icon: "dash",
      hidden: false,
      breadcrumb: false
    },
    children: [
      {
        path: "",
        component: EmptyRouterView,
        name: "商品管理1",
        meta: {
          icon: "",
          description: "我怎么知道"
        },
        children: [
          {
            path: "prod1-1",
            component: () => import("./pages/dashboard/Dash1"),
            name: "商品管理1-1",
            meta: {
              icon: "",
              description: "我怎么知道"
            }
          },
          {
            path: "1-2",
            component: () => import("./pages/dashboard/Dash2"),
            name: "商品管理1-2",
            meta: {
              icon: "",
              description: "我怎么知道"
            }
          }
        ]
      }
    ]
  },
  {
    path: "/shops",
    component: EmptyRouterView,
    name: "店铺管理",
    meta: {
      icon: "dash",
      hidden: false,
      breadcrumb: false
    },
    children: [
      {
        path: "",
        component: EmptyRouterView,
        name: "店铺管理1",
        meta: {
          icon: "",
          description: "我怎么知道"
        },
        children: [
          {
            path: "prod1-1",
            component: () => import("./pages/dashboard/Dash1"),
            name: "店铺管理1-1",
            meta: {
              icon: "",
              description: "我怎么知道"
            }
          },
          {
            path: "1-2",
            component: () => import("./pages/dashboard/Dash2"),
            name: "店铺管理1-2",
            meta: {
              icon: "",
              description: "我怎么知道"
            }
          }
        ]
      }
    ]
  },
  {
    path: "/accounts",
    component: EmptyRouterView,
    name: "用户管理",
    meta: {
      icon: "dash",
      hidden: false,
      breadcrumb: false
    },
    children: [
      {
        path: "",
        component: EmptyRouterView,
        name: "用户管理1",
        meta: {
          icon: "",
          description: "我怎么知道"
        },
        children: [
          {
            path: "prod1-1",
            component: () => import("./pages/dashboard/Dash1"),
            name: "用户管理1-1",
            meta: {
              icon: "",
              description: "我怎么知道"
            }
          },
          {
            path: "1-2",
            component: () => import("./pages/dashboard/Dash2"),
            name: "用户管理1-2",
            meta: {
              icon: "",
              description: "我怎么知道"
            }
          }
        ]
      }
    ]
  },
  {
    path: "/operation_managements",
    component: EmptyRouterView,
    name: "运营管理",
    meta: {
      icon: "dash",
      hidden: false,
      breadcrumb: false
    },

    children: [
      {
        path: "",
        component: EmptyRouterView,
        name: "运营管理1",
        meta: {
          icon: "",
          description: "我怎么知道"
        },
        children: [
          {
            path: "prod1-1",
            component: () => import("./pages/dashboard/Dash1"),
            name: "运营管理1-1",
            meta: {
              icon: "",
              description: "我怎么知道"
            }
          },
          {
            path: "1-2",
            component: () => import("./pages/dashboard/Dash2"),
            name: "运营管理1-2",
            meta: {
              icon: "",
              description: "我怎么知道"
            }
          }
        ]
      }
    ]
  },
  {
    path: "/system_settings",
    component: EmptyRouterView,
    name: "系统设置",
    meta: {
      icon: "dash",
      hidden: false,
      breadcrumb: false
    },
    children: [
      {
        path: "",
        component: EmptyRouterView,
        name: "系统管理1",
        meta: {
          icon: "",
          description: "我怎么知道"
        },
        children: [
          {
            path: "prod1-1",
            component: () => import("./pages/dashboard/Dash1"),
            name: "系统管理1-1",
            meta: {
              icon: "",
              description: "我怎么知道"
            }
          },
          {
            path: "1-2",
            component: () => import("./pages/dashboard/Dash2"),
            name: "系统管理1-2",
            meta: {
              icon: "",
              description: "我怎么知道"
            }
          }
        ]
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
