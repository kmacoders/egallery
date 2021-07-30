<template>
  <Suspense>
    <template #default>
      <GridDefault />
    </template>
    <template #fallback>
      <SvgIcon />
    </template>
  </Suspense>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue';
import SvgIcon from '@/components/loading/SvgIcon.vue';

export default defineComponent({
  name: 'App',
  components: {
    GridDefault: defineAsyncComponent(() => import('@/components/GridDefault.vue')),
    SvgIcon,
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
