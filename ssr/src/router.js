let vueRouter = require("vue-router");
let Vue = require("vue/dist/vue.esm.js");

vueRouter = vueRouter.default || vueRouter;
Vue = Vue.default || Vue;

Vue.use(vueRouter);

module.exports = () => {
    return new vueRouter({
        mode:"history",
        routes:[
            {
                path:"/",
                component:{
                    template:`<h1>this is home page</h1>`
                },
                name:"home"
            },
            {
                path:"/about",
                component:{
                    template:`<h1>this is about page</h1>`
                },
                name:"about"
            }
        ]
    })
}