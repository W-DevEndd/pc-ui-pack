import { Anchor, BindingName, BindingType, UI, Vanilla } from "asajs";

Vanilla.gameplay
    .bundleSelectedItemBackground_bundleSelectedItemBackgroundColourGreen()
        .override.addBindings();

Vanilla.gameplay
    .bundleSelectedItemBackground_bundleSelectedItemBackgroundColour({
        ignored: true,
    });
Vanilla.gameplay
    .bundleSelectedItemBackground_bundleSelectedItemFrame({
        ignored: true,
    });

// Vanilla.gameplay.bundleTouchTooltip({
//     ignored: "$bundle_deluxe",
// });

// Vanilla.gameplay.bundleSelectedItemBackground().modify.controls.insertFront(
//     UI.panel({
//         size: [0, 0],
//         anchor: Anchor.BottomRight,
//         ignored: "(not $bundle_deluxe)",
//     }).addBindings({
//         binding_name: BindingName.UsingTouch,
//         binding_name_override: BindingName.Visible,
//         binding_type: BindingType.Global,
//     }).addChild(
//         Vanilla.gameplay.bundleTooltip(),
//     )
// )