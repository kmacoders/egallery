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

interface IGallerySettings {
  background: {
    type: string;
    solid: string;
    gradient: string;
    gradientEffect: string;
    image: string;
    video: string;
  };
  parallax: {
    enable: boolean;
  };
  scrollAnimation: {
    type: string;
  };
  loadingAnimation: {
    type: string;
  };
  rowHeight: number;
}

// Gallery
export interface IGallery {
  rowGap: {
    [key: string]: number;
  };
  columnGap: {
    [key: string]: number;
  };
  effect: string;
  title: string;
  description: string;
  loading: IGalleryLoading;
  popup: IPopup;
  limit: ILimit;
  filter: IFilter;
  loadmore: ILoadmore;
  settings: IGallerySettings;
}
