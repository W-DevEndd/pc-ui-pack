import { Buttons } from "./Buttons";
import { UI } from "jsonui-scripting";

export class Common {
  static globalText = UI.label({
    size: ["default", 10],
    // shadow: true,
    font_type: "SFUI",
    // font_size: FontSize.Large,
  } as any);
}