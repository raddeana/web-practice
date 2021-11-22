const Vue = require('vue');
const Vuex = require('vuex');

Vue.use(Vuex)

module.exports = function createStore () {
  return new Vuex.Store({
    state: {
      items: {}
    },
    mutations: {
      setItem (state, { id, item }) {
        Vue.set(state.items, id, item)
      }
    },
    actions: {
      fetchItem ({ commit }, id) {
        // `store.dispatch()` 会返回 Promise，
        // 以便我们能够知道数据在何时更新
        return new Promise((resolve, reject) => {
            resolve()
            commit('setItem', { id, item: { name: '裂空大兽', id, address: '空岛' } })
        })
      }
    }
  })
}