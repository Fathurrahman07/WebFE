import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/Login.vue"
import Register from "../components/Register.vue";
import Home from "../components/Home.vue";
import CreateRecipe from "../components/CreateRecipe.vue";
import UpdateRecipe from "@/components/UpdateRecipe.vue";
import Profile from "@/components/Profile.vue";
import Ingredients from "@/components/Ingredients.vue"
import Category from "@/components/Category.vue"
import Vegetarian from "@/components/Vegetarian.vue"
import MyRecipe from "@/components/MyRecipe.vue"

const routes = [
  {
    path: "/",
    component: Home,
  },

  {
    path: "/register",
    component: Register,
  },

  {
    path: "/login",
    component: Login,
  },

  {
    path: "/createrecipe",
    component: CreateRecipe,
  },

  {
    path: "/updaterecipe",
    component: UpdateRecipe,
  },

  {
    path: "/profile",
    component: Profile,
  },

  {
    path: "/ingredients",
    component: Ingredients,
  },

  {
    path: "/category",
    component: Category,
  },

  {
    path: "/vegetarian",
    component: Vegetarian,
  },

  {
    path: "/myrecipe",
    component: MyRecipe,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
