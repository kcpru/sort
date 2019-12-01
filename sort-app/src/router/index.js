import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/quicksort",
    name: "quicksort",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/Quicksort.vue")
  },
  {
    path: "/mergesort",
    name: "mergesort",
    component: () => import("../views/Mergesort.vue")
  },
  {
    path: "/selectionsort",
    name: "selectionsort",
    component: () => import("../views/Selectionsort.vue")
  },
  {
    path: "/insertionsort",
    name: "insertionsort",
    component: () => import("../views/Insertionsort.vue")
  },
  {
    path: "/bubblesort",
    name: "bubblesort",
    component: () => import("../views/Bubblesort.vue")
  },
  {
    path: "/bucketsort",
    name: "bucketsort",
    component: () => import("../views/Bucketsort.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
