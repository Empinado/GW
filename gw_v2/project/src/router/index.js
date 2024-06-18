import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import GuidePage from "@/views/GuidePage.vue";
import ConstructorPage from "@/views/ConstructorPage.vue";
import Error404Page from "@/views/Error404Page.vue";
import TrainerPage from "@/views/TrainerPage.vue";

const routes = [
  { path: "/", name: "HomePage", component: HomePage },
  { path: "/GuidePage", name: "GuidePage", component: GuidePage },
  {
    path: "/ConstructorPage",
    name: "ConstructorPage",
    component: ConstructorPage,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "Error404Page",
    component: Error404Page,
  },
  {
    path: "/TrainerPage",
    name: "TrainerPage",
    component: TrainerPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
