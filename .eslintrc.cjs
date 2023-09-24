module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      legacyDecorators: true, // 允许使用修饰符
      globalReturn: false, // 设置为 true，当 sourceType 为 script 时，允许全局 return
    },
    requireConfigFile: true, // 是否需要 babel 配置文件
    allowImportExportEverywhere: false, // 设置为 true，import 和 export 声明 可以出现在文件的任务位置，否则只能出现在顶部
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-mixed-spaces-and-tabs': 2, // 禁止空格和 tab 的混合缩进
    'no-debugger': 2, //禁止有debugger
    'space-infix-ops': 2, // 要求操作符周围有空格
    'space-before-blocks': 2, // 要求语句块之前有空格
    'jsx-quotes': 'off', // JSX属性不使用双引号
    'import/first': 0, // 消除绝对路径必须要在相对路径前引入的问题
  },
}
