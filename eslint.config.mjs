import eslint from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import react from "eslint-plugin-react";
import tailwind from "eslint-plugin-tailwindcss";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ...react.configs.flat.recommended,
    settings: {
      react: {
        version: "detect", // Automatically detects React version
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off", // Disable React-in-JSX-scope rule
    },
  },
  {
    files: ["*.ts", ".tsx"],
    languageOptions: {
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...tailwind.configs["flat/recommended"],
  eslintPluginPrettierRecommended,
);
