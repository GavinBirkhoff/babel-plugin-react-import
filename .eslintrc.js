module.exports = {
  parser: "babel-eslint",
  env: {
    commonjs: true,
    es2020: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 11,
  },
  plugins: ["prettier"],
  rules: {
    "no-unused-vars": "warn",
    "prettier/prettier": "error",
  },
}
