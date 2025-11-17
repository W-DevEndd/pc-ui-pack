import { Buttons } from "./Buttons";
import { UI } from "asajs";

export class Common {
  static globalText = UI.label({
    size: ["default", 10],
    // shadow: true,
    font_type: "SFUI",
    // font_size: FontSize.Large,
  } as any);
}