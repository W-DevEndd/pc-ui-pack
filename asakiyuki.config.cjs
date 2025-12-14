/**
 * Configuration object for the JsonUI Scripting build process.
 * @type {import('asajs').Config}
 */
const config = {
    compiler: {
        autoCompress: false,
        fileExtension: "class",
        encodeJson: true,
        UI: {
            nameLength: 32,
            namespaceAmount: 1,
            namespaceLength: 32,
            optimizeControls: false,
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
        description: `Make your minecraft UI (on mobile) look like on Desktop.
        Build with AsaJS <3`,
        baseGameVersion: [1, 21, 90],
        version: [1, 1, 2],
    },
};

module.exports = { config }
