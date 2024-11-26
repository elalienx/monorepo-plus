import pkg from "eslint-plugin-playwright";
import baseConfig from "../../eslint.config.js";

const { configs } = pkg;

export default [
  configs["flat/recommended"],

  ...baseConfig,
  {
    files: ["**/*.ts", "**/*.js"],
    // Override or add rules here
    rules: {},
  },
];
