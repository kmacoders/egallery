<template>
  <div
    class="r-grid-container"
    :style="styleObj"
  >
    <slot/>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';

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
    gap: {
      type: Number,
      default: 15,
    },
  },
  setup(props) {
    const styleObj = reactive({
      gridTemplateColumns: `repeat(${props.columnsNumber}, 1fr)`,
      gridTemplateRows: `repeat(${props.rowsNumber}, ${props.rowHeight}px)`,
      gap: `${props.gap}px`,
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
