import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import { createUser, updateUser, getUsers } from "@/service";

Vue.use(Vuex);

const INITIAL_STATE = {
  isUserLoggedIn: false,
  user: null
};

export default new Vuex.Store({
  state: { ...INITIAL_STATE },
  plugins: [createPersistedState()],
  mutations: {
    logUserIn(state, payload) {
      payload.skills = payload.skills.sort(
        (v1, v2) => (v1.name > v2.name ? 1 : v2.name > v1.name ? -1 : 0)
      );
      state.isUserLoggedIn = true;
      state.user = payload;
      // console.log(state);
    },
    logUserOut(state) {
      state.isUserLoggedIn = INITIAL_STATE.isUserLoggedIn;
      state.user = INITIAL_STATE.user;
    },
    updateUser(state, payload) {
      payload.skills = payload.skills.sort(
        (v1, v2) => (v1.name > v2.name ? 1 : v2.name > v1.name ? -1 : 0)
      );
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
