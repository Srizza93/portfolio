import "../styles/style.css";
import mount from "./mount";
import { createApp } from "vue";
import App from "../vue/App.vue";

document.body.appendChild(mount());

createApp(App).mount(".app-root");