import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    UserStatus: {
      
    }
  },
  mutations: {
    Value: function(state,newVal){
      state.UserStatus = newVal
    }
  },
  actions: {
  },
  modules: {
  }
})
