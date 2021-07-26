<template>
  fsdfs
  <Suspense>
    <template #default>
      <h1>eGallery</h1>
      <GridLayout
        :columns-number="12"
        :rows-number="30"
        :row-height="60"
        :gap="15"
      >
        <GridItem
          v-for="(image, index) in images"
          :key="index"
          :x="image.layout.xl.x"
          :y="image.layout.xl.y"
          :w="image.layout.xl.w"
        >
          sdf
        </GridItem>
      </GridLayout>
    </template>
    <template #fallback>
      Loading
    </template>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import GridLayout from '@/components/vue-grid-layout/GridLayout.vue';
import GridItem from '@/components/vue-grid-layout/GridItem.vue';

export default defineComponent({
  name: 'App',
  components: {
    GridLayout,
    GridItem,
  },
  async setup() {
    const store = useStore();
    await store.dispatch('getData');
    const images = computed(() => store.getters.getImages);

    console.log(images.value)

    return {
      images,
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
