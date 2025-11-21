import { Vanilla } from "asajs";

// Scroll
Vanilla.common.scrollingPanel_scrollTouch({ ignored: true });
Vanilla.common.scrollingPanel_scrollMouse({ ignored: false });

Vanilla.common.scrollBox_box_touchBox({ ignored: true });
Vanilla.common.scrollBox_box_mouseBox({ ignored: false });

// Hover Slot
Vanilla.common.highlightSlotPanel_highlight().override.addBindings();
Vanilla.common.highlightSlotPanel_whiteBorder().override.addBindings();
Vanilla.common.selectedItemDetailsFactory({ ignored: true });
Vanilla.common.pocketUiContainerSlot_hover_highlightSquare({ ignored: true });