import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

/// a global variable 
/*
Vue.prototype.$globalAppConfig = {
  title: " Todo list app in vuejs/TS ? ",
  apiData: "http://localhost:5151/todos/"
} */

 

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
