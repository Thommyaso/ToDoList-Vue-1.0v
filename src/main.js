import './main.scss';

import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import VuexStore from '@/stores/';

createApp(App)
    .use(VuexStore)
    .use(router)
    .mount('#app');
