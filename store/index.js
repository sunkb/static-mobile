import Vue from 'vue'
import Vuex from 'vuex'
import groupBuy from './modules/group_buy_store'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
  },
  mutations: {
  },
  modules: {
    groupBuy
  }
})

export default store