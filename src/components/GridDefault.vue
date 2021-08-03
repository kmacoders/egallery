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
import useBootstrapBreakpoint from '@/composables/useBootstrapBreakpoint';
import useGap from '@/composables/useGap';
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
      gallery,
    } = toRefs(props);

    const {
      xs,
      sm,
      md,
      lg,
      xl,
    } = useBootstrapBreakpoint();

    const {
      rowGap,
      columnGap,
    } = useGap({
      xs,
      sm,
      md,
      lg,
      xl,
    }, gallery);

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
