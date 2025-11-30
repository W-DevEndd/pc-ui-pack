
const tlist = require("../hide_textures_list.cjs");
const path = require("node:path");
const fs = require("node:fs");
const { types } = require("node:util");

const rls_assets = path.join(process.argv[2]);
const tlist_file_path = path.join(process.cwd(), process.argv[3]);
// console.log(rls_assets);

const t_list_file = [];

function readTlist(src, base_dir) {
    let keys = Object.keys(src);
    
    if (!keys.includes("positions")) {
        // console.log(keys);
        for (const key of keys) {
            if (key !== "*")
                readTlist(src[key], path.join(String(base_dir), key));
        }
    }

    if (keys.includes("*") && !keys.includes("positions")) {
        const items = fs.readdirSync(base_dir);

        for (const i of items) {
            src[i] = { ...src["*"], ...src[i] ??= {}};
        }
        delete src["*"];
        return readTlist(src, base_dir);
    }

    if (keys.includes("positions")) {
        t_list_file.push({
            path: base_dir,
            pos: src["positions"],
        })
    }
}
readTlist(tlist, rls_assets);

fs.writeFileSync(
    tlist_file_path,
    JSON.stringify(t_list_file),
    { encoding: "utf-8" },
);