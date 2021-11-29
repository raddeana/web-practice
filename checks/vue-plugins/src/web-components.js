/**
 * web组件注册
 * @author Philip
 */
import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';
import item from './components/item.vue';

customElements.define('item-wc', wrap(Vue, item));