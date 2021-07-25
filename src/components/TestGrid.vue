<template>
  <main id="app">
    <button
      type="button"
      @click="addNewWidget()"
    >
      Add Widget
    </button> {{ info }}
    <section class="grid-stack" />
  </main>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue';
import { GridStack } from 'gridstack';

export default defineComponent({
  name: 'HelloWorld',
  setup() {
    const count = ref(0);
    const info = ref('');
    let grid = null;
    const items = [
      { x: 2, y: 1, h: 2 },
      { x: 2, y: 4, w: 3 },
      { x: 4, y: 2 },
      { x: 3, y: 1, h: 2 },
      {
        x: 0, y: 6, w: 2, h: 2,
      },
    ];

    onMounted(() => {
      grid = GridStack.init({
        float: true,
        cellHeight: '70px',
        minRow: 1,
      });

      // Use an arrow function so that `this` is bound to the Vue instance. Alternatively, use a custom Vue directive on the `.grid-stack` container element: https://vuejs.org/v2/guide/custom-directive.html
      grid.on('dragstop', (event, element) => {
        const node = element.gridstackNode;
        // `this` will only access your Vue instance if you used an arrow function, otherwise `this` binds to window scope. see https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/
        info.value = `you just dragged node #${node.id} to ${node.x},${node.y} – good job!`;
      });
    });

    function addNewWidget() {
      const node = items[count.value] || {
        x: Math.round(12 * Math.random()),
        y: Math.round(5 * Math.random()),
        w: Math.round(1 + 3 * Math.random()),
        h: Math.round(1 + 3 * Math.random()),
      };
      node.id = node.content = String(count.value++);
      grid.addWidget(node);
    }

    return {
      info,
      addNewWidget,
    };
  },
});
</script>

<style lang="scss">
.grid-stack-item {
  border: 1px solid #000;
}
</style>
