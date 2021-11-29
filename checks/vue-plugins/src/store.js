/**
 * store
 * @author Philip
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        sdc: {
            id: Math.random(),
            title: Math.random(),
            content: Math.random()
        }
    }
});