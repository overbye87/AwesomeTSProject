module.exports = {
  root: true,
  extends: [
    // '@react-native-community/eslint-config',
    // 'airbnb-base',
    'eslint:recommended',
    // 'plugin:react/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'prettier/prettier': 0,
      },
    },
  ],
};
