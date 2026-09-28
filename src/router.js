import { createRouter, createWebHistory } from "vue-router";

import HomeView from "./views/HomeView.vue";
import DatenschutzView from "./views/DatenschutzView.vue";
import ImpressumView from "./views/ImpressumView.vue";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      component: HomeView,
    },
    {
      path: "/datenschutz",
      component: DatenschutzView,
    },
    {
      path: "/impressum",
      component: ImpressumView,
    },
  ],
});

export default router;
