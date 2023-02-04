import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/ContactView.vue"),
    },
    {
      path: "/resume",
      name: "resume",
      component: () => import("../views/ResumeView.vue"),
    },
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/feed",
      name: "feed",
      component: () => import("../views/FeedView.vue"),
    },
  ],
});

export default router;
