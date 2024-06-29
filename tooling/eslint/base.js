/** @type {import("eslint").Linter.Config} */
const config = {
  extends: ["plugin:import/recommended", "plugin:import/typescript"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/no-shadow": ["error"],
    "no-shadow": "off",
    "no-undef": "off",
    "import/no-unresolved": "off",
    "import/no-default-export": ["error"],
    "import/no-useless-path-segments": ["error", { noUselessIndex: true }],
    "import/order": ["error"],
    "import/no-named-as-default-member": "off",
    "import/no-named-as-default": "off",
    "import/no-extraneous-dependencies": "error",
    "@typescript-eslint/no-floating-promises": "error",
  },
  ignorePatterns: ["**/node_modules/**", "**/lib/**"],
  settings: {
    "import/resolver": {
      typescript: true,
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".web.ts", ".native.ts"],
      },
    },
  },
};

module.exports = config;
