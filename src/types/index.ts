import { IGallery } from './gallery';
import { IImage } from './images';
import { ISettings } from './settings';

export interface IEGallery {
  images: IImage[];
  gallery: IGallery;
  settings: ISettings;
}
