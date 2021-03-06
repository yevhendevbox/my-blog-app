import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import PrimeVue from "primevue/config";

import "primevue/resources/themes/saga-blue/theme.css";
import "/node_modules/primeflex/primeflex.css";
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css";
import "./styles.css";

import firebaseApp from "./firebase/firebaseConfig";

const firebaseFromConfig = firebaseApp;

createApp(App).use(store).use(router).use(PrimeVue).mount("#app");
