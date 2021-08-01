const aos = {
  beforeMount(el: HTMLElement, binding: any): void {
    el.setAttribute('data-aos', binding.value);
  },
};

const aosOnce = {
  beforeMount(el: HTMLElement, binding: any): void {
    el.setAttribute('data-aos-once', binding.value);
  },
};

export { aos, aosOnce };
