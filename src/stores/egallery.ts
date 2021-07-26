import {EMULTIHOP} from 'constants';
import {
  VuexModule,
  Module,
  Mutation,
  Action
} from 'vuex-module-decorators';
import GetData from '../helpers/GetData';
import {IEGallery} from '../types';
import { IGallery } from '../types/gallery';
import { IImage } from '../types/images';
import { ISettings } from '../types/settings';

enum MutationType {
  setImages = 'SET_IMAGES',
  setGallery = 'SET_GALLERY',
  setSettings = 'SET_SETTINGS'
}

@Module
export default class EGallery extends VuexModule {
  private images: IImage[];

  private gallery: IGallery;

  private settings: ISettings;

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
    const data = await GetData.getDataJson();
    this.context.commit(MutationType.setImages, data.images);
    this.context.commit(MutationType.setGallery, data.gallery);
    this.context.commit(MutationType.setSettings, data.settings);
    console.log('dispatch')
  }
}
