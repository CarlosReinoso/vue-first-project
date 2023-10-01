import { createRouter, createWebHistory } from "vue-router";
import TodoView from "../views/TodoView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "todoHome",
      component: TodoView,
    },
    {
      path: "/docs",
      name: "doc",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/todo",
      name: "todo",
      component: () => import("../views/TodoView.vue"),
    },
  ],
});

export default router;
