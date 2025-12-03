
const fs = require("node:fs");
const readline = require("node:readline");
const { text } = require("node:stream/consumers");

const langFile = process.argv[2];
const searchingChar = "action.interact";

const interactTexts = [];

const rl = readline.createInterface({
    input: fs.createReadStream(langFile),
    terminal: true,
})

rl.on("line", line => {
    if (line.includes(searchingChar)) {
        text = line.split("=")[0];
        interactTexts.push(text);
    }
})

rl.on("close", () => {});
// rl.on("error", err => {
//     console.log(err);
// });

console.log(JSON.stringify(interactTexts, null, 2));