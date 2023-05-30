module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: ["prettier"],
  plugins: ["@typescript-eslint", "prettier", "import"],
  ignorePatterns: ["node_modules", "dist", ".github"],
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    "prettier/prettier": "error",
    "max-len": [
      "error",
      {
        code: 120,
        ignorePattern: "^import .*",
        ignoreUrls: true,
        ignoreComments: true,
        ignoreTemplateLiterals: true,
      },
    ],
    "import/order": [
      "error",
      {
        groups: ["index", "sibling", "parent", "internal", "external", "builtin", "object", "type"],
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "variable",
        format: ["camelCase", "UPPER_CASE", "PascalCase"],
      },
      {
        selector: "function",
        format: ["camelCase", "PascalCase"],
      },
    ],
  },
};
