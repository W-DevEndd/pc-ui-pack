
const tlistSrc = require("../hide_textures_list.cjs");
const path = require("node:path");
const fs = require("node:fs");

rls_assets = path.join(process.cwd(), process.argv[2]);
// console.log(rls_assets);

tlist = {};
tfile_list = [];

function readTlistSrc(src, dst, base_dir) {
    let keys = Object.keys(src);

    if (keys.includes("*")) {
        const items = fs.readdirSync(base_dir);
        // console.log(items);
        keys = keys.filter(key => key !== "*");
    }
    console.log(keys);
    
    for (const key of keys) {
        const isObj = (typeof(src[key]) === "object" && src[key] !== null && !Array.isArray(src[key]));
        if (isObj)
            dst[key] = {...(dst[key] ??= {}), ...src[key]};
        else
            dst[key] = src[key];

        if (isObj)
            readTlistSrc(src[key], dst[key], path.join(String(base_dir), key));
    }
}
readTlistSrc(tlistSrc, tlist, rls_assets);

console.log(JSON.stringify(tlist, null, 2));