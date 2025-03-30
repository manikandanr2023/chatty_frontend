import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default defineConfig({

  ignores: [
      // dependencies
      "**/node_modules/**",
      "**/.pnp",
      "**/.pnp.js",

      // testing
      "**/coverage/**",

      // production
      "**/build/**",

      // misc
      "**/.DS_Store",
      "**/.env",
      "**/.env.local",
      "**/.env.development.local",
      "**/.env.test.local",
      "**/.env.production.local",
      "**/npm-debug.log*",
      "**/yarn-debug.log*",
      "**/yarn-error.log*"
    ],

  // Configure language options and globals
  languageOptions: {
    globals: globals.browser, // Specify global variables for browser environment
  },

  // Add plugins and extend ESLint rules
  plugins: {
    js, // Using the @eslint/js plugin
    react: pluginReact, // Using the eslint-plugin-react
  },

  extends: [
    "js/recommended", // Extend the recommended rules for JavaScript
    pluginReact.configs.flat.recommended, // Extend the recommended React rules
  ],

  settings: {
    react: {
      version: "detect", // Automatically detect React version
    },
  },
});
