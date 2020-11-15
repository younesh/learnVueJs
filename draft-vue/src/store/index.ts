import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    globalCounter : 0,
    fruits : [],
    posts: []
  },
  mutations: {
    increment : (state) => {
      state.globalCounter++;
    },
    decrement :(state) => {
      state.globalCounter--;
    },
  },
  actions: {
    actionIncrement : (state) => {
      // this.commit("increment");
      state.commit("increment")
    }
  },
  modules: {},
  getters: {

  }
});
