import { Anchor, Orientation, UI, Vanilla } from "asajs";

Vanilla.chat.chatScreenContent().modify.controls.insertFront(
    UI.stackPanel({
        ignored: "(not $endd_pcui_extra_buttons)",
        orientation: Orientation.Vertical,
        size: ["10%", "100%c"],
        offset: [0, 27],
        anchor: Anchor.BottomRight,
    })
)