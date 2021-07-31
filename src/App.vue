<template>
  <div class="e-container">
    <Suspense>
    <template #default>
      <GridDefault />
    </template>
    <template #fallback>
      <SvgIconLoading />
    </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue';
import GridDefault from '@/components/GridDefault.vue';
import SvgIconLoading from '@/components/loading/SvgIconLoading.vue';

export default defineComponent({
  name: 'App',
  components: {
    GridDefault,
    SvgIconLoading,
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
