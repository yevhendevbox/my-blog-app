// import { setBlockTracking } from "vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: {
      title: "About",
    },
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: () => import("../blogs/view/Blogs.vue"),
    meta: {
      title: "Blogs",
    },
  },
  {
    path: "/create-post",
    name: "CreatePost",
    component: () => import("../create_post/view/CreatePost.vue"),
    meta: {
      title: "Create post",
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../login/view/Login.vue"),
    meta: {
      title: "Login",
    },
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../register/view/Register.vue"),
    meta: {
      title: "Register",
    },
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: () => import("../forgot_password/view/ForgotPassword.vue"),
    meta: {
      title: "Forget password",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to) => {
  document.title = `${to.meta.title} | YevhenD`;
});

export default router;
