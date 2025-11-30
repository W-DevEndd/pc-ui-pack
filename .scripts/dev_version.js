
const fs = require("node:fs");

fs.writeFileSync(
    ".is_dev_version.json",
    JSON.stringify(JSON.parse(process.argv[2]), null, 2),
);