module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'plugin:security/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {},
};
