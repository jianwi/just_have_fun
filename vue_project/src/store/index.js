import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title:'好玩的小工具站'
  },
  mutations: {
    title(state,{ title }){
      state.title = title
    }
  },
  actions: {
  },
  modules: {
  }
})
