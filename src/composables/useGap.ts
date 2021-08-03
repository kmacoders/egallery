import { Ref, ref, watch } from 'vue';
import { IGallery } from '@/types/gallery';
import { IBreakpoints } from '@/types/general/responsive';

interface IGap {
  rowGap: Ref<number>;
  columnGap: Ref<number>;
}

/*
 * Get rowGap, columnGap by screen size
 */
export default function useGap(
  breakpoints: IBreakpoints,
  gallery: Ref<IGallery>,
): IGap {
  const {
    xs,
    sm,
    md,
    lg,
    xl,
  } = breakpoints;
  const rowGap = ref<number>(10);
  const columnGap = ref<number>(10);

  watch([xs, sm, md, lg, xl], () => {
    if (xs.value) {
      rowGap.value = gallery.value.rowGap.xs;
      columnGap.value = gallery.value.columnGap.xs;
    }

    if (sm.value) {
      rowGap.value = gallery.value.rowGap.sm;
      columnGap.value = gallery.value.columnGap.sm;
    }

    if (md.value) {
      rowGap.value = gallery.value.rowGap.md;
      columnGap.value = gallery.value.columnGap.md;
    }

    if (lg.value) {
      rowGap.value = gallery.value.rowGap.lg;
      columnGap.value = gallery.value.columnGap.lg;
    }

    if (xl.value) {
      rowGap.value = gallery.value.rowGap.xl;
      columnGap.value = gallery.value.columnGap.xl;
    }
  }, { immediate: true });

  return {
    rowGap,
    columnGap,
  };
}
