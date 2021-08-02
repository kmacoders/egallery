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
    console.log('row gap:'+props.rowGap)
    const styleObj = reactive({
      gridTemplateColumns: `repeat(${props.columnsNumber}, 1fr)`,
      gridTemplateRows: `repeat(${props.rowsNumber}, ${props.rowHeight}px)`,
      rowGap: `${props.rowGap}px`,
      columnGap: `${props.columnGap}px`,
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
