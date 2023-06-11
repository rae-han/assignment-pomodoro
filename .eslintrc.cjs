module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh', "simple-import-sort", "import"],
  settings: {
    // 'import/resolver': {
    //   'node': {
    //     'paths': ['src'],
    //     "extensions": [
    //       ".js",
    //       ".jsx",
    //       ".ts",
    //       ".tsx",
    //     ]
    //   }
    // }
  },
  rules: {
    "import/no-unresolved": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error"
    // 'import/order': [
    //   'error',
    //   {
    //     'groups': [
    //       ['builtin', 'external'],
    //       'internal',
    //       ['parent', 'sibling'],
    //       'index'
    //     ],
    //     'newlines-between': 'always',
    //     'pathGroups': [
    //       {
    //         'pattern': '@/**',
    //         'group': 'internal',
    //         'position': 'after'
    //       }
    //     ]
    //   }
    // ],
  }
}
