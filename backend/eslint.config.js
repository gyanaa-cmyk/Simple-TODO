const globals = require("globals");
const pluginJs = require("@eslint/js");

module.exports = [
  pluginJs.configs.recommended,
  {
    languageOptions: { globals: globals.node },
  },
];