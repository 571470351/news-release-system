import { createStore } from 'vuex'

export default createStore({
  state: {
    isGeterRouter: false,
  },
  getters: {
  },
  mutations: {
    changeGetterRouter(state,value) {
      state.isGeterRouter = value
    }
  },
  actions: {
  },
  modules: {
  }
})
