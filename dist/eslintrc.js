module.exports = {
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        ecmaFeatures: {
            globalReturn: false,
            impliedStrict: false,
            jsx: true,
            experimentObjectRestSpread: true,
            blockBindings: false
        }
    },
    env: {
        browser: true,
        node: true,
        es2021: true
    },
    plugins: [ "import", "node", "promise" ],
    globals: {
        document: "readonly",
        navigator: "readonly",
        window: "readonly"
    },
    rules: {
        "for-direction": "error",
        "getter-return": [ "error", {
            allowImplicit: false
        } ],
        "no-async-promise-executor": "error",
        "no-await-in-loop": "warn",
        "no-compare-neg-zero": "error",
        "no-cond-assign": [ "error", "except-parens" ],
        "no-console": "warn",
        "no-constant-condition": "error",
        "no-control-regex": "error",
        "no-debugger": "error",
        "no-dupe-args": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-empty": [ "error", {
            allowEmptyCatch: true
        } ],
        "no-empty-character-class": "error",
        "no-ex-assign": "error",
        "no-extra-boolean-cast": "error",
        "no-extra-parens": [ "error", "all", {
            conditionalAssign: true,
            returnAssign: false,
            nestedBinaryExpressions: false,
            ignoreJSX: "multi-line",
            enforceForArrowConditionals: false
        } ],
        "no-extra-semi": "error",
        "no-func-assign": "error",
        "no-inner-declarations": [ "error", "both" ],
        "no-invalid-regexp": [ "error", {
            allowConstructorFlags: [ "u", "y" ]
        } ],
        "no-irregular-whitespace": [ "error", {
            skipTemplates: true,
            skipRegExps: true,
            skipComments: false,
            skipStrings: false
        } ],
        "no-misleading-character-class": "error",
        "no-obj-calls": "error",
        "no-prototype-builtins": "error",
        "no-regex-spaces": "error",
        "no-sparse-arrays": "error",
        "no-template-curly-in-string": "error",
        "no-unexpected-multiline": "error",
        "no-unreachable": "error",
        "no-unsafe-finally": "error",
        "require-atomic-updates": "error",
        "use-isnan": "error",
        "valid-typeof": [ "error", {
            requireStringLiterals: true
        } ],
        "accessor-pairs": [ "error", {
            getWithoutSet: true,
            setWithoutGet: true
        } ],
        "array-callback-return": [ "error", {
            allowImplicit: false
        } ],
        "block-scoped-var": "error",
        "class-methods-use-this": "warn",
        complexity: [ "warn", {
            max: 10
        } ],
        "consistent-return": [ "warn", {
            treatUndefinedAsUnspecified: true
        } ],
        curly: [ "error", "multi" ],
        "default-case": "error",
        "dot-location": "off",
        "dot-notation": [ "warn", {
            allowKeywords: false
        } ],
        eqeqeq: "error",
        "guard-for-in": "error",
        "max-classes-per-file": [ "error", 1 ],
        "no-alert": "error",
        "no-caller": "error",
        "no-case-declarations": "error",
        "no-div-regex": "warn",
        "no-else-return": "off",
        "no-empty-function": [ "warn", {
            allow: [ "constructors" ]
        } ],
        "no-empty-pattern": "error",
        "no-eq-null": "error",
        "no-eval": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-extra-label": "off",
        "no-fallthrough": "error",
        "no-floating-decimal": "error",
        "no-global-assign": "error",
        "no-implicit-coercion": [ "error", {
            allow: [ "!!", "+" ]
        } ],
        "no-implicit-globals": "error",
        "no-implied-eval": "error",
        "no-invalid-this": "error",
        "no-iterator": "error",
        "no-labels": "error",
        "no-lone-blocks": "error",
        "no-loop-func": "error",
        "no-magic-numbers": [ "error", {
            ignore: [],
            ignoreArrayIndexes: true,
            enforceConst: false,
            detectObjects: false
        } ],
        "no-multi-spaces": [ "error", {
            ignoreEOLComments: false,
            exceptions: {
                Property: true
            }
        } ],
        "no-multi-str": "error",
        "no-new": "error",
        "no-new-func": "off",
        "no-new-wrappers": "error",
        "no-octal": "error",
        "no-octal-escape": "error",
        "no-param-reassign": [ "error", {
            props: true
        } ],
        "no-proto": "error",
        "no-redeclare": [ "error", {
            builtinGlobals: true
        } ],
        "no-restricted-properties": "off",
        "no-return-assign": [ "error", "always" ],
        "no-return-await": "error",
        "no-script-url": "error",
        "no-self-assign": "error",
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-throw-literal": "error",
        "no-unmodified-loop-condition": "error",
        "no-unused-expressions": "error",
        "no-unused-labels": "error",
        "no-useless-call": "error",
        "no-useless-catch": "error",
        "no-useless-concat": "error",
        "no-useless-escape": "error",
        "no-useless-return": "error",
        "no-void": "warn",
        "no-warning-comments": "off",
        "no-with": "error",
        "prefer-named-capture-group": "warn",
        "prefer-promise-reject-errors": [ "error", {
            allowEmptyReject: false
        } ],
        radix: [ "error", "always" ],
        "require-await": "error",
        "require-unicode-regexp": "error",
        "vars-on-top": "error",
        "wrap-iife": [ "error", "inside", {
            functionPrototypeMethods: true
        } ],
        yoda: [ "error", "never", {
            exceptRange: true
        } ],
        strict: "off",
        "init-declarations": [ "error", "always" ],
        "no-delete-var": "error",
        "no-label-var": "error",
        "no-shadow": [ "error", {
            builtinGlobals: true,
            hoist: "all",
            allow: []
        } ],
        "no-shadow-restricted-names": "error",
        "no-undef": "error",
        "no-undef-init": "off",
        "no-undefined": "error",
        "no-unused-vars": [ "error", {
            vars: "all",
            args: "after-used",
            ignoreRestSiblings: true,
            caughtErrors: "all"
        } ],
        "no-use-before-define": [ "error", {
            functions: true,
            classes: true,
            variables: true
        } ],
        "callback-return": "error",
        "global-require": "error",
        "handle-callback-err": [ "error", "^.*(e|E)rr" ],
        "no-buffer-constructor": "error",
        "no-mixed-requires": [ "warn", {
            grouping: false,
            allowCall: false
        } ],
        "no-new-require": "error",
        "no-path-concat": "error",
        "no-process-env": "warn",
        "no-process-exit": "warn",
        "no-restricted-modules": "off",
        "no-sync": "warn",
        "array-bracket-newline": [ "error", {
            multiline: true,
            minItems: null
        } ],
        "array-bracket-spacing": [ "error", "never" ],
        "array-element-newline": [ "error", {
            multiline: true,
            minItems: null
        } ],
        "block-spacing": [ "error", "never" ],
        "brace-style": [ "error", "1tbs", {
            allowSingleLine: false
        } ],
        camelcase: [ "error", {
            properties: "always",
            ignoreDestructuring: false
        } ],
        "capitalized-comments": [ "warn", "always", {
            ignoreInlineComments: false,
            ignoreConsecutiveComments: false
        } ],
        "comma-dangle": [ "error", {
            arrays: "only-multiline",
            objects: "only-multiline",
            imports: "never",
            exports: "never",
            functions: "never"
        } ],
        "comma-spacing": [ "error", {
            before: false,
            after: true
        } ],
        "comma-style": [ "error", "last", {
            exceptions: {
                ArrayExpression: false,
                ArrayPattern: false,
                ArrowFunctionExpression: false,
                CallExpression: false,
                FunctionDeclaration: false,
                FunctionExpression: false,
                ImportDeclaration: false,
                ObjectExpression: false,
                ObjectPattern: false,
                VariableDeclaration: false,
                NewExpression: false
            }
        } ],
        "computed-property-spacing": [ "error", "never" ],
        "consistent-this": "off",
        "eol-last": [ "error", "always" ],
        "func-call-spacing": [ "error", "never" ],
        "func-name-matching": "off",
        "func-names": [ "warn", "as-needed", {
            generators: "always"
        } ],
        "func-style": [ "warn", "expression" ],
        "function-paren-newline": [ "error", "consistent" ],
        "id-blacklist": "off",
        "id-length": [ "warn", {
            min: 2,
            max: 25,
            properties: "always"
        } ],
        "id-match": "off",
        "implicit-arrow-linebreak": [ "error", "beside" ],
        indent: [ "error", "tab" ],
        "jsx-quotes": [ "error", "prefer-double" ],
        "key-spacing": [ "error", {
            singleLine: {
                beforeColon: false,
                afterColon: true
            },
            multiLine: {
                beforeColon: false,
                afterColon: true,
                mode: "minimum",
                align: "colon"
            }
        } ],
        "keyword-spacing": [ "error", {
            before: true,
            after: true
        } ],
        "line-comment-position": [ "error", {
            position: "above"
        } ],
        "linebreak-style": "off",
        "lines-around-comment": [ "error", {
            beforeBlockComment: true,
            afterBlockComment: false,
            beforeLineComment: true,
            afterLineComment: false,
            allowBlockStart: true,
            allowBlockEnd: true,
            allowClassStart: true,
            allowClassEnd: true,
            allowObjectStart: true,
            allowObjectEnd: true,
            allowArrayStart: true,
            allowArrayEnd: true
        } ],
        "lines-between-class-members": [ "error", "always", {
            exceptAfterSingleLine: false
        } ],
        "max-depth": [ "error", 5 ],
        "max-len": [ "error", {
            code: 100,
            tabWidth: 4,
            comments: 100,
            ignoreComments: false,
            ignoreUrls: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
            ignoreRegExpLiterals: true
        } ],
        "max-lines": "off",
        "max-lines-per-function": [ "warn", {
            max: 50,
            skipBlankLines: true,
            skipComments: true,
            IIFEs: true
        } ],
        "max-nested-callbacks": [ "error", 10 ],
        "max-params": [ "warn", 5 ],
        "max-statements": "off",
        "max-statements-per-line": [ "error", {
            max: 2
        } ],
        "multiline-comment-style": [ "error", "starred-block" ],
        "multiline-ternary": [ "error", "never" ],
        "new-cap": [ "error", {
            newIsCap: true,
            capIsNew: true,
            properties: true
        } ],
        "new-parens": [ "error", "always" ],
        "newline-per-chained-call": [ "error", {
            ignoreChainWithDepth: 2
        } ],
        "no-array-constructor": "error",
        "no-bitwise": "off",
        "no-continue": "off",
        "no-inline-comments": "error",
        "no-lonely-if": "error",
        "no-mixed-operators": [ "error", {
            groups: [ [ "+", "-", "*", "/", "%", "**" ], [ "&", "|", "^", "~", "<<", ">>", ">>>" ], [ "==", "!=", "===", "!==", ">", ">=", "<", "<=" ], [ "&&", "||" ], [ "in", "instanceof" ] ],
            allowSamePrecedence: true
        } ],
        "no-mixed-spaces-and-tabs": [ "error", "smart-tabs" ],
        "no-multi-assign": "error",
        "no-multiple-empty-lines": [ "warn", {
            max: 1,
            maxBOF: 1,
            maxEOF: 1
        } ],
        "no-negated-condition": "warn",
        "no-nested-ternary": "warn",
        "no-new-object": "error",
        "no-plusplus": [ "error", {
            allowForLoopAfterthoughts: true
        } ],
        "no-restricted-syntax": "off",
        "no-tabs": [ "error", {
            allowIndentationTabs: true
        } ],
        "no-ternary": "off",
        "no-trailing-spaces": [ "error", {
            skipBlankLines: false,
            ignoreComments: false
        } ],
        "no-underscore-dangle": [ "error", {
            enforceInMethodNames: false,
            allowAfterThis: false,
            allowAfterSuper: false
        } ],
        "no-unneeded-ternary": [ "error", {
            defaultAssignment: false
        } ],
        "no-whitespace-before-property": "error",
        "nonblock-statement-body-position": [ "error", "beside" ],
        "object-curly-newline": [ "error", {
            multiline: true
        } ],
        "object-curly-spacing": [ "error", "always", {
            objectsInObjects: true,
            arraysInObjects: true
        } ],
        "object-property-newline": [ "error", {
            allowMultiplePropertiesPerLine: false
        } ],
        "one-var": [ "error", {
            initialized: "consecutive",
            uninitialized: "always"
        } ],
        "one-var-declaration-per-line": [ "error", "initializations" ],
        "operator-assignment": [ "warn", "never" ],
        "operator-linebreak": [ "error", "before", {
            overrides: {
                "=": "none"
            }
        } ],
        "padded-blocks": [ "error", "never" ],
        "padding-line-between-statements": "off",
        "prefer-object-spread": "warn",
        "quote-props": [ "error", "consistent" ],
        quotes: [ "error", "single", {
            avoidEscape: true,
            allowTemplateLiterals: true
        } ],
        semi: [ "error", "always", {
            omitLastInOneLineBlock: true
        } ],
        "semi-spacing": [ "error", {
            before: false,
            after: true
        } ],
        "semi-style": [ "error", "last" ],
        "sort-keys": "off",
        "sort-vars": "off",
        "space-before-blocks": [ "error", "always" ],
        "space-before-function-paren": [ "error", {
            anonymous: "never",
            named: "never",
            asyncArrow: "always"
        } ],
        "space-in-parens": [ "error", "never" ],
        "space-infix-ops": [ "error", {
            int32Hint: true
        } ],
        "space-unary-ops": [ "error", {
            words: true,
            nonwords: false
        } ],
        "spaced-comment": [ "error", "always" ],
        "switch-colon-spacing": [ "error", {
            after: true,
            before: false
        } ],
        "template-tag-spacing": [ "error", "never" ],
        "unicode-bom": "off",
        "wrap-regex": "off",
        "arrow-body-style": [ "error", "as-needed" ],
        "arrow-parens": [ "error", "as-needed", {
            requireForBlockBody: true
        } ],
        "arrow-spacing": [ "error", {
            before: true,
            after: true
        } ],
        "constructor-super": "error",
        "generator-star-spacing": [ "error", {
            before: true,
            after: false
        } ],
        "no-class-assign": "error",
        "no-confusing-arrow": [ "error", {
            allowParens: true
        } ],
        "no-const-assign": "error",
        "no-dupe-class-members": "error",
        "no-duplicate-imports": [ "error", {
            includeExports: true
        } ],
        "no-new-symbol": "error",
        "no-restricted-imports": "off",
        "no-this-before-super": "error",
        "no-useless-computed-key": "error",
        "no-useless-constructor": "error",
        "no-useless-rename": [ "error", {
            ignoreDestructuring: false,
            ignoreImport: false,
            ignoreExport: false
        } ],
        "no-var": "error",
        "object-shorthand": [ "error", "properties", {
            avoidQuotes: true
        } ],
        "prefer-arrow-callback": "off",
        "prefer-const": [ "error", {
            destructuring: "all",
            ignoreReadBeforeAssign: false
        } ],
        "prefer-destructuring": "off",
        "prefer-numeric-literals": "off",
        "prefer-rest-params": "warn",
        "prefer-spread": "error",
        "prefer-template": "error",
        "require-yield": "error",
        "rest-spread-spacing": [ "error", "never" ],
        "sort-imports": "off",
        "symbol-description": "warn",
        "template-curly-spacing": [ "error", "never" ],
        "yield-star-spacing": [ "error", {
            before: false,
            after: true
        } ],
        "import/export": "error",
        "import/first": "error",
        "import/no-absolute-path": [ "error", {
            esmodule: true,
            commonjs: true,
            amd: false
        } ],
        "import/no-duplicates": "error",
        "import/no-named-default": "error",
        "import/no-webpack-loader-syntax": "error",
        "node/handle-callback-err": [ "error", "^(err|error)$" ],
        "node/no-callback-literal": "error",
        "node/no-deprecated-api": "error",
        "node/no-exports-assign": "error",
        "node/no-new-require": "error",
        "node/no-path-concat": "error",
        "node/process-exit-as-throw": "error",
        "promise/param-names": "error"
    }
};