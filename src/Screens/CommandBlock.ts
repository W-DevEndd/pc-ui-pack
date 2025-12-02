import { Anchor, MappingTo, UI, Vanilla } from "asajs";
import { UICommon } from "../Common/UI";

Vanilla.commandBlock.commandBlockScreenContent().modify.controls.insertFront(
    UICommon.quickInvsibleButton(
        MappingTo.ChatAutocomplete, {
            ignored: "(not $endd_pcui_extra_buttons)",
            size: ["20%", "20%x"],
            anchor: Anchor.BottomMiddle,
            offset: [0, "-100%c"],
        }
    )
)