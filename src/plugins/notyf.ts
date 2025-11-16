import type { App } from "vue"; // type-only import
import { Notyf } from "notyf";
import "notyf/notyf.min.css";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $notyf: Notyf;
  }
}

export default {
  install: (app: App) => {
    const notyf = new Notyf({
      duration: 3000,
      position: { x: "right", y: "top" },
      ripple: true,
      dismissible: true,
    });
    app.config.globalProperties.$notyf = notyf;
  },
};
