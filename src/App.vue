<template>
  <div class="e-container">
    <template v-if="isLoading">
      <SvgIconLoading />
    </template>
    <template v-else>
      <GridDefault
        :images="images"
        :gallery="gallery"
        :settings="settings"
      />
    </template>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  ref,
} from 'vue';
import { useStore } from 'vuex';
import GridDefault from '@/components/GridDefault.vue';
import SvgIconLoading from '@/components/loading/SvgIconLoading.vue';
import { IImage } from './types/images';
import { IGallery } from './types/gallery';
import { ISettings } from './types/settings';

export default defineComponent({
  name: 'App',
  components: {
    GridDefault,
    SvgIconLoading,
  },
  setup() {
    const store = useStore();
    const isLoading = ref<boolean>(store.getters.getIsLoading); // has initial value
    const images = ref<IImage[]>([] as IImage[]);
    const gallery = ref<IGallery>({} as IGallery);
    const settings = ref<ISettings>({} as ISettings);
    onMounted(async () => {
      await store.dispatch('getData');
      images.value = store.getters.getImages;
      gallery.value = store.getters.getGallery;
      settings.value = store.getters.getSettings;
      isLoading.value = store.getters.getIsLoading;
    });

    return {
      isLoading,
      images,
      gallery,
      settings,
    };
  },
});
</script>

<style lang="scss" scoped>
.e-container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}
</style>
