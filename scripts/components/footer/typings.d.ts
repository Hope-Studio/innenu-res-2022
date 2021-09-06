import type { BaseComponentOptions } from "../common";

export interface FooterComponentOptions extends BaseComponentOptions {
  tag: "footer";
  /** 作者 */
  author?: string;
  /** 最后更新日期 */
  time?: string;
  /** 额外描述 */
  desc?: string;
}
