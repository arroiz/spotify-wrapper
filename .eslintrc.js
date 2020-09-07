module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    fetch: false,
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
};
