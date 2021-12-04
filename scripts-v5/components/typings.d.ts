import type { AccountComponentOptions } from "./account/typings";
import type { CardComponentOptions } from "./card/typings";
import type { CarouselComponentOptions } from "./carousel/typings";
import type { CopyComponentOptions } from "./copy/typings";
import type { DocComponentOptions } from "./doc/typings";
import type { FooterComponentOptions } from "./footer/typings";
import type { GridComponentOptions } from "./grid/typings";
import type { ImageComponentOptions } from "./img/typings";
import type {
  FunctionalListComponentOptions,
  ListComponentOptions,
} from "./list/typings";
import type { LoadingComponentOptions } from "./loading/typings";
import type { LocationComponentOptions } from "./location/typings";
import type { MediaComponentOptions } from "./media/typings";
import type { PhoneComponentOptions } from "./phone/typings";
import type { TextComponentOptions } from "./text/typings";
import type { TitleComponentOptions } from "./title/typings";

export * from "./account/typings";
export * from "./card/typings";
export * from "./carousel/typings";
export * from "./copy/typings";
export * from "./doc/typings";
export * from "./footer/typings";
export * from "./grid/typings";
export * from "./img/typings";
export * from "./list/typings";
export * from "./location/typings";
export * from "./loading/typings";
export * from "./media/typings";
export * from "./phone/typings";
export * from "./text/typings";
export * from "./title/typings";

export type PageTag =
  | "account"
  | "card"
  | "carousel"
  | "copy"
  | "doc"
  | "footer"
  | "functional-list"
  | "grid"
  | "img"
  | "list"
  | "media"
  | "title"
  | "text"
  | "phone";

export type ComponentOptions =
  | AccountComponentOptions
  | CarouselComponentOptions
  | CardComponentOptions
  | CopyComponentOptions
  | DocComponentOptions
  | FooterComponentOptions
  | FunctionalListComponentOptions
  | GridComponentOptions
  | ListComponentOptions
  | LocationComponentOptions
  | ImageComponentOptions
  | MediaComponentOptions
  | LoadingComponentOptions
  | PhoneComponentOptions
  | TextComponentOptions
  | TitleComponentOptions;

/** 页面配置 */
export interface PageConfig {
  /** 页面标题 */
  title: string;
  /** 页面描述 */
  desc?: string;
  /** 页面作者 */
  author?: string;
  /** 页面最后更新时间 */
  time?: string;
  /** 页面标识 */
  id: string;
  /** 是否是灰色背景 */
  grey?: boolean;
  /** 页面内容 */
  content: ComponentOptions[];
  /**
   * 页面引用来源
   */
  cite?: string[] | string;
  /**
   * 页面内容是否已过时
   *
   * @default false
   */
  outdated?: boolean;
  /**
   * 是否可以使用小程序的界面分享
   *
   * @default false
   */
  shareable?: boolean;
  /**
   * 是否可以下载二维码
   *
   * @description Can download when shareable is true
   */
  qrcode?: string | boolean;
  /**
   * 是否在分享弹出菜单中显示联系客服
   *
   * @default true
   */
  contact?: boolean;
  /** 是否隐藏导航栏 */
  hidden?: boolean;
}

/** 页面数据 */
export interface PageData {
  /** 页面标题 */
  title: string;
  /** 页面描述 */
  desc?: string;
  /** 页面作者 */
  author?: string;
  /** 页面最后更新时间 */
  time?: string;
  /** 页面标识 */
  id: string;
  /** 是否是灰色背景 */
  grey?: boolean;
  /** 页面内容 */
  content: [string, Exclude<ComponentOptions, "tag">][];
  /** 页面图片 */
  images?: string[];
  /**
   * 页面引用来源
   */
  cite?: string[];
  /**
   * 页面内容是否已过时
   *
   * @default false
   */
  outdated?: boolean;
  /**
   * 是否可以使用小程序的界面分享
   *
   * @default false
   */
  shareable?: boolean;
  /**
   * 是否可以下载二维码
   *
   * @description Can download when shareable is true
   */
  qrcode?: string | boolean;
  /**
   * 是否在分享弹出菜单中显示联系客服
   *
   * @default true
   */
  contact?: boolean;
  /** 是否隐藏导航栏 */
  hidden?: boolean;
}
