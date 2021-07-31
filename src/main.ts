import { createApp } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import store from '@/stores';
import './styles/main.scss';
import App from './App.vue';

AOS.init();

createApp(App).use(store).mount('#app');
