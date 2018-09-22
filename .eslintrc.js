module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true
  },
  "extends": [
    "eslint:recommended"
  ],
  "globals": {
  },
  "parserOptions": {
    "ecmaVersion": 8,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true
    },
    "sourceType": "module"
  },
  "plugins": [
  ],
  "rules": {
    "brace-style": [
      "error",
      "stroustrup", { "allowSingleLine": true }
    ],
    "comma-spacing": [
      "error",
      { "before": false, "after": true }
    ],
    "func-call-spacing": [
      "error",
      "never"
    ],
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1,
        "FunctionDeclaration": {"body": 1, "parameters": 2},
        "FunctionExpression": {"body": 1, "parameters": 2},
        "MemberExpression": "off"
      }
    ],
    "key-spacing": [
      "error", {
        "beforeColon": false,
        "afterColon": true,
        "mode": "minimum"
      }
    ],
    "keyword-spacing": [
      "error", {}
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "no-unused-vars": [
      "error",
      { "args": "none" }
    ],
    "no-var": [ "error" ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always",
      { "omitLastInOneLineBlock": true }
    ],
    "space-before-blocks": [
      "error",
      "always"
    ],
    "space-before-function-paren": [
      "error",
      "never"
    ]
  }
};
