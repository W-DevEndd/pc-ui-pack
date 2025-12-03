const {} = require("asajs");

devVersion = require("./.is_dev_version.json");

const global_variables = {
    endd_pc_ui_dev_mode: devVersion ? true : false,
    endd_pcui_extra_buttons: true,
    is_pc_ui_pack: true,
    // bundle_deluxe: true,
};

module.exports = { global_variables };