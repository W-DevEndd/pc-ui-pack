const { sys } = require("typescript");
const path = require("node:path");

const tlist_source = require("../hide_textures_list.cjs");

const tlist_file = sys.args[1] || "./.tlist";
const tlist = [];

function make_tlist(obj ,parent) {
    for (const key in tlist_source) {
        const thisItem = path.join(parent, key);
        console.log(thisItem);
    }
}

make_tlist(tlist_source, "./")