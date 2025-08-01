module.exports = {
    extends: [
        'stylelint-config-standard-scss', // базовые правила
        'stylelint-config-prettier-scss' // базовые правила
    ],
    rules: {
        'color-hex-length': 'long',
        'scss/at-rule-no-unknown': null,
        'lightness-notation': null,
        'hue-degree-notation': null,
        'no-empty-source': null,
        'declaration-empty-line-before': null
    }
}
