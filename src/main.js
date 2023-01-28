import { createApp } from "vue";
import "./style/style.css";
import App from "./App.vue";
import router from "./router/router.js";

// Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faFacebookF,
  faGithub,
  faLinkedinIn,
  faTwitter,
  faTwitch,
  faDiscord,
  faSteam,
  faInstagram,
  faRedditAlien,
  faBattleNet,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane, faEnvelope } from "@fortawesome/free-solid-svg-icons";

library.add(
  faFacebookF,
  faGithub,
  faLinkedinIn,
  faTwitter,
  faTwitch,
  faDiscord,
  faSteam,
  faInstagram,
  faRedditAlien,
  faBattleNet,

  faPaperPlane,
  faEnvelope
);

const app = createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
