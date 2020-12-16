module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'eslint:recommended'
  ],
  plugins: [
  ],
  rules: {
    'comma-dangle': ['error', 'never'],
    'space-before-function-paren': ['error', 'never'],
    'vue/script-indent': [
      'error',
      2,
      { baseIndent: 1 }
    ],
    quotes: [
      'error',
      'single'
    ]
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off'
      }
    }
  ]
}
