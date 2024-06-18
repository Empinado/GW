import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/styles/styles.sass";
import "./assets/styles/variables.sass";
import "./assets/styles/mixins.sass";

createApp(App).use(store).use(router).mount("#app");
