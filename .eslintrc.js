module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  plugins: ["react", "prettier"],
  extends: [
    "airbnb",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "prettier",
    "prettier/react",
  ],
  rules: {
    "import/extensions": 0,
    "prettier/prettier": "error",
    "react/react-in-jsx-scope": "off",
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["~"],
      },
    },
  },
};