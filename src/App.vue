<template>
  <h1>eGallery</h1>
  <GridLayout
    :columns-number="12"
    :rows-number="30"
    :row-height="60"
    :gap="15"
  >
    <GridItem
      :x="0"
      :y="0"
      :w="11"
      :h="3"
    >
    </GridItem>
  </GridLayout>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import GridLayout from '@/components/vue-grid-layout/GridLayout.vue';
import GridItem from '@/components/vue-grid-layout/GridItem.vue';

export default defineComponent({
  name: 'App',
  components: {
    GridLayout,
    GridItem,
  },
  setup() {

  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
