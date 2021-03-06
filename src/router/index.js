import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: '/', redirect: '/channels/chat/main' },
  {
    path: "/channels/",
    name: "Chanels",
    component: () =>
      import("../views/main.vue"),
    children: [
      {
        path: 'chat/:id',
        component: () =>
          import("../views/chat.vue"),
      },
      {
        path: 'friends',
        component: () =>
          import("../views/friends.vue"),
      },
      {
        path: 'call/:id',
        component: () =>
          import("../components/call.vue"),
      },
      {
        path: 'groups',
        component: () =>
          import("../views/groups.vue"),
      },
      {
        path: 'groups/call/:id',
        component: () =>
          import("../views/groupsCall.vue"),
      },
      {
        path: 'groups/chat/:id',
        component: () =>
          import("../views/groupsChat.vue"),
      },
      {
        path: 'add/groups',
        component: () =>
          import("../views/addGroups.vue"),
      }
    ],
    meta: { requiresAuth: true },
    redirect: '/channels/chat/main'
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
  history: createWebHashHistory(),
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
