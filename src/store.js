import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const BASE_URL = "";
const LOGIN_URL = `${BASE_URL}/authenticate`;
const CREATE_USER_URL = `${LOGIN_URL}/create`;

const INITIAL_STATE = {
  cookie: "",
  isUserLoggedIn: true,
  user: null
};

export default new Vuex.Store({
  state: { ...INITIAL_STATE },
  mutations: {
    logUserIn(state, payload) {
      state.cookie = payload.cookie;
      state.isUserLoggedIn = true;
      state.user = payload;
      // console.log(state);
    },
    logUserOut(state) {
      state.cookie = INITIAL_STATE.cookie;
      state.isUserLoggedIn = INITIAL_STATE.isUserLoggedIn;
      state.user = INITIAL_STATE.user;
    }
  },
  actions: {
    createUser({ commit }, payload) {
      // return commit("logUserIn", { cookie: "queijo" });
      fetch(CREATE_USER_URL, { method: "POST", body: payload })
        .then(r => r.json())
        .then(r => commit("logUserIn", r));
    },
    logUserIn({ commit }, payload) {
      // return commit("logUserIn", { cookie: "queijo" });
      fetch(LOGIN_URL, { method: "POST", body: payload })
        .then(r => r.json())
        .then(r => commit("logUserIn", r));
    },
    logUserOut({ commit }) {
      commit("logUserOut");
    }
  }
});
