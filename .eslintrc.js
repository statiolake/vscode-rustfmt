/**@type {import('eslint').Linter.Config} */
// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript"
  ],
  settings: {
    "import/resolver": {
      typescript: true,
      node: true
    }
  },
  rules: {
    semi: [2, "always"],
    "@typescript-eslint/no-unused-vars": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/no-non-null-assertion": 0,
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "parent",
          "sibling",
          "index",
          "object",
          "type"
        ],
        pathGroups: [
          {
            pattern: "{react,react-dom/**,react-router-dom}",
            group: "builtin",
            position: "before"
          },
          {
            pattern: "@src/**",
            group: "parent",
            position: "before"
          }
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
        alphabetize: {
          order: "asc"
        },
        "newlines-between": "always"
      }
    ],
    "import/no-unresolved": [
      "warn",
      {
        ignore: ["^vscode$"] // vscode is a built-in module in vscode extensions
      }
    ]
  }
};
