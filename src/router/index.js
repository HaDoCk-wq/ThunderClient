import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/chat",
    name: "Chat",
    component: () =>
      import("../views/chat.vue"),
  },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
