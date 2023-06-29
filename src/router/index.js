import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta:{layout:"MainLayout"}
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import("../views/AboutView.vue"),
      meta:{layout:"AboutLayout"}
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
        import("../views/Contact.vue")
  },
  {
    path: "/blog",
    name: "blogs",
    component: () =>
      import("../views/Blog.vue"),
      meta:{layout:"BlogLayout"}
  },
  {
    path: "/blog/:id",
    name: "blog",
    component: () =>
      import("../views/SingleBlog.vue"),
  },
  {
    path: "/places",
    name: "places",
    component: () =>
        import("../views/Places.vue")
  },
  {
    path: "/places/:id",
    name: "place",
    component: () =>
      import("../views/SinglePlace.vue"),
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
