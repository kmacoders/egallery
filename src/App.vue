<template>
  <Suspense>
    <template #default>
      <GridDefault />
    </template>
    <template #fallback>
      <SvgIconLoading />
    </template>
  </Suspense>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue';
import SvgIconLoading from '@/components/loading/SvgIconLoading.vue';

export default defineComponent({
  name: 'App',
  components: {
    GridDefault: defineAsyncComponent(() => import('@/components/GridDefault.vue')),
    SvgIconLoading,
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
