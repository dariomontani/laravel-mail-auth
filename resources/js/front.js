
require('./bootstrap');

window.Vue = require('vue');

import App from "./views/App";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
    ]
});


const app = new Vue({
    el: '#app',
    render: h => h(App),
    router
});
