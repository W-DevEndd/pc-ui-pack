import { Buttons } from "../components/Buttons";
import {
  Modify, UI,
  Orientation, Anchor, MappingTo,
} from "jsonui-scripting";

const screen = "ui/chat_screen.json";

function stackedRow(ui: UI) {
  ui.setProperties({
    anchor: Anchor.Center,
    size: ["95%", "95%"],
  });

  return UI.panel({
    size: ["100%", "25%"]
  }).addChild(ui);
}

const autoCompleteButtons = UI.stackPanel({
  orientation: Orientation.Vertical,
  size: ["25%", "25%"],
  anchor: Anchor.BottomRight,
  offset: [-2, -2],
}).addChild(stackedRow(UI.extend(Buttons.touchButton, {
  "$button_text": "↑",
  "$pressed_button_name": MappingTo.ChatPreviousMessage,
}))).addChild(stackedRow(UI.extend(Buttons.touchButton, {
  "$button_text": "↓",
  "$pressed_button_name": MappingTo.ChatNextMessage,
}))).addChild(stackedRow(UI.extend(Buttons.touchButton, {
  "$button_text": "←",
  "$pressed_button_name": MappingTo.ChatAutocompleteBack,
}))).addChild(stackedRow(UI.extend(Buttons.touchButton, {
  "$button_text": "→",
  "$pressed_button_name": MappingTo.ChatAutocomplete,
})));

Modify.register(screen, "commands_panel").modify.controls.insertFront(autoCompleteButtons);