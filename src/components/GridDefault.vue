<template>
  <h1>eGallery</h1>
  <h1>row: {{ rowGap }}</h1>
  <h1>column: {{ columnGap }}</h1>
  <!--TODO: Sủa lại cả gap và x, y, w, h theo 1 cách nào đó-->
  <!--khôg cần đến nhân lên nhiều v-if-->
  <GridLayout
    :columns-number="12"
    :rows-number="30"
    :row-height="30"
    :row-gap="rowGap"
    :column-gap="columnGap"
  >
    <template v-for="image in images">
      <GridItem
        v-if="xs"
        :key="image.id"
        :x="image.layout.xs.x"
        :y="image.layout.xs.y"
        :w="image.layout.xs.w"
        :h="image.layout.xs.h"
      >
        <img :src="image.src">
      </GridItem>
      <GridItem
        v-if="sm"
        :key="image.id"
        :x="image.layout.sm.x"
        :y="image.layout.sm.y"
        :w="image.layout.sm.w"
        :h="image.layout.sm.h"
      >
        <img :src="image.src">
      </GridItem>
      <GridItem
        v-if="md"
        :key="image.id"
        :x="image.layout.md.x"
        :y="image.layout.md.y"
        :w="image.layout.md.w"
        :h="image.layout.md.h"
      >
        <img :src="image.src">
      </GridItem>
      <GridItem
        v-if="lg"
        :key="image.id"
        :x="image.layout.lg.x"
        :y="image.layout.lg.y"
        :w="image.layout.lg.w"
        :h="image.layout.lg.h"
      >
        <img :src="image.src">
      </GridItem>
      <GridItem
        v-if="xl"
        :key="image.id"
        :x="image.layout.xl.x"
        :y="image.layout.xl.y"
        :w="image.layout.xl.w"
        :h="image.layout.xl.h"
      >
        <img :src="image.src">
      </GridItem>
    </template>
  </GridLayout>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  ref,
  toRefs,
  watch,
} from 'vue';
import { useBreakpoints } from '@vueuse/core';
import GridLayout from '@/components/vue-grid-layout/GridLayout.vue';
import GridItem from '@/components/vue-grid-layout/GridItem.vue';
import { IImage } from '@/types/images';
import { IGallery } from '../types/gallery';
import { ISettings } from '../types/settings';

export default defineComponent({
  name: 'GridDefault',
  components: {
    GridLayout,
    GridItem,
  },
  props: {
    images: {
      require: true,
      default: () => [],
      type: Array as PropType<IImage[]>,
    },
    gallery: {
      require: true,
      default: () => {},
      type: Object as PropType<IGallery>,
    },
    settings: {
      require: true,
      default: () => {},
      type: Object as PropType<ISettings>,
    },
  },
  setup(props) {
    const {
      images,
      gallery,
      settings,
    } = toRefs(props);

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

    const rowGap = ref<number>(10);
    const columnGap = ref<number>(10);

    //TODO: Change on resize and refactor to Use
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
      xs,
      sm,
      md,
      lg,
      xl,
      rowGap,
      columnGap,
    };
  },
});
</script>
<style lang="scss" scoped>
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
