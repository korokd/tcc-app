import Vue from "vue";
import Router from "vue-router";

import Home from "@/views/Home";
import Profile from "@/views/Profile";
import Connections from "@/views/Connections";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      name: "home",
      // component: () => import(/* webpackChunkName: "Home" */ Home)
      component: Home
    },
    {
      path: "/search",
      name: "search",
      // component: () => import(/* webpackChunkName: "Connections" */ Connections)
      component: Connections
    },
    {
      path: "/profile",
      name: "profile",
      // component: () => import(/* webpackChunkName: "Profile" */ Profile)
      component: Profile
    }
  ]
});
