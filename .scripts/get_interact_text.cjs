
const fs = require("node:fs");
const readline = require("node:readline");
const { text } = require("node:stream/consumers");

const langFile = process.argv[2];
const searchingChar = "action.interact";

const interactTexts = [];

const rl = readline.createInterface(
    fs.createReadStream(langFile),
    undefined,
    undefined,
    true,
)

rl.on("line", (line) => {
    if (line.includes(searchingChar)) {
        const text = line.split("=")[0];
        interactTexts.push(text);
    }
})

rl.on("close", () => {
    console.log(JSON.stringify(interactTexts, null, 2));
});
rl.on("error", (err) => {
    console.log(err);
});
