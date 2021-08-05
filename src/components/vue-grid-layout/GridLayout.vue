<template>
  <div
    class="r-grid-container lightgallery"
    :style="styleObj"
  >
    <slot />
  </div>
</template>
<script lang="ts">
import {
  defineComponent, reactive, watch, toRefs,
} from 'vue';
import lightGallery from 'lightgallery';
// Plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import { qs } from '@@/src/helpers/dom';

export default defineComponent({
  name: 'GridLayout',
  props: {
    columnsNumber: {
      type: Number,
      default: 12,
    },
    rowsNumber: {
      type: Number,
      default: 30,
    },
    rowHeight: {
      type: Number,
      default: 30,
    },
    rowGap: {
      type: Number,
      default: 15,
    },
    columnGap: {
      type: Number,
      default: 15,
    },
  },
  setup(props) {
    const {
      columnsNumber,
      rowsNumber,
      rowHeight,
      rowGap,
      columnGap,
    } = toRefs(props);

    const styleObj = reactive({
      gridTemplateColumns: `repeat(${columnsNumber.value}, 1fr)`,
      gridTemplateRows: `repeat(${rowsNumber.value}, ${rowHeight.value}px)`,
      rowGap: `${rowGap.value}px`,
      columnGap: `${columnGap.value}px`,
    });

    watch([rowGap, columnGap], () => {
      styleObj.rowGap = `${rowGap.value}px`;
      styleObj.columnGap = `${columnGap.value}px`;
    }, { immediate: true });

    lightGallery(qs('.lightgallery') as HTMLElement, {
      plugins: [lgZoom, lgThumbnail],
      speed: 300,
    });

    return {
      styleObj,
    };
  },
});
</script>
<style lang="scss">
.r-grid-container {
  display: grid;
}
</style>
