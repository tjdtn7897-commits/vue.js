import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/watch",
      name: "watchTest",
      component: () => import("../views/WatchTest.vue"),
    },
    {
      path: "/lifecycle",
      name: "lifecycleHook.vue",
      component: () => import("../views/LifecycleHook.vue"),
    },
    {
      path: "/parentComp",
      name: "parentCompApp",
      component: () => import("../views/ParentComponentApp.vue"),
    },
    {
      path: "/todo",
      name: "todoList",
      component: () => import("../views/TodoList.vue"),
    },
    {
      path: "/slot",
      name: "commonSlot",
      component: () => import("../views/CommonSlot.vue"),
    },
  ],
});

export default router;
