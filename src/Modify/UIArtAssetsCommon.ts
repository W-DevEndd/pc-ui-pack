import { Modify } from "asajs";

Modify.register("ui/ui_art_assets_common.json", "start_title_panel_content").override
  .addVariables({
    '$win10_edition': { '$title_panel': "title_panel_win10" },

    '$osx_edition': { '$title_panel': "title_panel_osx" },

    '($education_edition and $is_desktop)': {
      '$title_panel': "title_panel_edu_desktop",
      '$start_screen': true,
    },

    '($education_edition and not $is_desktop)': {
      '$title_panel': "title_panel_edu_desktop",
      '$start_screen': true,
    },

    '($pocket_edition or $console_edition)': { '$title_panel': "title_panel_win10" },

    '$gear_vr': { '$title_panel': "title_panel_vr" },
  });