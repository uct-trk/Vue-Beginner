import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/index.vue";
import Direct from "../views/direct/index.vue";
import Explore from "../views/explore/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/direct",
    name: "Direct",
    component: Direct,
  },
  {
    path: "/explore",
    name: "Explore",
    component: Explore,
  },
  {
    path: "/profile",
    name: "Profile",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/profile"),
    children: [
      {
        path: "",
        name: "ProfilePost",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/profile/post"),
      },
      {
        path: "igtv",
        name: "ProfileIGTV",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/profile/igtv"),
      },
      {
        path: "save",
        name: "ProfileSave",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/profile/save"),
      },
      {
        path: "tag",
        name: "ProfileTag",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/profile/tag"),
      },
    ]
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
