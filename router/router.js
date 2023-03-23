import { createRouter, createWebHistory } from "vue-router";
import App from "@/App";

const routes = [
  {
    path: "/",
    redirect: "/SK",
  },
  {
    path: "/EN",
    name: "Main",
    component: App,
  },
  {
    path: "/SK",
    name: "Main",
    component: App,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
