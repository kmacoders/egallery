import { createApp } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import store from '@/stores';
import { aos, aosOnce } from '@/directives/aos';
import './styles/main.scss';
import App from './App.vue';
import { qsa } from './helpers/dom';

export default class EGallery {
  el: HTMLElement;

  constructor(el: HTMLElement) {
    this.el = el;
    this.setup();
  }

  setup(): void {
    AOS.init();
    const app = createApp(App);
    app
      .use(store)
      .directive('aos', aos)
      .directive('aos-once', aosOnce)
      .mount(this.el);
  }
}

const allGallery = qsa<HTMLElement>('.egallery');
allGallery.forEach((el) => {
  const newEGallery = new EGallery(el);
});
