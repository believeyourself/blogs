module.exports = {
  env: {
    es2021: true
  },
  extends: ["plugin:react/recommended", "standard"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    semi: "off",
    "@typescript-eslint/semi": "error",
    quotes: ["error", "double"],
    "@typescript-eslint/no-use-before-define": "error"
  }
};
