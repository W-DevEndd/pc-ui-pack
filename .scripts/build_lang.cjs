
const jsonc = require("jsonc-parser");
const fs = require("node:fs");
const path = require("node:path");

const dev_version = require("../.is_dev_version");

if (!dev_version) {
    const langListFiles = process.argv[2];
    const interactListFiles = process.argv[3];
    const bugrock = process.argv[4];

    const langs = jsonc.parse(fs.readFileSync(langListFiles, { encoding: "utf-8"}));
    const interacts = jsonc.parse(fs.readFileSync(
        interactListFiles,
        { encoding: "utf-8" },
    ));

    langData = "";
    interacts.forEach(text => {
        langData = langData + `${text}= 	#\n`
    });

    const langDir = path.join(bugrock, "texts");
    fs.mkdirSync(langDir, { recursive: true });

    langs.forEach(langFile => {
        const langFilePath = path.join(langDir, langFile);
        fs.writeFileSync(langFilePath, langData, { encoding: "utf-8" });
    });
}