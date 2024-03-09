/** @type {import("eslint").Linter.Config} */
const config = {
  root: true,
  extends: "@kraaft/eslint-config/base",
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: ["vite.config.mts"],
};

module.exports = config;
