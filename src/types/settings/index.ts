interface IButtons {
  className: string;
  css: string;
}

interface ILoadings {
  className: string;
  svg: string;
  color: string;
}

/*
 * General settings for  all gallery
 */
export interface ISettings {
  button: IButtons;
  loading: ILoadings;
  lazyLoad: boolean
}
