const mainConfig = require("../prettier-config/index");

module.exports = {
    ...mainConfig,
    plugins: ["prettier-plugin-svelte"],
    overrides: [
        ...mainConfig.overrides,
        { files: "*.svelte", options: { parser: "svelte" } },
    ],
};
