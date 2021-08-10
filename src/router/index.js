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
    component: () => import("../views/About.vue")
  },
  {
    path: "/apply_for_treatment",
    name: "treatmentApply",
    component: () => import("../views/ApplyForTreatment.vue")
  },
  {
    path: "/testimonials",
    name: "testimonials",
    component: () => import("../views/TheTestimonials.vue")
  },
  {
    path: "/treatments",
    name: "treatments",
    component: () => import("../views/TheTreatments.vue")
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/ContactUs.vue")
  },
  {
    path: "/medical-institute",
    name: "medicalInstite",
    component: () => import("../views/MedicalInstitute.vue")
  },
  {
    path:"/research-publication",
    name: "researchPublication",
    component: () => import("../views/ResearchPublication.vue")
  },
  {
    path:"/news",
    name: "news",
    component: () => import("../views/TheNews.vue")
  },
  {
    path:"/media",
    name: "media",
    component: () => import("../views/TheMedia.vue")
  },
  {
    path:"/successful-cases",
    name: "successfulCases",
    component: () => import("../views/SuccessfulCases.vue")
  },
  {
    path:"/what-we-treat",
    name: "whatWeTreat",
    component: () => import("../views/WhatWeTreat.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
