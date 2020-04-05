import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title:'好玩的小工具站',
    toast_hidden:true
  },
  mutations: {
    title(state,{ title }){
      state.title = title
    },
    toast_hidden(state,{ hidden }){
      state.toast_hidden = hidden
    }
  },
  actions: {
  },
  modules: {
  }
})
