import { Modify, Types, UI, Vanilla } from "asajs";

// Scroll
Vanilla.common.scrollingPanel_scrollTouch({ ignored: true });
Vanilla.common.scrollingPanel_scrollMouse({ ignored: false });

Vanilla.common.scrollBox_box_touchBox({ ignored: true });
Vanilla.common.scrollBox_box_mouseBox({ ignored: false });

// Hover Slot
Vanilla.common.highlightSlotPanel_highlight().override.addBindings();
Vanilla.common.highlightSlotPanel_whiteBorder().override.addBindings();
Vanilla.common.inventoryIconPanel_hoverText({ ignored: true });
Vanilla.common.selectedItemDetailsFactory({ ignored: true });
// Vanilla.common.pocketUiHighlightSlot({ ignored: true });
Vanilla.common.slotSelected({ ignored: true });

export class UICommon {
    static invisibleButton = UI.extend<
        Types.Button, Modify<Types.Button, string>
    >(Vanilla.common.button(), {
        layer: 9999,
        default_control: "",
        hover_control: "default",
        pressed_control: "highlighted",
        locked_control: "",

        prevent_touch_input: true,
        sound_name: "none",

        "$endd_pc_ui_dev_mode|default": true,
    }).addChild(

            UI.image({
                ignored: "(not $endd_pc_ui_dev_mode)",
                texture: "textures/ui/focus_border_white",
            }),
        0, "default").addChild(
            
            UI.image({
                ignored: "(not $endd_pc_ui_dev_mode)",
                texture: "textures/ui/focus_border_selected",
        }),
    0, "highlighted");

}