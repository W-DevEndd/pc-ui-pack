
const fs = require("node:fs");
const path = require("node:path");

const langDir = path.join(
    process.argv[2],
);

const files = fs.readdirSync(langDir);
const langFiles = [];

files.forEach(file => {
    const fileExSplit = file.split(".");
    const fileExtension = fileExSplit[fileExSplit.length - 1];
    if (fileExtension === "lang")
        langFiles.push(file)
})

console.log(JSON.stringify(langFiles, null, 2));