import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/our_company",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/apply_for_treatment",
    name: "treatmentApply",
    component: () =>
      import(
        /* webpackChunkName: "treatment" */ "../views/ApplyForTreatment.vue"
      )
  },
  {
    path: "/what_we_offer",
    name: "whatWeOffer",
    component: () =>
      import(/* webpackChunkName: "offer" */ "../views/WhatWeOffer.vue")
  },
  {
    path: "/innovation",
    name: "innovation",
    component: () =>
      import(/* webpackChunkName: "innovation" */ "../views/TheInnovation.vue")
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
      import(/* webpackChunkName: "contactUs" */ "../views/ContactUs.vue")
  },
  {
    path:"/medical-institute",
    name: "medicalInstite",
    component: () =>
      import(/* webpackChunkName: "medical" */ "../views/MedicalInstitute.vue")
  },
  {
    path:"/research-publication",
    name: "researchPublication",
    component: () =>
      import(
        /* webpackChunkName: "research" */ "../views/ResearchPublication.vue"
      )
  },
  {
    path:"/news",
    name: "newsMedia",
    component: () =>
      import(/* webpackChunkName: "media" */ "../views/NewsMedia.vue")
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
