interface IGridLocation {
  x: number;
  y: number;
  w: number;
  h: number;
}

interface IBackground {
  type: string; // TODO: get type from app
  solid: string;
  gradient: string;
  gradientEffect: string;
  image: string;
  video: string;
}

interface IParallax {
  enable: boolean;
}

interface IScrollAnimation {
  type: string; // TODO: get type from app
}

interface IClickAction {
  type: 'link' | 'video';
  href: string;
  target: string;
  src: string;
}

interface IImageButton {
  className: string;
  position: string; // TODO: get type from app
  margin: number;
}

export interface IImage {
  src: string;
  alt: string;
  responsive: Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', IGridLocation>[];
  text: string;
  background: IBackground;
  parallax: IParallax;
  scrollAnimation: IScrollAnimation;
  effect: string;
  clickAction: IClickAction;
  button: IImageButton;
}
