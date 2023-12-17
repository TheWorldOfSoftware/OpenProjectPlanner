import eslintConfig, { tsOverrides } from "@worldofsoftware/configs/eslint";

export default [
  ...eslintConfig,
  {
    files: ["packages/OpenProjectPlanner-API/**/*.ts"],
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
        ...tsOverrides.namingConvention,
        {
          selector: "objectLiteralProperty",

          format: ["camelCase", "UPPER_CASE"],
          leadingUnderscore: "forbid",
          trailingUnderscore: "forbid"
        }
      ]
    }
  }
];
