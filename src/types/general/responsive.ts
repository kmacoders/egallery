import { Ref } from 'vue';

/*
 * Bootstrap 4 breakpoint custom from useBreakpoints ( VueUse )
 */
export interface IBreakpoints {
  xs: Ref<boolean>;
  sm: Ref<boolean>;
  md: Ref<boolean>;
  lg: Ref<boolean>;
  xl: Ref<boolean>;
}
