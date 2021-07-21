interface IGalleryLoading {
  className: string;
}

interface IPopup {
  effect: string;
  enable: boolean;
  caption: boolean;
  isTitle: boolean;
  isDesc: boolean;
  opacity: number;
  isZoom: boolean;
  bgOpacity: number;
}

interface ILimit {
  enable: boolean;
  text: string;
  items: number;
}

interface IFilter {
  allText: string;
  enableCount: boolean;
  enable: boolean;
  items: any; // TODO: check later by backend
  textClass: string;
  eff: string;
  countString: string;
}

interface ILoadmore {
  enable: boolean;
  first: number;
  more: number;
  onScroll: boolean;
  buttonText: string;
  buttonStyle: string;
  loadingText: string;
}

// Gallery
export interface IGallery {
  gap: number;
  effect: string;
  title: string;
  description: string;
  loading: IGalleryLoading;
  popup: IPopup;
  limit: ILimit;
  filter: IFilter;
  loadmore: ILoadmore;
}
