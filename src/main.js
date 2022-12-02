//src/main.js
import { createApp } from "vue";
import App from "./App.vue";
import BootstrapVue3 from "bootstrap-vue-3";
import "./main.css";

// Since every component imports their Bootstrap functionality,
// the following line is not necessary:
// import 'bootstrap'

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

library.add(faUserSecret);

const app = createApp(App);
app.use(BootstrapVue3);
createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
