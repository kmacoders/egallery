import {
  VuexModule,
  Module,
  Mutation,
  Action
} from 'vuex-module-decorators';

@Module
export default class EGallery extends VuexModule {
  name: string = 'Huwng';

  get getName(): string {
    return this.name;
  }
}
