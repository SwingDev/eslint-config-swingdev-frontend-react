module.exports = {
    plugins: ['@typescript-eslint', 'react-hooks'],
    extends: [
      'standard',
      'plugin:@typescript-eslint/recommended',
      'prettier/@typescript-eslint',
      'plugin:react/recommended',
      'plugin:jsx-a11y/recommended',
    ],
    globals: {
      localStorage: true,
      fetch: true,
      File: true,
      FormData: true
    },
    rules: {
      semi: [2, 'always'],
      'react/prop-types': 0,
      '@typescript-eslint/interface-name-prefix': 1,
      '@typescript-eslint/ban-ts-ignore': 0,
      'no-useless-constructor': 0,
      'space-before-function-paren': [
        'error',
        {
          anonymous: 'never',
          named: 'never',
          asyncArrow: 'always'
        }
      ],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
      'react/jsx-wrap-multilines': [2, {
        "declaration": "parens",
        "assignment": "parens",
        "return": "parens",
        "arrow": "parens",
        "condition": "parens",
        "logical": "parens",
        "prop": "parens"
      }]
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  };
  