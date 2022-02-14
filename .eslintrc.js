module.exports = {
  root: true, // 停止在父级目录中寻找
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', 'prettier'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    // off：视为关闭  warn：视为警告 error：视为错误
    'no-unused-vars': ['warn', { args: 'none' }],

    // 禁止使用debugger
    'no-debugger': 'off',

    // 要求使用 === 和 !==
    eqeqeq: 'warn',

    // 禁止出现空函数
    'no-empty-function': 'off',

    // 箭头函数的箭头前后使用一致的空格
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],

    // 使用 let 或 const 而不是 var
    'no-var': 'error',

    // 在语句间填充空行
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'var', next: 'return' },
      { blankLine: 'always', prev: '*', next: 'return' },
    ],

    // 函数圆括号之前有一个空格
    'space-before-function-paren': 'error',

    // 逗号之间有空格
    'comma-spacing': 'warn',

    // 在注释前有空白
    'spaced-comment': 'error',

    // 出现多行空行
    'no-multiple-empty-lines': 'error',

    // 操作符周围有空格
    'space-infix-ops': 'error',

    'key-spacing': 'error',

    // 注释开头结尾有相同的换行
    // 'vue/html-comment-content-newline': 'warn',

    // 'vue/no-empty-component-block': 'warn',
  },
  globals: {
    // 定义在globals中的变量不允许修改
  },
}
