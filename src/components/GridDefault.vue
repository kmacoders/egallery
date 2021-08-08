<template>
  <h1>eGallery</h1>
  <GridLayout
    :columns-number="12"
    :rows-number="30"
    :row-height="rowHeight"
    :row-gap="rowGap"
    :column-gap="columnGap"
  >
    <GridItem
      v-for="image in images"
      :key="image.id"
      :x="imgPositionBreakpoints(image).x"
      :y="imgPositionBreakpoints(image).y"
      :w="imgPositionBreakpoints(image).w"
      :h="imgPositionBreakpoints(image).h"
    >
      <figure class="imghvr-fade-in-up">
        <img
          class="e-lazy-image"
          :data-src="image.src"
          src="https://via.placeholder.com/1/e8e8e8"
          :alt="image.alt"
        >
        <figcaption>
          Hover content
        </figcaption>
      </figure>
    </GridItem>
  </GridLayout>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  toRefs,
} from 'vue';
import useBootstrapBreakpoint from '@/composables/useBootstrapBreakpoint';
import useGap from '@/composables/useGap';
import useImgPositionBreakpoints from '@/composables/useImgPositionBreakpoints';
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
    const breakpoints = useBootstrapBreakpoint();
    const {
      rowGap,
      columnGap,
    } = useGap(breakpoints, gallery);
    const imgPositionBreakpoints = useImgPositionBreakpoints(breakpoints);

    return {
      rowGap,
      rowHeight: gallery.value.settings.rowHeight,
      columnGap,
      imgPositionBreakpoints,
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

  figure {
    width: 100%;
    height: 100%;
  }
</style>
