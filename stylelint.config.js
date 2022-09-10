module.exports = {
  extends: 'stylelint-config-recommended-vue',
  rules: {
    'function-no-unknown': [
      true,
      { ignoreFunctions: ['color-stop', '-webkit-gradient'] },
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
        ],
      },
    ],
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null,
  },
}
