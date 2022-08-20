import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'sweetalert2/dist/sweetalert2.min.css';

createApp(App).use(store).use(router).mount('#app')
app.use(VueSweetalert2);