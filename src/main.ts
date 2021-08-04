import { createApp } from 'vue';
import store from '@/stores';
import AOS from 'aos';
import { aos, aosOnce } from '@/directives/aos';
import App from './App.vue';
import './styles/main.scss';
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
