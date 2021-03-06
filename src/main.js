import Vue from "vue";

import "./registerServiceWorker";
import "./plugins/vuetify";
import store from "./store";
import router from "./router";

import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
