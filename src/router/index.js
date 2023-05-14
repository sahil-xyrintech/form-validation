import { createRouter, createWebHistory } from "vue-router";
import VeeValidate from "../VeeValidate.vue";
import Vuelidate from "../Vuelidate.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: "/",
    //   name: "home",
    //   component: HomeView,
    // },
    {
      path: "/vee-validate",
      name: "Vee Validate",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../VeeValidate.vue"),
    },
    {
      path: "/vuelidate",
      name: "Vuelidate",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../Vuelidate.vue"),
    },
  ],
});

export default router;
