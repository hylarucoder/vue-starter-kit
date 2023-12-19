import {createApp} from "vue"
import {createPinia} from "pinia";
import App from "./App"
import router from "./router"
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';


const pinia = createPinia()

const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(Antd)

// app.use(store)
app.mount("#app")
