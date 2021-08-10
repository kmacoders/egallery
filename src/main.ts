import { createApp } from 'vue';
import AOS from 'aos';
import store from '@/stores';
import { aos, aosOnce } from '@/directives/aos';
import { glightboxTitle, glightboxDescription, glightboxType } from './directives/glightbox';
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
      .directive('glightbox-title', glightboxTitle)
      .directive('glightbox-description', glightboxDescription)
      .directive('glightbox-type', glightboxType)
      .mount(this.el);
  }
}

const allGallery = qsa<HTMLElement>('.egallery');
allGallery.forEach((el) => {
  const newEGallery = new EGallery(el);
});
