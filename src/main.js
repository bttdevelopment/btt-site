import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/mycss.scss";
import VideoBackground from "vue-responsive-video-background-player";

createApp(App)
  .use(router)
  .component("video-background", VideoBackground)
  .mount("#app");
