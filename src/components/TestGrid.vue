<template>
  <div class="grid">
  <div class="item">
    <div class="item-content">
      <!-- Safe zone, enter your custom markup -->
      This can be anything.
      <!-- Safe zone ends -->
    </div>
  </div>

  <div class="item">
    <div class="item-content">
      <!-- Safe zone, enter your custom markup -->
      <div class="my-custom-content">
        Yippee!
      </div>
      <!-- Safe zone ends -->
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue';
import Muuri from 'muuri';
import { qs } from '../helpers/dom';

export default defineComponent({
  name: 'TestGrid',
  setup() {
    onMounted(() => {
      const gridEl = qs('.grid');
      console.log(gridEl)
      const grid = new Muuri('.grid', {
        dragEnabled: true,
      });
    })
  },
});
</script>

<style lang="scss" scoped>
.grid {
  position: relative;
}
.item {
  display: block;
  position: absolute;
  width: 100px;
  height: 100px;
  margin: 5px;
  z-index: 1;
  background: #000;
  color: #fff;
}
.item.muuri-item-dragging {
  z-index: 3;
}
.item.muuri-item-releasing {
  z-index: 2;
}
.item.muuri-item-hidden {
  z-index: 0;
}
.item-content {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
