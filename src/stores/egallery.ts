import {
  VuexModule,
  Module,
  Mutation,
  Action,
} from 'vuex-module-decorators';
import GetData from '../helpers/GetData';
import { stall } from '../helpers/utils';
import { IGallery } from '../types/gallery';
import { IImage } from '../types/images';
import { ISettings } from '../types/settings';

enum MutationType {
  setIsLoading = 'SET_LOADING',
  setImages = 'SET_IMAGES',
  setGallery = 'SET_GALLERY',
  setSettings = 'SET_SETTINGS',
}

@Module
export default class EGallery extends VuexModule {
  private isLoading = true;

  private images: IImage[];

  private gallery: IGallery;

  private settings: ISettings;

  get getIsLoading(): boolean {
    return this.isLoading;
  }

  get getImages(): IImage[] {
    return this.images;
  }

  get getGallery(): IGallery {
    return this.gallery;
  }

  get getSettings(): ISettings {
    return this.settings;
  }

  @Mutation
  [MutationType.setIsLoading](payload: boolean): void {
    this.isLoading = payload;
  }

  @Mutation
  [MutationType.setImages](payload: IImage[]): void {
    this.images = payload;
  }

  @Mutation
  [MutationType.setGallery](payload: IGallery): void {
    this.gallery = payload;
  }

  @Mutation
  [MutationType.setSettings](payload: ISettings): void {
    this.settings = payload;
  }

  @Action
  async getData(): Promise<void> {
    this.context.commit(MutationType.setIsLoading, true);
    // TODO: remove fake
    await stall(1500);
    const data = await GetData.getDataJson();
    this.context.commit(MutationType.setImages, data.images);
    this.context.commit(MutationType.setGallery, data.gallery);
    this.context.commit(MutationType.setSettings, data.settings);
    this.context.commit(MutationType.setIsLoading, false);
  }
}
