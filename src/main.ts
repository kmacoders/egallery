import { createApp } from 'vue';
import store from '@/stores';
import './styles/main.scss';
import App from './App.vue';

createApp(App).use(store).mount('#app');
 console.log(import.meta.env);
