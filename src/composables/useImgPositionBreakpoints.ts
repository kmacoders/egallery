import { computed, ComputedRef } from 'vue';
import { IGridLocation, IImage } from '@/types/images';
import { IBreakpoints } from '../types/general/responsive';

export default function useImgPositionBreakpoints(
  breakpoints: IBreakpoints,
): ComputedRef<(image: IImage) => IGridLocation> {
  const {
    xs,
    sm,
    md,
    lg,
    xl,
  } = breakpoints;

  const imgPositionBreakpoints = computed(() => {
    if (xs.value) {
      return (image: IImage): IGridLocation => image.layout.xs;
    }
    if (sm.value) {
      return (image: IImage): IGridLocation => image.layout.sm;
    }
    if (md.value) {
      return (image: IImage): IGridLocation => image.layout.md;
    }
    if (lg.value) {
      return (image: IImage): IGridLocation => image.layout.lg;
    }
    if (xl.value) {
      return (image: IImage): IGridLocation => image.layout.xl;
    }

    return (image: IImage): IGridLocation => image.layout.xs;
  });

  return imgPositionBreakpoints;
}
