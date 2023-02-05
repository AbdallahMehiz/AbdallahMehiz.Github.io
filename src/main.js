import { createApp } from "vue";
import "./style/style.css";
import "./style/icons.css";
import App from "./App.vue";
import router from "./router/router.js";

const app = createApp(App).use(router).mount("#app");
