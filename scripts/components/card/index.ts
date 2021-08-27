import { CardComponentConfig } from "./typings";
import { checkKeys } from "@mr-hope/assert-type";

export const resolveCard = (
  element: CardComponentConfig,
  location = ""
): void => {
  checkKeys(
    element,
    {
      tag: "string",
      type: "string",
      src: "string",
      url: "string",
      title: "string",
      desc: ["string", "undefined"],
      logo: ["string", "undefined"],
      name: ["string", "undefined"],
      hidden: ["boolean", "undefined"],
      env: ["string[]", "undefined"],
    },
    location
  );
};
