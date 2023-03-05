import { str } from "@/add";

import { createApp } from "vue";
import App from "@/App.vue";
import router from "./routes";
import { createPinia } from "pinia";

import './style.css';

createApp(App)
.use(router)
.use(createPinia())
.mount("#app");

console.log('Hello Webpack!');
console.log(str);