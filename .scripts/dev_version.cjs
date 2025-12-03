const fs = require("node:fs");

try {
    JSON.parse(fs.readFileSync(".is_dev_version.json"));
} catch {
    fs.rmSync(".is_dev_version.json", { recursive: true, force: true });
    fs.writeFileSync(
        ".is_dev_version.json",
        JSON.stringify(true),
        { encoding: "utf-8" },
    )
}
