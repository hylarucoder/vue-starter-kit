import {createApp} from 'vue'
import App from './App'
import store from './store'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';


const app = createApp(App)
app.use(Vant)
app.use(router)
app.use(store)
app.mount('#app')
