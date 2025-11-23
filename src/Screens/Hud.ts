import { Anchor, BindingName, BindingType, MappingTo, Modify, Random, Types, UI, Vanilla } from "asajs";
import { UICommon } from "../Common/UI";

// ---
// Touch Padding
// ---

Vanilla.hud.rootPanel_bossHealthPanel_bossHudPadding({ ignored: true });
Vanilla.hud.itemNameTextRoot_itemTextAligner_interactPadding({ ignored: true });

// ---
// Hotbar
// ---

const invButton = UI.extend<Types.Button, UI<Types.Button>>(
    UICommon.invisibleButton, {
        "$pressed_button_name": MappingTo.HotbarInventoryButton,
    }
);

Vanilla.hud.hotbarPanel_hotbarElipsesPanelLeft({ ignored: true });
Vanilla.hud.hotbarPanel_hotbarElipsesPanelRight({ ignored: true });

Vanilla.hud.centeredGuiElementsAtBottomMiddleTouch({ ignored: true });
// Vanilla.hud.centeredGuiElementsAtBottomMiddle().override.addBindings({
//     binding_name: `(${BindingName.HudVisibleCentered} or ${BindingName.HudVisibleCenteredTouch})` as any,
//     binding_name_override: BindingName.Visible,
//     binding_type: BindingType.Global,
// });
const newCenteredGuiElementsAtBottomMiddleForTouchName = Random.getName();
Modify.registerWithNamespace<Types.Panel, string>(
    "ui/hud_screen.json",
    [
        newCenteredGuiElementsAtBottomMiddleForTouchName,
        Vanilla.hud.centeredGuiElementsAtBottomMiddle().getElement(),
    ].join(""),
    "hud",
).override.addBindings({
    binding_name: BindingName.HudVisibleCenteredTouch,
    binding_name_override: BindingName.Visible,
    binding_type: BindingType.Global,
});
Vanilla.hud.rootPanel().modify.controls.replace(
    "centered_gui_elements_at_bottom_middle_touch",
    newCenteredGuiElementsAtBottomMiddleForTouchName,
).insertFront(
    UI.panel({
        anchor: Anchor.BottomMiddle,
        size: [180, 22],
        offset: [24, -1],
    }).addChild<Types.Button, UI<Types.Button>>(
        invButton, {
            size: ["100%y", "100%"],
            anchor: Anchor.RightMiddle,
        }
    )
)