import eslintConfig from "@worldofsoftware/configs/eslint";
import typescriptParser from "@typescript-eslint/parser";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";

export default [
  ...eslintConfig,
  {
    files: ["packages/OpenProjectPlanner-API/**/*.ts"],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",

      parser: typescriptParser
    },
    plugins: {
      "@typescript-eslint": typescriptPlugin
    },
    rules: {
      "new-cap": ["warn", { capIsNew: false }],
      "@typescript-eslint/no-extraneous-class": [
        "error",
        { allowWithDecorator: true }
      ]
    }
  },
  {
    files: ["packages/OpenProjectPlanner-API/src/lib/env.ts"],
    rules: {
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "objectLiteralProperty",

          format: ["camelCase", "UPPER_CASE"],
          leadingUnderscore: "forbid",
          trailingUnderscore: "forbid"
        }
      ]
    }
  },
  {
    files: [
      "packages/OpenProjectPlanner-API/src/repositories/sources/*/tables/*.ts"
    ],
    rules: {
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "typeProperty",

          format: ["StrictPascalCase"]
        }
      ]
    }
  },
  {
    files: ["packages/OpenProjectPlanner-API/src/routes/decorators/*.ts"],
    rules: {
      "@typescript-eslint/naming-convention": [
        "error",
        {
          modifiers: ["global"],
          selector: "variable",

          format: ["StrictPascalCase"]
        }
      ]
    }
  }
];
