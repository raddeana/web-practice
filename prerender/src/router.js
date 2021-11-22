/**
 * 路由
 * @author Philip
 */
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [{
        path: '/login',
        name: 'login',
        component: () => import('@/pages/login.vue')
    }, {
        path: '/home',
        name: 'home',
        component: () => import('@/pages/home.vue')
    }]
});
