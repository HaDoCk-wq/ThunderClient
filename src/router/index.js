import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: '/', redirect: '/channels/' },
  {
    path: "/channels/",
    name: "Chanels",
    component: () =>
      import("../views/main.vue"),
    children: [
      {
        path: 'chat',
        component: () =>
          import("../views/chat.vue"),
      },
      {
        path: 'friends',
        component: () =>
          import("../views/friends.vue"),
      }
    ],
    meta: { requiresAuth: true }
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import("../views/login.vue"),
    meta: { requiresAuth: false }

  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import("../views/register.vue"),
    meta: { requiresAuth: false }

  },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated()) next({ name: 'Login' })
  else if (!to.meta.requiresAuth && isAuthenticated()) next(from)
  else next()
})


function isAuthenticated() {
  if (window.localStorage.getItem("token") && window.localStorage.getItem("token") != "") {
    return true;
  } return false;
}

export default router;
