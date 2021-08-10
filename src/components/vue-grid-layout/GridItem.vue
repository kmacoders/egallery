<template>
  <a
    v-glightbox-title="'Huwng'"
    v-glightbox-description="'Description'"
    v-glightbox-type="'image'"
    v-aos="'zoom-in'"
    v-aos-once="true"
    :href="srcLightGallery"
    :class="'r-grid-item glightbox' + ( isLoading ? ' loading-ui is-image' : '')"
    :style="styleObj"
  >
    <slot />
  </a>
</template>
<script lang="ts">
import {
  defineComponent,
  reactive,
  watch,
  toRefs,
  ref,
} from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'GridItem',
  props: {
    x: {
      type: Number,
      require: true,
    },
    y: {
      type: Number,
      require: true,
    },
    w: {
      type: Number,
      require: true,
    },
    minW: {
      type: Number,
      default: 1,
    },
    maxW: {
      type: Number,
      default: Infinity,
    },
    h: {
      type: Number,
      require: true,
    },
    minH: {
      type: Number,
      default: 1,
    },
    maxH: {
      type: Number,
      default: Infinity,
    },
    srcLightGallery: String,
  },
  setup(props) {
    const store = useStore();
    const isLoading = ref<boolean>(store.getters.getIsLoading); // has initial value

    const {
      x,
      y,
      w,
      h,
    } = toRefs(props);

    const styleObj = reactive({
      gridColumn: `${Number(props.x) + 1}/ span ${props.w}`,
      gridRow: `${Number(props.y) + 1}/ span ${props.h}`,
    });

    watch([x, y, w, h], () => {
      styleObj.gridColumn = `${Number(props.x) + 1}/ span ${props.w}`;
      styleObj.gridRow = `${Number(props.y) + 1}/ span ${props.h}`;
    }, { immediate: true });

    return {
      isLoading,
      styleObj,
    };
  },
});
</script>
<style lang="scss">
</style>
