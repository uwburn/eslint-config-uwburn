module.exports = {
  env: {
    es6: true,
    node: true,
    "jest/globals": true
  },
  globals: {
    "BigInt": true
  },
  extends: "eslint:recommended",
  plugins: [
    "jest"
  ],
  parserOptions: {
    "ecmaVersion": 2022
  },
  rules: {
    "indent": [
      "warn",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "warn",
      "double"
    ],
    "semi": [
      "error",
      "always"
    ],
    "no-var": [
      "warn"
    ],
    "strict": [
      "error"
    ],
    "no-console": [
      "off"
    ],
    "brace-style": [
      "warn",
      "stroustrup",
      { "allowSingleLine": true }
    ],
    "no-constant-condition": [
      "off"
    ],
    "space-before-function-paren": [
      "warn",
      {
        "named": "never",
        "anonymous": "never",
        "asyncArrow": "always"
      }
    ],
    "space-in-parens": [
      "warn"
    ],
    "keyword-spacing": [
      "warn"
    ],
    "space-before-blocks": [
      "warn"
    ],
    "comma-spacing": [
      "warn"
    ],
    "array-bracket-spacing": [
      "warn"
    ],
    "comma-style": [
      "warn"
    ],
    "space-unary-ops": [
      "warn"
    ],
    "key-spacing": [
      "warn"
    ],
    "object-curly-spacing": [
      "warn",
      "always"
    ],
    "object-property-newline": [
      "warn", 
      {
        "allowAllPropertiesOnSameLine": true 
      }
    ],
    "no-multiple-empty-lines": [
      "warn"
    ],
    "no-trailing-spaces": [
      "warn"
    ],
    "no-multi-spaces": [
      "warn"
    ],
    "comma-dangle": [
      "error"
    ]
  }
};