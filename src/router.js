import { createWebHistory, createRouter } from "vue-router";
const routes =  [
  {
    path: "/",
    alias: "/commanders",
    name: "commanders",
    component: () => import("./components/CommandersList")
  },
  {
    path: "/commander/:id",
    name: "commander-details",
    component: () => import("./components/Commander")
  },
  {
    path: "/addCommander",
    name: "add-commander",
    component: () => import("./components/AddCommander")
  },

  {
    path: "/explorers",
    name: "explorers",
    component: () => import("./components/ExplorersList")
  },
  {
    path: "/explorer/:id",
    name: "explorer-details",
    component: () => import("./components/Explorer")
  },
  {
    path: "/addExplorer",
    name: "add-explorer",
    component: () => import("./components/AddExplorer")
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
