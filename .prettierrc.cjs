module.exports = {
    trailingComma: 'es5',
    tabWidth: 4,
    semi: true,
    singleQuote: true,
    printWidth: 100,
    bracketSameLine: true,
    importOrder: [
        '(index.scss)$',
        'react',
        '<THIRD_PARTY_MODULES>',
        '^assets/(.*)$|^auth/(.*)$|^core/(.*)$|^shared/(.*)$',
        '^\\.\\./?(.*)$',
        '(.module.scss)$',
    ],
    importOrderSeparation: false,
    importOrderSortSpecifiers: true,
};
