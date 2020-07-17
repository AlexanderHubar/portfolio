module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  plugins: ["react", "prettier", "jest"],
  extends: [
    "airbnb",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "prettier",
    "prettier/react",
    "plugin:jest/recommended",
  ],
  rules: {
    "import/extensions": 0,
    "import/no-extraneous-dependencies": "off",
    "react/jsx-filename-extension": "off",
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
