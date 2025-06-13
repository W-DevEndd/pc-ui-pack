import { Buttons } from "../components/Buttons";
// import TrueOverrideProperties from "../types/TrueOverrideProperties";
import {
  Modify, UI, Random,
  BindingType, BindingName, Anchor, MappingTo, Orientation,
} from "jsonui-scripting";
const screen = "ui/hud_screen.json";

Modify.register(screen, "hotbar_chooser/pocket_hotbar").override.setProperties({
  ignored: "(not $education_edition)",
});
Modify.register(screen, "hotbar_chooser/desktop_hotbar").override.setProperties({
  ignored: "$education_edition",
});

Modify.register(screen, "hotbar_elipses_panel_right_content").override.setProperties({
  ignored: true,
});
Modify.register(screen, "hotbar_elipses_panel_left_content").override.setProperties({
  ignored: true,
});

Modify.register(screen, "root_panel/boss_health_panel/boss_hud_touch_padding")
  .override.setProperties({ ignored: true });
Modify.register(screen, "root_panel/boss_health_panel/boss_hud_padding")
  .override.setProperties({ ignored: true });

const centeredGUIElementsAtMiddleTouch = Random.getName();
Modify.register(
  screen,
  `${centeredGUIElementsAtMiddleTouch}@centered_gui_elements_at_bottom_middle`,
).override.addBindings({
  binding_name: BindingName.HudVisibleCenteredTouch,
  binding_name_override: "#visible",
  binding_type: BindingType.Global,
});

Modify.register(screen, "root_panel").modify.controls
  .replace(
    "centered_gui_elements_at_bottom_middle_touch",
    centeredGUIElementsAtMiddleTouch,
  );

// Modify.register(screen, "root_panel").modify.controls
//   .replace(
//     "centered_gui_elements_at_bottom_middle_touch",
//     UI.extend("hud.centered_gui_elements_at_bottom_middle").addBindings({
//       binding_name: BindingName.HudVisibleCenteredTouch,
//       binding_name_override: "#visible",
//       binding_type: BindingType.Global,
//     }),
//   );
Modify.register(screen, "item_name_text_root/item_text_aligner/interact_padding")
  .override.setProperties({
    ignored: true,
  });

function stackedRow(child: UI) {
  return UI.panel({
    size: ["100%y", "100%"],
  }).addChild(child, {
    size: ["90%", "90%"],
  });
}

Modify.register(screen, "hud_content").modify.controls.insertFront(
  UI.stackPanel({
    orientation: Orientation.Horizontal,
    size: ["100%c", "10%"],
    offset: ["-10%", "-15%"],
    anchor: Anchor.BottomRight,
    // jsjsj: "",
  }).addChild(
    stackedRow(UI.extend(Buttons.touchButton, {
      "$button_text": "<",
      "$pressed_button_name": MappingTo.HotbarInventoryLeft,
    }))
  ).addChild(
    stackedRow(UI.extend(Buttons.touchButton, {
      "$button_text": ">",
      "$pressed_button_name": MappingTo.HotbarInventoryRight,
    }))
  ).addChild(
    stackedRow(UI.extend(Buttons.touchButton, {
      "$button_text": "INV",
      "$pressed_button_name": MappingTo.HotbarInventoryButton,
    }))
  )
);