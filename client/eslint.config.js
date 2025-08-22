import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { globalIgnores } from 'eslint/config';

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      'arrow-parens': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',
      'jsx-a11y/label-has-associated-control': 'off',
      'jsx-a11y/anchor-is-valid': 'off',
      'no-underscore-dangle': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-var': 'warn',
      camelcase: 'off',
      'prefer-const': 'warn',
      'react/forbid-prop-types': 'off',
      'react/jsx-filename-extension': 'off',
      'react/jsx-one-expression-per-line': 'off',
      'react/prop-types': 'off',
      'react/no-children-prop': 'off',
      'object-curly-newline': 'off',
      'linebreak-style': 'off',
      'no-param-reassign': 'off',
      'no-use-before-define': 'off',
      quotes: 'off',
      'import/no-unresolved': 'off',
      'import/order': 'off',
      'arrow-body-style': 'off',
      'implicit-arrow-linebreak': 'off',
      'template-curly-spacing': 'off', // typescript 도입 후 eslint 작동 안하는 이슈 때문,
      indent: 'off', // typescript 도입 후 eslint 작동 안하는 이슈 때문,
      'max-classes-per-file': 'off',
      'import/prefer-default-export': 'off',
      'no-return-await': 'off',
      'key-spacing': 'off',
      'no-multi-spaces': 'off',
      'react/jsx-props-no-spreading': 'off', // element props에 spread 문법 사용하지 않도록,
      'lines-between-class-members': 'off', // class의 멤버 변수는 한 칸씩 띄워져야 한다
      'no-shadow': 'off',
      'class-methods-use-this': 'off',
      'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
      'new-cap': 'off',
      'max-len': 'off',
      'react/react-in-jsx-scope': 'off',
      'no-restricted-syntax': 'off',
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
          printWidth: 80,
        },
      ],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: true,
          optionalDependencies: false,
          peerDependencies: false,
          includeTypes: true,
        },
      ],
      'import/no-cycle': 'error',
      'import/no-duplicates': 'error',
      'import/no-self-import': 'error',
      'import/no-relative-packages': 'error',
      'import/no-named-as-default': 'off',
      'react/no-unknown-property': ['error', { ignore: ['css'] }],

      'import/extensions': [
        'error',
        'ignorePackages',
        {
          ts: 'never',
          tsx: 'never',
        },
      ],
    },
  },
]);
