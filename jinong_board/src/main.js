import { createApp } from "vue"
import App from "./App.vue"
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

import router from "./routes/index.js"
import axios from "axios"


const app = createApp(App).use(router)

app.config.globalProperties.$axios = axios ;

app.mount("#app")

