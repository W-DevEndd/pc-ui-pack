
const jsonc = require("jsonc-parser");
const fs = require("node:fs");

const dev_version 

const langListFiles = process.argv[2];
const interactListFiles = process.argv[3];
const bugrock = process.argv[4];

const langs = jsonc.parse(fs.readFileSync(langListFiles, { encoding: "utf-8"}));
const interacts = jsonc.parse(fs.readFileSync(
    interactListFiles,
    { encoding: "utf-8" },
));
