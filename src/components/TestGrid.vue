<template>
  <main id="app">
    <section class="grid-stack" />
  </main>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue';
import { GridStack } from 'gridstack';
import { on } from 'events';

export default defineComponent({
  name: 'HelloWorld',
  setup() {
    const items = [
      { x: 0, y: 0, w: 2, h: 2 },
      { x: 2, y: 3, w: 3, content: 'item 2' },
      { x: 1, y: 3 },
      { x: 2, y: 1}
    ];
    onMounted(() => {
      const grid = GridStack.init();
      grid.load(items)
      console.log(items)
    })
  },
});
</script>

<style lang="scss">
.grid-stack-item {
  border: 1px solid #000;
}
.grid-stack { background: #FAFAD2; }
.grid-stack-item-content { background-color: #18BC9C; }
</style>
