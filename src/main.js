import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { Button} from 'buefy'
import "./assets/mycss.scss";
import VideoBackground from "vue-responsive-video-background-player";

createApp(App)
  .use(router, Button)
  .component("video-background", VideoBackground)
  .mount("#app");
