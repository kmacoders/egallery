<template>
  <div
    class="r-grid-container"
    :style="{
      gridTemplateColumns: `repeat(${columnsNumber}, 1fr)`,
      gridTemplateRows: `repeat(${rowsNumber}, ${rowHeight}px)`
    }"
  >
    <slot/>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

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

  },
});
</script>
<style lang="scss">
.r-grid-container {
  display: grid;
}
</style>
