/**
 * 应用路由配置
 * @author Philip
 */
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export function createRouter () {
    return new Router({
        mode: 'history',
        routes: [{ 
            path: '/',
            component: () => import('./components/welcome.vue')
        }, {
            path: '/login',
            component: () => import('./components/login.vue')
        }, {
            path: '/product/:id',
            component: () => import('./components/product.vue')
        }]
    });
}