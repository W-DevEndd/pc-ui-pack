
const fs = require("node:fs");

fs.writeFileSync("is_dev_version.json", process.argv[2]);