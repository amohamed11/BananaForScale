import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"
import VueAxios from "vue-axios"

Vue.use(Vuex)
Vue.use(VueAxios, axios)

Vue.axios.defaults.baseURL = process.env.VUE_APP_API_URL

const headers = {
  "Content-Type": "application/json"
}

export default new Vuex.Store({
  state: {
    image: null,
    analysis: null
  },
  mutations: {
    SET_IMAGE(state, image) {
      state.image = image
    },
    SET_ANALYSIS(state, payload) {
      state.analysis = payload
    }
  },
  actions: {
    async analyzeImage(context) {
      await axios
        .post("/analyze", context.state.image)
        .then(response => {
          console.log("image analyzed")
          context.commit("SET_ANALYSIS", response.data)
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  modules: {}
})
