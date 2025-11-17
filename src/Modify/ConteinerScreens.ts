import {
  UI, Modify,
  BindingType,
} from "asajs";

Modify.register("ui/inventory_screen.json", "container_cell_images/cell_selected").override.setProperties({
  ignored: true,
});
Modify.register("ui/inventory_screen.json", "container_cell_images").modify.controls
  .insertFront(UI.extend("crafting.cell_image_classic")
    .addBindings({
      binding_type: BindingType.View,
      source_control_name: "$background_image_control_name",
      resolve_sibling_scope: true,
      source_property_name: "(#container_item_background = 4)",
      target_property_name: "#visible"
    }),
  )

// ---
// Loom
// ---

Modify.register("ui/loom_screen.json", "highlight_slot_panel/highlight").override.addBindings();
Modify.register("ui/loom_screen.json", "highlight_slot_panel/white_border").override.addBindings();

// ---
// Stone Cutter
// ---

Modify.register("ui/stonecutter_screen.json", "highlight_slot_panel/highlight").override.addBindings();
Modify.register("ui/stonecutter_screen.json", "highlight_slot_panel/white_border").override.addBindings();

// ---
// Trade 2
// ---

Modify.register("ui/trade_2_screen.json", "hover_button").override.addBindings({
  binding_type: BindingType.CollectionDetails,
});