import { Buttons } from "../components/Buttons";
import {
  UI, Modify,
  Anchor
} from "asajs";

const currentFile = "ui/ui_common.json";

Modify.register(currentFile, "slot_selected").override.setProperties({
  ignored: true,
});
Modify.register(currentFile, "cell_image_panel/cell_image_selected").override.setProperties({
  ignored: true,
});
Modify.register(currentFile, "cell_image_panel/cell_image").override.addBindings();
Modify.register(currentFile, "selected_item_details_factory").override.setProperties({
  ignored: true,
});
Modify.register(currentFile, "highlight_slot_panel/highlight").override.addBindings();
Modify.register(currentFile, "highlight_slot_panel/white_border").override.addBindings();

Modify.register(currentFile, "scrolling_panel/scroll_touch").override.setProperties({
  ignored: true,
});
Modify.register(currentFile, "scrolling_panel/scroll_mouse").override.setProperties({
  ignored: false,
});

Modify.register(currentFile, "scroll_box/box/touch_box").override.setProperties({
  ignored: true,
});
Modify.register(currentFile, "scroll_box/box/mouse_box").override.setProperties({
  ignored: false,
});

Modify.register(currentFile, "base_screen/variables_button_mappings_and_controls").override
  .setProperties({ "$true|default": true })
  .addVariables({
    "$true": {
      //Desktop Texel Size: [376, 250]
      "$narrow_screen_size": [ 280, "100% - 10px" ], // Realms Pending Invitations, Add Players
      "$play_screen_size": [ 282, "100% - 50px" ], // Play Screen
      "$tabbed_upsell_screen_size": [ 310, 173 ], // Trial Tabbed Upsell Screen
      "$realms_create_screen_size": [ 267, 240 ], // Realms Create
      "$large_screen_size": [ 317, "100% - 10px" ], // Multiplayer Invitations
      "$store_screen_size": [ "100% - 4px", "100% - 4px" ], // Store Home
      "$skin_pack_screen_size": [ "100% - 4px", "100% - 50px" ], // Skin Pack
      "$resource_pack_screen_size": [ "100% - 50px", "45%x + 65px" ], // Texture Pack
      "$upsell_screen_size": [ "177%y - 208.5px", "100% - 4px" ], // Skin Pack Upsell
      "$create_world_upsell_screen_size": [ 360, 183 ],
      "$create_realm_upsell_screen_size": [ 360, 183 ],
      "$create_realm_upsell_play_screen_size": [ 360, 213 ],
      "$max_create_world_upsell_screen_size": [ 360, "100% - 4px" ],
      "$min_resource_pack_screen_size": [ 372, 232.4 ],
      "$max_resource_pack_screen_size": [ 400, 246 ],
      "$max_upsell_screen_size": [ 250, 259.125 ],
      "$rating_prompt_screen_size": [ 250, 87 ],
      "$max_skin_pack_screen_size": [ 310, "56.25%x - 65.25px + 118.5px" ],
      "$extra_large_screen_size": [ "100% - 4px", "100% - 4px" ], // Skin Picker, Command Block screen
      "$extra_large_max_screen_size": [ 370, "100% - 50px" ],
      "$xbl_immediate_signin_screen_size": [ 317, 158 ], // XBL Immediate Signin Popup
      "$xbl_optional_signin_screen_size": [ 317, 158 ], // XBL Optional Signin Popup
      "$xbl_console_signin_screen_size": [ 316, 161 ], // XBL Console Signin Popup
      "$xbl_console_qr_signin_screen_size": [ 364, 182 ], // XBL Console QR Signin Popup
      "$xbl_console_signin_succeeded_screen_size": [ 230, "100% - 50px" ], // XBL Console Signin Succeeded Popup
      "$xbl_first_launch_screen_size": [ 317, 146 ], // Trial Upsell
      "$xbl_gamer_profile_screen_size": [ 260, "100% - 50px" ], // XBL Console Signin Succeeded Popup
      "$modal_screen_size": [ 204, 140 ], // Pop-up dialogue boxes and modal progress screens
      "$tall_modal_screen_size": [ 204, 172 ],
      "$patch_notes_screen_size": [ 300, "100% - 4px" ], // Patch Notes Screen
      "$mob_effect_screen_size": [ "90%", "90%" ], // Mob Effect Screen
      "$purchase_coin_screen_size": [ "90%", "17%x + 82px" ], //Coin Purchase Screen
      "$purchase_coin_screen_size_extended": [ "90%", "17%x + 117px" ], //Coin Purchase Screen, with FAQ
      "$purchase_coin_screen_size_not_enough": [ "90%", "17%x + 97px" ], //Coin Purchase Screen, when not enough coins for current purchase
      "$purchase_coin_screen_size_extended_not_enough": [ "90%", "17%x + 132px" ], //Coin Purchase Screen, when not enough coins for current purchase, with FAQ
      "$choose_realm_screen_size": [ "70%", "85%" ], //Choose Realm Screen
      "$custom_templates_screen_size": [ "70%", "85%" ], //Custom Templates Screen
      "$world_modal_screen_size": [ 290, 100 ], // world convert and world loading modal progress screens
      "$day_one_experience_intro_screen_size": [ "60%", "85%" ], // Day One Experience intro popup
      "$day_one_experience_import_progress_screen_size": [ "80%", "90%" ], // Day One Experience import progress modal screen
      "$world_conversion_complete_screen_size": [ 290, 160 ], // World Conversion complete modal screen
      "$gamepad_disconnect_screen_size": [ 300, 100 ], //custom gamepad disconnected modal size, to contain all languages in title
      "$storage_migration_progress_size": [ 290, 100 ],
      "$store_modal_screen_size": [ "80%", "80%" ],
      "$csb_upsell_screen_size": [ "90%", "60%x" ],
    },
  });

// Modify.register(currentFile, "base_screen/variables_button_mappings_and_controls")
//   .modify.controls.insertFront(
//     UI.extend(Buttons.touchButton, {
//       // ignored
//       "$button_text": "Exit",
//       size: ["15%", "15%"],
//       anchor: Anchor.TopLeft,
//       offset: [0, 0],
//     }),
//   );