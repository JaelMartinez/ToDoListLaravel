require("./bootstrap");

import { createApp } from "vue";
import App from "./vue/app.vue";
import "../css/app.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlusSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faPlusSquare, faTrash);

const app = createApp(App); // Crea la instancia de la aplicación
app.component("font-awesome-icon", FontAwesomeIcon); // Registra el componente
app.mount("#app"); // Monta la aplicación
