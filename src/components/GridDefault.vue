<template>
  <h1>eGallery</h1>
  <!--TODO: Sủa lại cả gap và x, y, w, h theo 1 cách nào đó-->
  <!--khôg cần đến nhân lên nhiều v-if-->
  <GridLayout
    :columns-number="12"
    :rows-number="30"
    :row-height="30"
    :row-gap="15"
    :column-gap="15"
  >
    <template v-for="image in images">
      <GridItem
        v-if="xs"
        :key="image.id"
        :x="image.layout.xs.x"
        :y="image.layout.xs.y"
        :w="image.layout.xs.w"
        :h="image.layout.xs.h"
      >
        <img :src="image.src">
      </GridItem>
      <GridItem
        v-if="sm"
        :key="image.id"
        :x="image.layout.sm.x"
        :y="image.layout.sm.y"
        :w="image.layout.sm.w"
        :h="image.layout.sm.h"
      >
        <img :src="image.src">
      </GridItem>
      <GridItem
        v-if="md"
        :key="image.id"
        :x="image.layout.md.x"
        :y="image.layout.md.y"
        :w="image.layout.md.w"
        :h="image.layout.md.h"
      >
        <img :src="image.src">
      </GridItem>
      <GridItem
        v-if="lg"
        :key="image.id"
        :x="image.layout.lg.x"
        :y="image.layout.lg.y"
        :w="image.layout.lg.w"
        :h="image.layout.lg.h"
      >
        <img :src="image.src">
      </GridItem>
      <GridItem
        v-if="xl"
        :key="image.id"
        :x="image.layout.xl.x"
        :y="image.layout.xl.y"
        :w="image.layout.xl.w"
        :h="image.layout.xl.h"
      >
        <img :src="image.src">
      </GridItem>
    </template>
  </GridLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import { useBreakpoints } from '@vueuse/core';
import GridLayout from '@/components/vue-grid-layout/GridLayout.vue';
import GridItem from '@/components/vue-grid-layout/GridItem.vue';
import { IGridLocation, IImage } from '@/types/images';

export default defineComponent({
  name: 'GridDefault',
  components: {
    GridLayout,
    GridItem,
  },
  async setup(props, ctx) {
    const store = useStore();
    await store.dispatch('getData');
    const images = store.getters.getImages;

    const breakpoints = useBreakpoints({
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    });

    const xs = breakpoints.smaller('sm');
    const sm = breakpoints.between('sm', 'md');
    const md = breakpoints.between('md', 'lg');
    const lg = breakpoints.between('lg', 'xl');
    const xl = breakpoints.greater('xl');

    const getLayout = (image: IImage, screenSize: {
      xs: boolean,
      sm: boolean,
      md: boolean,
      lg: boolean,
      xl: boolean,
    }): IGridLocation => {
      if (screenSize.xs) {
        return image.layout.xs;
      }

      if (screenSize.sm) {
        return image.layout.sm;
      }

      if (screenSize.md) {
        return image.layout.md;
      }

      if (screenSize.lg) {
        return image.layout.lg;
      }

      if (screenSize.xl) {
        return image.layout.xl;
      }

      return image.layout.xs;
    };

    const getX = (image: IImage, screenSize: {
      xs: boolean,
      sm: boolean,
      md: boolean,
      lg: boolean,
      xl: boolean,
    }): number => {
      if (screenSize.xs) {
        console.log('sdf')
        return image.layout.xs.x;
      }

      if (screenSize.sm) {

        console.log('sdf')
        return image.layout.sm.x;
      }

      if (screenSize.md) {

        console.log('sdf')
        return image.layout.md.x;
      }

      if (screenSize.lg) {

        console.log('sdf')
        return image.layout.lg.x;
      }
      if (screenSize.xl) {
        console.log('sdf')
        return image.layout.xl.x;
      }

      console.log('sdf')
      return image.layout.xs.x;
    };

    return {
      images,
      xs,
      sm,
      md,
      lg,
      xl,
      getLayout,
      getX,
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
