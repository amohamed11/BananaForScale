import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    imageLoded: false
  },
  mutations: {
    SET_IMAGE_LOADED(state) {
      state.imageLoded = true
    }
  },
  actions: {},
  modules: {}
})
