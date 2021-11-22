/**
 * 
 * @author Philip
 */
const Vue = require('vue');
const App = require('./App.vue');
const createStore = require('./store');
const createRouter = require('./router');
const { sync } = require('vuex-router-sync');

module.exports = () => {
    const router = createRouter();
    const store = createStore();

    sync(store, router)

    const app =  new Vue({
        router,
        render: h => h(App),
        asyncData () {
            return new Promise((resolve) => {
                setTimeout(function () {
                    resolve();
                }, 300);
            });
        },
    });

    return {
        app,
        store,
        router
    };
}