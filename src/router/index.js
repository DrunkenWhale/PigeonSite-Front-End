import { createRouter, createWebHistory } from "vue-router";

const routes = [{
        path: "/login",
        name: "Login",
        component: () =>
            import ("../views/Login.vue"),
    },
    {
        path: "/register",
        name: "Register",
        component: () =>
            import ("../views/Register.vue"),
    },
    {
        path: "/upload",
        name: "Upload",
        component: () =>
            import ("../views/Upload.vue"),
    }, {
        path: "/download",

        name: "Download",
        component: () =>
            import ("../views/Download.vue")
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;