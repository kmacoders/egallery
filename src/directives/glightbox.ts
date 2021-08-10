const glightboxTitle = {
  beforeMount(el: HTMLElement, binding: any): void {
    el.setAttribute('data-title', binding.value);
  },
};

const glightboxDescription = {
  beforeMount(el: HTMLElement, binding: any): void {
    el.setAttribute('data-description', binding.value);
  },
};

const glightboxType = {
  beforeMount(el: HTMLElement, binding: any): void {
    el.setAttribute('data-type', binding.value);
  },
};

export {
  glightboxTitle,
  glightboxDescription,
  glightboxType,
};
