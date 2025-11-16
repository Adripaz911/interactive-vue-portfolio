import { createApp } from "vue";
import App from "./App.vue";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import NotyfPlugin from "./plugins/notyf";
import "./style.css";

// Register GSAP plugin globally (only once)
gsap.registerPlugin(ScrollTrigger);

const app = createApp(App);
app.use(NotyfPlugin);
app.mount("#app");
