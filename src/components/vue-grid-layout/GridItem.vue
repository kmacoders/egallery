<template>
  <div
    class="r-grid-item"
    :style="styleObj"
  >
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';

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
    backgroundColor: {
      type: String,
      default: '#0091ea',
      validator: (strColor: string): boolean => /^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/i.test(strColor),
    },
  },
  setup(props) {
    const styleObj = reactive({
      backgroundColor: `${props.backgroundColor}`,
      gridColumn: `${Number(props.x) + 1}/ span ${props.w}`,
      gridRow: `${Number(props.y) + 1}/ span ${props.h}`,
    });

    return {
      styleObj,
    };
  },
});
</script>
<style lang="scss">
</style>
