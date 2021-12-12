export type TitleSearchIndex = ["title", string];
export type HeadingSearchIndex = ["heading", string];
export type TextSearchIndex = ["text", string];
export type ImageSearchIndex = ["img", { desc: string; icon: string }];
export type CardSearchIndex = ["card", { title: string; desc: string }];
export type DocSearchIndex = ["doc", { name: string; icon: string }];
export type SearchIndex =
  | TitleSearchIndex
  | HeadingSearchIndex
  | TextSearchIndex
  | ImageSearchIndex
  | DocSearchIndex
  | CardSearchIndex;

export interface SearchInfoItem {
  /** 页面名称 */
  name: string;
  index: SearchIndex[];
}

export type SearchInfo = Record<string, SearchInfoItem>;

/** 标记点 */
export interface Marker {
  /** 经度 */
  latitude: number;
  /** 纬度 */
  longitude: number;
  /** 地点名称 */
  name: string;
  /** 地点详细名称 */
  detail: string;
  /** 地点介绍路径 */
  path?: string;
}

/** 标记点数据 */
export interface MarkerData extends Marker {
  id: number;
}

export interface ResolvedMarkerData extends MarkerData {
  iconPath: string;
  width: number;
  height: number;
  alpha: number;
  label: {
    content: string;
    color: string;
    fontSize: number;
    anchorX: number;
    anchorY: number;
    bgColor: string;
    borderWidth: number;
    borderColor: string;
    borderRadius: number;
    padding: number;
  };
  callout: {
    content: string;
    color: string;
    fontSize: number;
    bgColor: string;
    borderRadius: number;
    padding: number;
    display: "BYCLICK" | "ALWAYS";
  };
}

export interface Category {
  path: string;
  name: string;
}

export interface MarkerConfig {
  category: Category[];

  marker: Record<string, MarkerData[]>;
}

export interface VersionInfo {
  /** 版本 */
  version: Record<string, number>;
  /** 大小 */
  size: Record<string, number>;
}

export interface WechatConfig {
  /** 公众号名称 */
  name: string;
  /** 公众号描述 */
  desc: string;
  /** 公众号 Logo */
  logo: string;
  /** 公众号 ID */
  id: string;
  /** 二维码地址 */
  qrcode: string;
  /** 是否关联 */
  authorized?: boolean;
  /** 关注链接 */
  follow?: string;
  /** 图文列表 */
  article: {
    /** 标题 */
    title: string;
    /** 图文摘要 */
    desc?: string;
    /** 图文封面 */
    cover: string;
    /** 图文地址 */
    url: string;
  }[];
}
