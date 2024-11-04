module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
    rules: {
      'vue/multi-word-component-names': 0,
    },
    "parserOptions": {
        "sourceType": "module"
    },  
}

