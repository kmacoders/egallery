<template>
  <img
    alt="Vue logo"
    src="./assets/logo.png"
  >
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <div class="author"> By {{ author.name }} {{ author.age }}</div>
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
      Item 1
    </GridItem>
  </GridLayout>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';
import GridLayout from '@/components/vue-grid-layout/GridLayout.vue';
import GridItem from '@/components/vue-grid-layout/GridItem.vue';
import { Author } from '@/types/Author';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    GridLayout,
    GridItem,
  },
  setup() {
    const author: Author = reactive({
      name: 'Huwng',
      age: 30,
    });

    return {
      author,
    };
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
