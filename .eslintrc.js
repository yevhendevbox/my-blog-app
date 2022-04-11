module.exports = {
  root: true,
  env: {
    node: true,
  },
  settings: {
    'prettier-vue': {
      SFCBlocks: {
        template: true,
        script: true,
      },
    },
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
  },
  rules: {
    'linebreak-style': 'off',
    'max-len': ['error', { code: 150, tabWidth: 2 }],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-useless-escape': 'off',
  },
};
