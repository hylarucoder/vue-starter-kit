import Vue from "vue";
import VueRouter from "vue-router";
import Element, { MessageBox, Notification, Message } from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import routes from "./routes";
import store from "./store";
import App from "./App";
// import { FedCommons } from "./components/fed-commons";

Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
Vue.use(Element, { size: "small" });
Vue.use(VueRouter);
// FedCommons.install(Vue);

// Routing logic
let router = new VueRouter({
  routes: routes,
  mode: "hash",
  scrollBehavior: function(to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 };
  }
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router: router,
  store: store,
  components: { App },
  template: "<App/>"
});
