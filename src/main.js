//src/main.js
import { createApp } from "vue";
import App from "./App.vue";
import "./main.css";
import VueGoogleMaps from "@fawmi/vue-google-maps";

// Since every component imports their Bootstrap functionality,
// the following line is not necessary:
// import 'bootstrap'

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

const app = createApp(App);

app.config.globalProperties = {
  lang: "SK",
  changeLang(str) {
    if (this.lang != str && this.lang == "SK") {
      this.lang = "EN";
    } else if (this.lang != str && this.lang == "EN") {
      this.lang = "SK";
    }
    return str.slice(0, 1).toUpperCase() + str.slice(1);
  },
};

app
  .use(VueGoogleMaps, {
    load: {
      key: "AIzaSyA7jYZbgogq9KSvFsiiNkgDDepgTcIil8g",
    },
  })
  .mount("#app");
