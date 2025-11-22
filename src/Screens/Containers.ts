import { BindingType, Vanilla } from "asajs";

// ---------------------------------
// Loom Screen
// ---------------------------------

Vanilla.loom.highlightSlotPanel_highlight().override.addBindings();
Vanilla.loom.highlightSlotPanel_whiteBorder().override.addBindings();

// ---------------------------------
// StoneCutter Screen
// ---------------------------------

Vanilla.stonecutter.highlightSlotPanel_highlight().override.addBindings();
Vanilla.stonecutter.highlightSlotPanel_whiteBorder().override.addBindings();

// ---------------------------------
// Trade Screen
// ---------------------------------

Vanilla.trade2.hoverButton().override.addBindings({
    binding_type: BindingType.CollectionDetails,
})