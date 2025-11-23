import { Vanilla } from "asajs";

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

Vanilla.gameplay.bundleTouchTooltip({ ignored: true });