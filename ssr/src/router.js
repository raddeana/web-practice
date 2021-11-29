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
            component: () => import('./pages/welcome.vue')
        }, {
            path: '/login',
            component: () => import('./pages/login.vue')
        }, {
            path: '/product/:id',
            component: () => import('./pages/product.vue')
        }]
    });
}