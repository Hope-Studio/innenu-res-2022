import { CopyComponentConfig } from "./typings";
import { checkKeys } from "@mr-hope/assert-type";

export const resolveCopy = (
  element: CopyComponentConfig,
  location = ""
): void => {
  checkKeys(
    element,
    {
      tag: "string",
      header: ["string", "undefined"],
      text: "string",
      hidden: ["boolean", "undefined"],
      env: ["string[]", "undefined"],
    },
    location
  );
};
