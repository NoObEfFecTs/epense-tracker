import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Overview.vue";
import Add from "@/components/Add.vue";
import Edit from "@/components/Edit.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/Add", component: Add },
  { path: "/Edit", component: Edit },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
