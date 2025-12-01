import { Anchor, BindingName, BindingType, MappingTo, Modify, Orientation, Random, Types, UI, Vanilla } from "asajs";
import { UICommon } from "../Common/UI";

// ---
// Assates
// ---

const invButton = UICommon.quickInvsibleButton(MappingTo.HotbarInventoryButton);
const hotbarRightButton = UICommon.quickInvsibleButton(MappingTo.HotbarInventoryRight);
const HotbarLeftButton = UICommon.quickInvsibleButton(MappingTo.HotbarInventoryLeft);

const hidehudButton = UICommon.quickInvsibleButton(MappingTo.HideGuiAll);
const hidepaperdollButton = UICommon.quickInvsibleButton(MappingTo.HidePaperdollHud);

// ---
// Touch Padding
// ---

Vanilla.hud.rootPanel_bossHealthPanel_bossHudPadding({ ignored: true });
Vanilla.hud.itemNameTextRoot_itemTextAligner_interactPadding({ ignored: true });

// ---
// Hotbar
// ---


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
)

Vanilla.hud.hudContent().modify.controls.insertFront(
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
).insertFront<UI<Types.Button>>(
    invButton, {
        ignored: "(not $endd_pcui_extra_buttons)",
        size: ["100%y", "15%"],
        anchor: Anchor.BottomRight,
    }
).insertFront(
    UI.stackPanel({
        ignored: "(not $endd_pc_ui_dev_mode)",
        orientation: Orientation.Horizontal,
        size: ["100%c", "20%"],
        anchor: Anchor.BottomRight,
        offset: ["-10%", "-10%"],
    }).addChild<Types.Button, UI<Types.Button>>(
        HotbarLeftButton, {
            size: ["100%y", "100%"],
        }
    ).addChild<Types.Button, UI<Types.Button>>(
        hotbarRightButton, {
            size: ["100%y", "100%"],
        }
    )
).insertFront<UI<Types.Button>>(
    hidehudButton, {
        ignored: "(not $endd_pcui_extra_buttons)",
        size: ["100%y", "20%"],
        anchor: Anchor.TopRight,
    }
).insertFront<UI<Types.Button>>(
    hidepaperdollButton, {
        ignored: "(not $endd_pcui_extra_buttons)",
        size: ["100%y", "20%"],
        anchor: Anchor.TopLeft,
    }
)