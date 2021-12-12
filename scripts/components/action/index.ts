import { checkKeys } from "@mr-hope/assert-type";
import { aliasResolve } from "../utils";

import type { ActionComponentOptions } from "./typings";

export const resolveAction = (
  element: ActionComponentOptions,
  location = ""
): void => {
  // TODO: Remove
  if (element.text) {
    element.content = element.text;
    delete element.text;
  }

  // `$` alias resolve and file check
  if (element.content)
    element.content = aliasResolve(element.content, "File", location);

  checkKeys(
    element,
    {
      tag: "string",
      header: ["string", "undefined"],
      content: "string",
      env: ["string[]", "undefined"],
    },
    location
  );
};
