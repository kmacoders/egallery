<template>
  <h1>eGallery</h1>
  <GridLayout
    :columns-number="12"
    :rows-number="30"
    :row-height="30"
    :gap="15"
  >
    <GridItem
      v-for="image in images"
      :key="image.id"
      :x="image.layout.xl.x"
      :y="image.layout.xl.y"
      :w="image.layout.xl.w"
      :h="image.layout.xl.h"
    >
      <img :src="image.src">
    </GridItem>
  </GridLayout>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import GridLayout from '@/components/vue-grid-layout/GridLayout.vue';
import GridItem from '@/components/vue-grid-layout/GridItem.vue';

export default defineComponent({
  name: 'GridDefault',
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
<style lang="scss" scoped>
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
