import { Common } from "./Common";
import {
  UI,
  Anchor,
} from "jsonui-scripting";

export class Buttons {
  static touchButtonControlDefault = UI.panel({
    ignored: "$hide_control",

    "$button_text|default": "",
    propagate_alpha: true,
    alpha: 0.5,
  }).addChild(UI.extend(Common.globalText, {
    layer: 1,
    text: "$button_text",
    anchor: Anchor.Center,
  })).addChild(UI.image({
    layer: 0,
    texture: ".endd/textures/ui/touch_button_bg",
    size: ["100%", "100%"],
  }));
  static touchButtonControlHighlighted = UI.extend(this.touchButtonControlDefault, {
    alpha: 0.75,
  })

  static touchButton = UI.extend("common.button", {
    "$hide_control|default": false,

    alpha: 10**9,
    prevent_touch_input: true,
    sound_name: "none",
  })
    .addChild(this.touchButtonControlDefault, {}, "default")
    .addChild(this.touchButtonControlDefault, {}, "hover")
    .addChild(this.touchButtonControlHighlighted, {}, "pressed");
}