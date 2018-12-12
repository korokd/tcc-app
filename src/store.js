import Vue from "vue";
import Vuex from "vuex";

import { createUser, updateUser, getUsers } from "@/service";

Vue.use(Vuex);

const INITIAL_STATE = {
  isUserLoggedIn: false,
  user: null
};

export default new Vuex.Store({
  state: { ...INITIAL_STATE },
  mutations: {
    logUserIn(state, payload) {
      state.isUserLoggedIn = true;
      state.user = payload;
      // console.log(state);
    },
    logUserOut(state) {
      state.isUserLoggedIn = INITIAL_STATE.isUserLoggedIn;
      state.user = INITIAL_STATE.user;
    },
    updateUser(state, payload) {
      state.user = payload;
      location.reload();
    }
  },
  actions: {
    createUser({ commit }, payload) {
      createUser(payload).then(r => commit("logUserIn", r));
    },
    updateUser({ commit }, payload) {
      updateUser(payload).then(r => commit("updateUser", r));
    },
    logUserIn({ commit }, { email, password }) {
      getUsers().then(r => {
        const user = r.find(u => u.email === email && u.password === password);
        if (user) {
          commit("logUserIn", user);
        }
      });
    },
    logUserOut({ commit }) {
      commit("logUserOut");
    }
  }
});
