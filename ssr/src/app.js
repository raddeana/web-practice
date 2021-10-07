let Vue = require("vue/dist/vue.esm.js");
Vue = Vue.default || Vue;
const createRouter = require("./router")
const { sync } = require('vuex-router-sync');

module.exports = (context) => {
    const router = createRouter();
    const createStore = require('./store');
    const store = createStore();

    sync(store, router)

    const app =  new Vue({
        router,
        data:{
            message:"Hello,Vue SSR!",
            text1: '',
            text2: ''
        },
        template:`
            <div>
                <h1>{{ message }}</h1>
                <p>{{text1}}</p>
                <p>{{text2}}</p>
                <ul>
                    <li>
                        <router-link to="/">home</router-link>
                    </li>
                    <li>
                        <router-link to="/about">about</router-link>
                    </li>
                </ul>
                <router-view></router-view>
            </div>
        `,
        asyncData ({ store, route }) {
            return new Promise((resolve, reject) => {
                resolve()
            });
        },
    });
    return {
        app,
        router
    }
}