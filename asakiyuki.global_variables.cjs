const fs = require("node:fs");
const {} = require("asajs");

let devVersion 
try {
    devVersion = require("./is_dev_version.json");
} catch {
    devVersion = true;
    fs.rmSync("./is_dev_version.json", { recursive: true, force: true });
    fs.writeFileSync(
        "./is_dev_version.json",
        JSON.stringify(true),
        { encoding: "utf-8" },
    )
}

const global_variables = {
    endd_pc_ui_dev_mode: devVersion ? true : false,
    endd_pcui_extra_buttons: devVersion ? true : false,
    is_pc_ui_pack: true,
    // bundle_deluxe: true,
};

module.exports = { global_variables };