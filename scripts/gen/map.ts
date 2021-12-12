import { resolvePage } from "../components/page";
import { aliasResolve } from "../components/utils";

import type { PageConfig, PageOptions } from "../components/typings";

export const resolveLocationPage = (
  data: PageConfig & { photo?: string[] },
  filePath: string
): PageOptions & { photo?: string[] } => {
  data.photo?.forEach((link, index) => {
    // `$` alias resolve and file check
    (data.photo as string[])[index] = aliasResolve(
      link,
      "Image",
      `${filePath}.photos[${index}]`
    );
  });

  return resolvePage(data, filePath);
};
