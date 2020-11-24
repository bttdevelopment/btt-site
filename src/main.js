import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Buefy from "buefy";
import "./assets/mycss.scss";

createApp(App)
  .use(router, Buefy)
  .mount("#app");
