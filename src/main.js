import { createApp } from "vue";
import "./style/style.css";
import "./style/icons.css";
import App from "./App.vue";
import router from "./router/router.js";

import { createI18n } from "vue-i18n";
import { translations } from "./translations";

const i18n = createI18n({
  locale: ["en", "fr", "ar"].includes(navigator.language),
  messages: translations,
});

const app = createApp(App).use(router).use(i18n).mount("#app");
