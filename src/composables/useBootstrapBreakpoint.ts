import { useBreakpoints } from '@vueuse/core';
import { IBreakpoints } from '@/types/general/responsive';

export default function useBootstrapBreakpoint(): IBreakpoints {
  const breakpoints = useBreakpoints({
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  });

  const xs = breakpoints.smaller('sm');
  const sm = breakpoints.between('sm', 'md');
  const md = breakpoints.between('md', 'lg');
  const lg = breakpoints.between('lg', 'xl');
  const xl = breakpoints.greater('xl');

  return {
    xs,
    sm,
    md,
    lg,
    xl,
  };
}
