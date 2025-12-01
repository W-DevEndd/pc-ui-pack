import { Anchor, MappingTo, Orientation, UI, Vanilla } from "asajs";
import { UICommon } from "../Common/UI";

Vanilla.chat.chatScreenContent().modify.controls.insertFront(
    UI.stackPanel({
        ignored: "(not $endd_pcui_extra_buttons)",
        orientation: Orientation.Vertical,
        size: ["20%", "100%c"],
        offset: [0, -27],
        anchor: Anchor.BottomRight,
    }).addChild(
        UICommon.quickInvsibleButton(
            MappingTo.ChatPreviousMessage, {
                size: ["100%", "20%x"],
            }
        )
    ).addChild(
        UICommon.quickInvsibleButton(
            MappingTo.ChatNextMessage, {
                size: ["100%", "20%x"],
            }
        )
    ).addChild(
        UICommon.quickInvsibleButton(
            MappingTo.ChatAutocompleteBack, {
                size: ["100%", "20%x"],
            }
        )
    ).addChild(
        UICommon.quickInvsibleButton(
            MappingTo.ChatAutocomplete, {
                size: ["100%", "20%x"],
            }
        )
    )
)