module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ["plugin:@typescript-eslint/all"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module"
  },
  plugins: ["@typescript-eslint", "@typescript-eslint/tslint"],
  rules: {
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/ban-ts-ignore": "error",
    "@typescript-eslint/ban-types": "error",
    "@typescript-eslint/class-name-casing": "error",
    "@typescript-eslint/consistent-type-assertions": "error",
    "@typescript-eslint/consistent-type-definitions": "error",
    "@typescript-eslint/explicit-member-accessibility": [
      "off",
      {
        accessibility: "explicit"
      }
    ],
    "@typescript-eslint/indent": [
      "error",
      4,
      {
        CallExpression: {
          arguments: "first"
        },
        ArrayExpression: "first",
        ObjectExpression: "first",
        FunctionDeclaration: {
          parameters: "first"
        },
        FunctionExpression: {
          parameters: "first"
        }
      }
    ],
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        multiline: {
          delimiter: "semi",
          requireLast: true
        },
        singleline: {
          delimiter: "semi",
          requireLast: false
        }
      }
    ],
    "@typescript-eslint/member-ordering": "error",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-extraneous-class": "error",
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/no-for-in-array": "error",
    "@typescript-eslint/no-inferrable-types": "error",
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/no-param-reassign": "error",
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-require-imports": "error",
    "@typescript-eslint/no-this-alias": "error",
    "@typescript-eslint/no-unnecessary-qualifier": "error",
    "@typescript-eslint/no-unnecessary-type-arguments": "error",
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    "@typescript-eslint/no-use-before-define": "error",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/prefer-namespace-keyword": "error",
    "@typescript-eslint/prefer-readonly": "error",
    "@typescript-eslint/promise-function-async": "error",
    "@typescript-eslint/quotes": ["error", "single"],
    "@typescript-eslint/require-await": "error",
    "@typescript-eslint/restrict-plus-operands": "error",
    "@typescript-eslint/semi": ["error", "always"],
    "@typescript-eslint/strict-boolean-expressions": "error",
    "@typescript-eslint/triple-slash-reference": "error",
    "@typescript-eslint/type-annotation-spacing": "error",
    "@typescript-eslint/unbound-method": "error",
    "@typescript-eslint/unified-signatures": "error",
    "arrow-body-style": ["error", "always"],
    "arrow-parens": ["off", "as-needed"],
    camelcase: "error",
    "capitalized-comments": ["error", "always"],
    "class-methods-use-this": "error",
    "comma-dangle": "off",
    complexity: "error",
    "constructor-super": "error",
    curly: "error",
    "default-case": "error",
    "dot-notation": "error",
    "eol-last": "error",
    eqeqeq: ["error", "always"],
    "guard-for-in": "error",
    "id-blacklist": [
      "error",
      "any",
      "Number",
      "number",
      "String",
      "string",
      "Boolean",
      "boolean",
      "Undefined",
      "undefined"
    ],
    "id-match": "error",
    "import/no-default-export": "error",
    "import/no-deprecated": "warn",
    "import/no-extraneous-dependencies": "error",
    "import/no-internal-modules": "error",
    "import/no-unassigned-import": "error",
    "import/order": "off",
    "jsdoc/no-types": "error",
    "linebreak-style": ["error", "unix"],
    "max-classes-per-file": "off",
    "max-len": [
      "error",
      {
        code: 120
      }
    ],
    "max-lines": ["error", 1000],
    "new-parens": "error",
    "newline-per-chained-call": "error",
    "no-bitwise": "error",
    "no-caller": "error",
    "no-cond-assign": "error",
    "no-console": [
      "error",
      {
        allow: [
          "log",
          "warn",
          "dir",
          "timeLog",
          "assert",
          "clear",
          "count",
          "countReset",
          "group",
          "groupEnd",
          "table",
          "dirxml",
          "error",
          "groupCollapsed",
          "Console",
          "profile",
          "profileEnd",
          "timeStamp",
          "context"
        ]
      }
    ],
    "no-debugger": "error",
    "no-duplicate-case": "error",
    "no-duplicate-imports": "error",
    "no-empty": "off",
    "no-eval": "error",
    "no-extra-bind": "error",
    "no-fallthrough": "error",
    "no-irregular-whitespace": "error",
    "no-magic-numbers": "error",
    "no-multiple-empty-lines": "off",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-null/no-null": "error",
    "no-plusplus": [
      "error",
      {
        allowForLoopAfterthoughts: true
      }
    ],
    "no-redeclare": "error",
    "no-restricted-imports": ["error", "rxjs/Rx"],
    "no-restricted-syntax": ["error", "ForInStatement"],
    "no-return-await": "error",
    "no-sequences": "error",
    "no-shadow": [
      "error",
      {
        hoist: "all"
      }
    ],
    "no-sparse-arrays": "error",
    "no-template-curly-in-string": "error",
    "no-throw-literal": "error",
    "no-trailing-spaces": "error",
    "no-undef-init": "error",
    "no-underscore-dangle": "error",
    "no-unsafe-finally": "error",
    "no-unused-expressions": "error",
    "no-unused-labels": "error",
    "no-useless-constructor": "error",
    "no-var": "error",
    "no-void": "error",
    "object-shorthand": "error",
    "one-var": ["off", "never"],
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: "*",
        next: "return"
      }
    ],
    "prefer-arrow/prefer-arrow-functions": "error",
    "prefer-const": "error",
    "prefer-object-spread": "error",
    "prefer-template": "error",
    "quote-props": ["error", "as-needed"],
    radix: "error",
    "space-before-function-paren": [
      "error",
      {
        anonymous: "never",
        asyncArrow: "always",
        named: "never"
      }
    ],
    "space-in-parens": ["error", "always"],
    "spaced-comment": "error",
    "unicorn/filename-case": "error",
    "use-isnan": "error",
    yoda: "error",
    "@typescript-eslint/tslint/config": [
      "error",
      {
        rules: {
          "comment-type": [true, "singleline", "multiline", "doc", "directive"],
          "completed-docs": true,
          "component-class-suffix": [true, "Page", "Component"],
          "component-selector": [true, "element", "app", "page", "kebab-case"],
          "directive-class-suffix": true,
          "directive-selector": [true, "attribute", "app", "camelCase"],
          encoding: true,
          "import-spacing": true,
          "invalid-void": true,
          "jsdoc-format": [true, "check-multiline-start"],
          "match-default-export-name": true,
          "no-boolean-literal-compare": true,
          "no-default-import": true,
          "no-dynamic-delete": true,
          "no-host-metadata-property": true,
          "no-inferred-empty-object-type": true,
          "no-input-rename": true,
          "no-inputs-metadata-property": true,
          "no-mergeable-namespace": true,
          "no-null-undefined-union": true,
          "no-output-on-prefix": true,
          "no-output-rename": true,
          "no-promise-as-boolean": true,
          "no-reference-import": true,
          "no-restricted-globals": true,
          "no-tautology-expression": true,
          "no-unnecessary-callback-wrapper": true,
          "no-unsafe-any": true,
          "number-literal-format": true,
          "one-line": [
            true,
            "check-catch",
            "check-else",
            "check-finally",
            "check-open-brace",
            "check-whitespace"
          ],
          "prefer-conditional-expression": true,
          "prefer-method-signature": true,
          "prefer-switch": true,
          "prefer-while": true,
          "return-undefined": true,
          "static-this": true,
          "strict-comparisons": true,
          "strict-string-expressions": true,
          "strict-type-predicates": true,
          "switch-final-break": true,
          typedef: [
            true,
            "call-signature",
            "parameter",
            "arrow-parameter",
            "property-declaration",
            "variable-declaration",
            "variable-declaration-ignore-function",
            "member-variable-declaration",
            "object-destructuring",
            "array-destructuring"
          ],
          "unnecessary-else": true,
          "use-lifecycle-interface": true,
          "use-pipe-transform-interface": true,
          whitespace: [
            true,
            "check-branch",
            "check-decl",
            "check-operator",
            "check-module",
            "check-separator",
            "check-type",
            "check-typecast",
            "check-preblock",
            "check-type-operator",
            "check-rest-spread"
          ]
        }
      }
    ]
  }
};
