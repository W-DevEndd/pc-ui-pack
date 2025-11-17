/**
 * Configuration object for the JsonUI Scripting build process.
 * @type {import('asajs').Config}
 */
const config = {
    compiler: {
        autoCompress: false,
        fileExtension: "class",
        encodeJson: false,
        UI: {
            nameLength: 32,
            namespaceAmount: 1,
            namespaceLength: 32,
            obfuscateName: true,
            obfuscateType: true,
        },
    },
    installer: {
        autoInstall: false,
        developEvironment: true,
        previewVersion: false,
        customPath: false,
        installPath: '/sdcard/archives/.pcui',
    },
    manifest: {
        name: "Endd's PC UI [DEV]",
        description: "Build with JsonUI Scripting <3",
        baseGameVersion: [1, 21, 80],
        version: [1]
    },
};

module.exports = { config }
