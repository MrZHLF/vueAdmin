import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Customers from "@/components/Customers";
import About from "@/components/About";
import Add from "@/components/Add";
import CustomerDetails from "@/components/CustomerDetails";
import Edit from "@/components/Edit";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "customers",
      component: Customers
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/Add",
      name: "Add",
      component: Add
    },
    {
      path: "/customer/:id",
      name: "customer",
      component: CustomerDetails
    },
    {
      path: "/edit/:id",
      name: "edit",
      component: Edit
    }
  ],
  mode: "history"
});
