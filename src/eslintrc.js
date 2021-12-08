module.exports = {
    "parserOptions": {
        // 使用最新的es语法
        "ecmaVersion": 2021,
        // cjs模块
        "sourceType": "module",
        "ecmaFeatures": {
            // 不允许全局作用域下return
            "globalReturn": false,
            // 不开启strict模式
            "impliedStrict": false,
            // 默认支持jsx语法
            "jsx": true,
            // 开启实验性功能（剩余操作符）
            "experimentObjectRestSpread": true,
            // 不允许块作用域
            "blockBindings": false
        }
    },

    // 一个环境定义了一组预定义的全局变量
    // 参见：http://eslint.cn/docs/user-guide/configuring#specifying-environments
    "env": {
        // 浏览器环境中的全局变量。
        "browser": true,
        // Node.js 全局变量和 Node.js 作用域
        "node": true,

        "es2021": true,
    },

    "plugins": [
        // 默认使用的插件
        "import",
        "node",
        "promise"
    ],

    // 处理器，无
    // "processor": "xx-plugin/xx-processor",

    // 使用eslint默认解析器
    // "parser": "Espree",

    // 为特定的类型文件指定处理器，请使用overrides与processor组合
    // "overrides": [
    //     {
    //         "files": ["*.md"],
    //         "processor": "a-plugin/markdown"
    //     }
    // ],

    // 开放访问当前源文件内未定义的变量
    "globals": {
        // 设置为仅可读
        "document": "readonly",
        "navigator": "readonly",
        "window": "readonly"
    },

    /**
     * off => 0 关闭规则
     * warn => 1 开启规则，使用警告级别的错误（不会导致程序退出）
     * error => 开启规则，使用错误级别的错误（当被触发，程序会退出）
     */
    "rules": {
        // ======== Possible Errors ========
        // for循环中更新子句的计数器应朝着正确的方向移动
        "for-direction": "error",
        // getter应有return语句 且必须有return值
        "getter-return": ["error", {
            "allowImplicit": false
        }],
        // 传给Promise的executor函数不允许使用async
        "no-async-promise-executor": "error",
        // 不建议在循环中使用async-await
        "no-await-in-loop": "warn",
        // 禁止与 -0 进行比较
        "no-compare-neg-zero": "error",
        // 禁止在条件语句中出现赋值操作符（被括号包裹的赋值语句除外，eg：while((a = b - 1) !== null){}）
        "no-cond-assign": ["error", "except-parens"],
        // 不建议使用console进行日志输出（应由项目具体配置是否禁用）
        "no-console": "warn",
        // 禁止在条件中使用常量表达式
        "no-constant-condition": "error",
        // 禁止在正则表达式中使用控制字符，在 ASCII 中，0-31 范围内的控制字符是特殊的、不可见的字符
        "no-control-regex": "error",
        // 禁用 debugger
        "no-debugger": "error",
        // 禁止函数参数重名
        "no-dupe-args": "error",
        // 禁止对象字面量中出现重复的 key
        "no-dupe-keys": "error",
        // 禁止重复 case 标签
        "no-duplicate-case": "error",
        // 禁止空的块语句 （可只包含注释，或空的catch语句）
        "no-empty": ["error", {
            "allowEmptyCatch": true
        }],
        // 禁止在正则表达式中出现空字符集
        "no-empty-character-class": "error",
        // 禁止对 catch 子句中的异常重新赋值
        "no-ex-assign": "error",
        // 禁止不必要的布尔类型转换(eg: !!true)
        "no-extra-boolean-cast": "error",
        // 禁止冗余的括号
        // see: http://eslint.cn/docs/rules/no-extra-parens
        "no-extra-parens": ["error", "all", {
            "conditionalAssign": true,
            "returnAssign": false,
            "nestedBinaryExpressions": false,
            "ignoreJSX": "multi-line",
            "enforceForArrowConditionals": false
        }],
        // 禁用不必要的分号
        "no-extra-semi": "error",
        // 禁止对 function 声明重新赋值
        "no-func-assign": "error",
        // 禁止在嵌套的语句块中出现变量或 function 声明
        "no-inner-declarations": ["error", "both"],
        // 禁止 RegExp 构造函数中存在无效的正则表达式字符串(允许标志参数)
        "no-invalid-regexp": ["error", {
            "allowConstructorFlags": ["u", "y"]
        }],
        // 禁止不规则的空白(类似于混合 tab 和空格的情况)
        "no-irregular-whitespace": ["error", {
            // 允许在模板字面量中出现任何空白字符
            "skipTemplates": true,
            // 允许在正则表达式中出现任何空白字符
            "skipRegExps": true,
            // 不允许在注释中出现任何空白字符
            "skipComments": false,
            // 不允许在字符串字面量中出现任何空白字符
            "skipStrings": false
        }],
        // 不允许在字符类语法中出现由多个代码点组成的字符
        "no-misleading-character-class": "error",
        // 禁止将 Math、JSON 和 Reflect 对象当作函数进行调用
        "no-obj-calls": "error",
        // 禁止直接在对象实例上调用 Object.prototype 的一些方法
        // prefer：Object.prototype.hasOwnProperty.call、Object.prototype.isPrototypeOf.call、{}.propertyIsEnumerable.call
        "no-prototype-builtins": "error",
        // 禁止正则表达式字面量中出现多个空格
        "no-regex-spaces": "error",
        // 禁用稀疏数组(eg: [,1,])
        "no-sparse-arrays": "error",
        // 禁止在常规字符串中出现模板字面量占位符语法(即常规字符串不要长得像模版字符串)
        "no-template-curly-in-string": "error",
        // 禁止使用令人困惑的多行表达式
        "no-unexpected-multiline": "error",
        // 禁止在 return、throw、continue 和 break 语句后出现不可达代码
        "no-unreachable": "error",
        // 禁止在 finally 语句块中出现控制流语句（return语句）
        "no-unsafe-finally": "error",
        // 禁止由于 await 或 yield的使用而可能导致出现竞态条件的赋值
        "require-atomic-updates": "error",
        // 要求调用 isNaN()检查 NaN 
        "use-isnan": "error",
        // 强制 typeof 表达式与有效的字符串进行比较
        "valid-typeof": ["error", {
            "requireStringLiterals": true
        }],
        // ======= Best Practices =======
        // getter与setter须成对出现
        "accessor-pairs": ["error", {
            "getWithoutSet": true,
            "setWithoutGet": true
        }],
        // 数组方法须显式返回值
        "array-callback-return": ["error", {
            "allowImplicit": false
        }],
        // 避免变量在其被定义的范围之外被使用
        "block-scoped-var": "error",
        // 当类实例方法不使用this时进行警告
        "class-methods-use-this": "warn",
        // 圈复杂度数量上表现为覆盖所有代码的独立现行路径条数。
        // 当代码的条件判断超过10层时进行警告（说明需进行代码优化）
        "complexity": ["warn", {
            "max": 10
        }],
        // 允许函数不同条件分支返回不同类型的值
        "consistent-return": ["warn", {
            "treatUndefinedAsUnspecified": true
        }],
        // 当代码块只有一条语句时，JavaScript 允许省略大括号。其他情况则报错。
        "curly": ["error", "multi"],
        // 要求 Switch 语句中有 Default 分支
        "default-case": "error",
        // 强制在点号之前或之后换行(off) 
        "dot-location": "off",
        // 不强制只能使用点号来访问属性
        "dot-notation": ["warn", {
            "allowKeywords": false
        }],
        // 要求使用 === 和 !==
        "eqeqeq": "error",
        // 防止迭代原型链上的key/value
        "guard-for-in": "error",
        // 强制每个文件只能包含一个特定数量的类，没有更多
        "max-classes-per-file": ["error", 1],
        // 禁用 Alert
        "no-alert": "error",
        // 禁用 caller 或 callee(与代码优化相关)
        "no-caller": "error",
        // 禁止在 case 或 default 子句中出现词法声明
        "no-case-declarations": "error",
        // 对用看起来像除法的正则表达式予以警告
        "no-div-regex": "warn",
        // 禁止在 else 前有 return
        "no-else-return": "off",
        // 该规则旨在消除空函数。如果一个函数包含了一条注释，它将不会被认为有问题。
        // 构造函数允许为空
        "no-empty-function": ["warn", {
            "allow": ["constructors"]
        }],
        // 禁止使用空解构模式
        "no-empty-pattern": "error",
        // 与 null 进行比较时必须使用 ===
        "no-eq-null": "error",
        // 禁用 eval()
        "no-eval": "error",
        // 禁止扩展原生类型
        "no-extend-native": "error",
        // 禁止不必要的函数绑定 
        "no-extra-bind": "error",
        // 禁用不必要的标签 TODO: 使用场景不多，暂不引入
        "no-extra-label": "off",
        // 禁止多个case逻辑同时生效（即case中没有break/return/throw）
        "no-fallthrough": "error",
        // 禁止数字字面量中使用前导和末尾小数点
        // 在 JavaScript 中，浮点值会包含一个小数点，没有要求小数点之前或之后必须有一个数字。
        "no-floating-decimal": "error",
        // 禁止对原生对象或只读的全局对象进行赋值
        "no-global-assign": "error",
        // 使用较短的符号实现类型转换时进行警告(允许使用!!进行布尔转换，以及"+"进行数字、字符转换)
        "no-implicit-coercion": ["error", {
            "allow": ["!!", "+"]
        }],
        // 禁止在全局范围内使用变量声明和 function 声明
        // 该规则不适用于 ES 和 CommonJS 的模块，因为它们有自己的模块作用域。
        "no-implicit-globals": "error",
        // 禁用隐式的eval() eg: setTimeout("alert('Hi!');", 100);
        "no-implied-eval": "error",
        // 禁止 this 关键字在类或类对象之外出现
        "no-invalid-this": "error",
        // 禁用__iterator__ 迭代器
        "no-iterator": "error",
        // 禁用标签语句（JavaScript 中的标签语句连同 break 和 continue 一样用来控制循环流程）
        "no-labels": "error",
        // 禁用不必要的嵌套块
        "no-lone-blocks": "error",
        // 禁止循环中存在函数(消除潜在的闭包隐患)
        "no-loop-func": "error",
        // 该规则旨在确保将具体的数字声明为意义明确的常量，从而使代码更加可读并且易于重构
        "no-magic-numbers": ["error", {
            "ignore": [],
            "ignoreArrayIndexes": true,
            "enforceConst": false,
            "detectObjects": false
        }],
        // 禁止出现多个空格 (对象属性除外，用于对齐)
        "no-multi-spaces": ["error", {
            "ignoreEOLComments": false,
            "exceptions": {
                "Property": true
            }
        }],
        // 禁止使用多行字符串
        "no-multi-str": "error",
        // 此规则旨在通过禁止使用 new 关键字调用构造函数但却不将结果赋值给一个变量来保持一致性和约定。
        "no-new": "error",
        // 禁用Function构造函数 (沙箱可能需要，故不启用)
        "no-new-func": "off",
        // 禁止原始包装实例
        "no-new-wrappers": "error",
        // 禁用八进制字面量
        "no-octal": "error",
        // 禁止在字符串中使用八进制转义序列
        "no-octal-escape": "error",
        // 禁止对 function 的参数进行重新赋值
        "no-param-reassign": ["error", {
            "props": true
        }],
        // 禁用__proto__
        "no-proto": "error",
        // 禁止重新声明变量
        "no-redeclare": ["error", {
            "builtinGlobals": true
        }],
        // 禁止使用对象的某些属性(由具体项目决定)
        "no-restricted-properties": "off",
        // 禁止在返回语句中赋值(eg: return foo = bar + 2;)
        "no-return-assign": ["error", "always"],
        // 禁用不必要的 return await
        "no-return-await": "error",
        // 禁止使用 javascript: url
        "no-script-url": "error",
        // 禁止自身赋值
        "no-self-assign": "error",
        // 禁止自身比较
        "no-self-compare": "error",
        // 禁用逗号操作符
        "no-sequences": "error",
        // 禁止抛出异常字面量
        "no-throw-literal": "error",
        // 禁用一成不变的循环条件 
        "no-unmodified-loop-condition": "error",
        // 禁止出现未使用过的表达式
        "no-unused-expressions": "error",
        // 禁用出现未使用过的标签
        "no-unused-labels": "error",
        // 禁止不必要的 .call() 和 .apply()  性能相关
        "no-useless-call": "error",
        // 禁止不必要的 catch 子句（有finally的情况）
        "no-useless-catch": "error",
        // 禁止没有必要的字符拼接
        "no-useless-concat": "error",
        // 禁用不必要的转义字符
        "no-useless-escape": "error",
        // 禁止多余的 return 语句
        "no-useless-return": "error",
        // 使用void操作符时进行警告
        "no-void": "warn",
        // 禁用警告注释(由具体项目决定)
        "no-warning-comments": "off",
        // 禁用 with 语句（沙箱可能使用）
        "no-with": "error",
        // 建议在正则表达式中使用命名捕获组
        "prefer-named-capture-group": "warn",
        // 要求使用 Error 对象作为 Promise 拒绝的原因
        "prefer-promise-reject-errors": ["error", {
           "allowEmptyReject": false
        }],
        // 强制在 parseInt() 使用基数参数
        "radix": ["error", "always"],
        // 禁止使用不带 await 表达式的 async 函数
        "require-await": "error",
        // 强制在 RegExp 上使用 u 标志
        // 使正则表达式正确处理 UTF-16 Surrogate Pair；使正则表达式在禁用时尽早抛出语法错误 Annex B extensions
        "require-unicode-regexp": "error",
        // 要求所有的 var 声明出现在它们所在的作用域顶部
        "vars-on-top": "error",
        // 需要把立即执行的函数包裹起来
        "wrap-iife": ["error", "inside", {
            "functionPrototypeMethods": true
        }],
        // 要求或禁止 “Yoda” 条件
        "yoda": ["error", "never", {
            "exceptRange": true
        }],
        // ============ Strict Mode ============
        // 要求或禁止使用严格模式指令
        "strict": "off",
        // ============ Variables ============
        // 要求或禁止 var 声明中的初始化
        "init-declarations": ["error", "always"],
        // 禁止删除变量
        "no-delete-var": "error",
        // 不允许标签与变量同名
        "no-label-var": "error",
        // 禁用特定的全局变量(由具体项目决定)
        // "no-restricted-globals": "off",
        // 禁止变量声明与外层作用域的变量同名
        "no-shadow": ["error", {
            "builtinGlobals": true,
            "hoist": "all",
            "allow": []
        }],
        // 禁止将标识符定义为受限的名字
        "no-shadow-restricted-names": "error",
        // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
        "no-undef": "error",
        // 允许将变量初始化为 undefined
        "no-undef-init": "off",
        // 禁止将 undefined 作为标识符
        "no-undefined": "error",
        // 禁止出现未使用过的变量
        "no-unused-vars": ["error", {
            "vars": "all",
            "args": "after-used",
            "ignoreRestSiblings": true,
            "caughtErrors": "all"
        }],
        // 禁止在变量定义之前使用它们
        "no-use-before-define": ["error", {
            "functions": true,
            "classes": true,
            "variables": true
        }],
        // ====== Node.js and CommonJS ======
        // 强制数组方法的回调函数中有 return 语句
        "callback-return": "error",
        // 要求 require() 出现在顶层模块作用域中
        "global-require": "error",
        // 要求回调函数中有容错处理(当参数名匹配任何字符串中含有 err 或 Err时)
        "handle-callback-err": ["error", "^.*(e|E)rr"],
        // 禁用 Buffer() 构造函数
        "no-buffer-constructor": "error",
        // 禁止混合常规变量声明和 require 调用
        "no-mixed-requires": ["warn", {
            "grouping": false,
            "allowCall": false
        }],
        // 禁止调用 require 时使用 new 操作符
        "no-new-require": "error",
        // 禁止对 __dirname 和 __filename 进行字符串连接
        "no-path-concat": "error",
        // 阻止使用 process.env（此规则旨在阻止 process.env 的使用而避免全局依赖关系）
        "no-process-env": "warn",
        // 阻止使用 process.exit()
        "no-process-exit": "warn",
        // 禁用通过 require 加载的指定模块（由具体项目决定）
        "no-restricted-modules": "off",
        // 这条规则旨在阻止使用 Node.js 中的同步方法。（不是那么重要）
        "no-sync": "warn",
        // ###### Stylistic Issues ######
        // 在数组开括号后和闭括号前强制换行
        "array-bracket-newline": ["error", {
            "multiline": true,
            "minItems": null
        }],
        // 强制数组方括号中使用一致的空格
        "array-bracket-spacing": ["error", "never"],
        // 强制数组元素间出现换行
        "array-element-newline": ["error", {
            "multiline": true,
            "minItems": null
        }],
        // 禁止或强制在代码块中开括号前和闭括号后有空格
        "block-spacing": ["error", "never"],
        // 强制在代码块中使用一致的大括号风格
        "brace-style": ["error", "1tbs", {
            "allowSingleLine": false
        }],
        // 要求使用骆驼拼写法(强制属性名称为驼峰风格,检查解构标识符)
        "camelcase": ["error", {
            "properties": "always",
            "ignoreDestructuring": false
        }],
        // 强制或禁止对注释的第一个字母大写
        "capitalized-comments": ["warn", "always", {
            "ignoreInlineComments": false,
            "ignoreConsecutiveComments": false
        }],
        // 要求或禁止末尾逗号
        "comma-dangle": ["error", {
            "arrays": "only-multiline",
            "objects": "only-multiline",
            "imports": "never",
            "exports": "never",
            "functions": "never"
        }],
        // 强制在逗号前后使用一致的空格
        "comma-spacing": ["error", {
            "before": false,
            "after": true
        }],
        // 强制使用一致的逗号风格
        "comma-style": ["error", "last", {
            "exceptions": {
                "ArrayExpression": false,
                "ArrayPattern": false,
                "ArrowFunctionExpression": false,
                "CallExpression": false,
                "FunctionDeclaration": false,
                "FunctionExpression": false,
                "ImportDeclaration": false,
                "ObjectExpression": false,
                "ObjectPattern": false,
                "VariableDeclaration": false,
                "NewExpression": false,
            }
        }],
        // 强制在计算的属性的方括号中使用一致的空格
        "computed-property-spacing": ["error", "never"],
        // 当获取当前执行环境的上下文时，强制使用一致的命名
        "consistent-this": "off",
        // 要求或禁止文件末尾存在空行
        "eol-last": ["error", "always"],
        // 要求或禁止在函数标识符和其调用之间有空格
        "func-call-spacing": ["error", "never"],
        // 要求函数名与赋值给它们的变量名或属性名相匹配
        "func-name-matching": "off",
        // 要求或禁止使用命名的 function 表达式
        "func-names": ["warn", "as-needed", {
            "generators": "always"
        }],
        // 强制一致地使用 function 声明或表达式(先声明，后使用)
        "func-style": ["warn", "expression"],
        // 强制在函数括号内使用一致的换行
        "function-paren-newline": ["error", "consistent"],
        // 禁用指定的标识符
        "id-blacklist": "off",
        // 强制标识符的最小和最大长度
        "id-length": ["warn", {
            "min": 2,
            "max": 25,
            "properties": "always",
        }],
        // 要求标识符匹配一个指定的正则表达式
        "id-match": "off",
        // 强制隐式返回的箭头函数体的位置
        "implicit-arrow-linebreak": ["error", "beside"],
        // 强制使用一致的缩进
        "indent": ["error", "tab"],
        // 强制在 JSX 属性中一致地使用双引号或单引号
        "jsx-quotes": ["error", "prefer-double"],
        // 强制在对象字面量的属性中键和值之间使用一致的间距
        "key-spacing": ["error", {
            "singleLine": {
                "beforeColon": false,
                "afterColon": true,
            },
            "multiLine": {
                "beforeColon": false,
                "afterColon": true,
                "mode": "minimum",
                "align": "colon"
            }
        }],
        // 强制在关键字前后使用一致的空格
        "keyword-spacing": ["error", {
            "before": true,
            "after": true,
        }],
        // 强制行注释的位置(强制行注释只在代码上方，单独成行)
        "line-comment-position": ["error", {
            "position": "above"
        }],
        // 强制使用一致的换行风格
        "linebreak-style": "off",
        // 要求在注释周围有空行(块注释、行注释前须有空行)
        "lines-around-comment": ["error", {
            "beforeBlockComment": true,
            "afterBlockComment": false,
            "beforeLineComment": true,
            "afterLineComment": false,
            "allowBlockStart": true,
            "allowBlockEnd": true,
            "allowClassStart": true,
            "allowClassEnd": true,
            "allowObjectStart": true,
            "allowObjectEnd": true,
            "allowArrayStart": true,
            "allowArrayEnd": true,
        }],
        // 要求或禁止类成员之间出现空行
        "lines-between-class-members": ["error", "always", {
            "exceptAfterSingleLine": false
        }],
        // 强制可嵌套的块的最大深度
        "max-depth": ["error", 5],
        // 强制一行的最大长度
        "max-len": ["error", {
            "code": 100,
            "tabWidth": 4,
            "comments": 100,
            "ignoreComments": false,
            "ignoreUrls": true,
            "ignoreStrings": true,
            "ignoreTemplateLiterals": true,
            "ignoreRegExpLiterals": true
        }],
        // 强制最大行数
        "max-lines": "off",
        // 强制函数最大代码行数(50行有效代码)
        "max-lines-per-function": ["warn", {
            "max": 50,
            "skipBlankLines": true,
            "skipComments": true,
            "IIFEs": true
        }],
        // 强制回调函数最大嵌套深度
        "max-nested-callbacks": ["error", 10],
        // 强制函数定义中最多允许的参数数量
        "max-params": ["warn", 5],
        // 强制函数块最多允许的的语句数量(由max-lines-per-function决定)
        "max-statements": "off",
        // 强制每一行中所允许的最大语句数量
        "max-statements-per-line": ["error", {
            "max": 2,
        }],
        // 强制对多行注释使用特定风格
        "multiline-comment-style": ["error", "starred-block"],
        // 要求或禁止在三元操作数中间换行
        "multiline-ternary": ["error", "never"],
        // 要求构造函数首字母大写
        "new-cap": ["error", {
            "newIsCap": true,
            "capIsNew": true,
            "properties": true
        }],
        // 强制或禁止调用无参构造函数时有圆括号
        "new-parens": ["error", "always"],
        // 要求方法链中每个调用都有一个换行符
        "newline-per-chained-call": ["error", {
            "ignoreChainWithDepth": 2
        }],
        // 禁用 Array 构造函数
        "no-array-constructor": "error",
        // 允许按位运算符
        "no-bitwise": "off",
        // 允许 continue 语句
        "no-continue": "off",
        // 禁止在代码后使用内联注释
        "no-inline-comments": "error",
        // 禁止 if 作为唯一的语句出现在 else 语句中
        "no-lonely-if": "error",
        // 禁止混合使用不同的操作符
        "no-mixed-operators": ["error", {
            "groups": [
                ["+", "-", "*", "/", "%", "**"],
                ["&", "|", "^", "~", "<<", ">>", ">>>"],
                ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
                ["&&", "||"],
                ["in", "instanceof"]
            ],
            "allowSamePrecedence": true
        }],
        // 禁止空格和 tab 的混合缩进(当空格用于对齐时，允许混合制表符和空格。)
        "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
        // 禁止连续赋值
        "no-multi-assign": "error",
        // 禁止出现多行空行
        "no-multiple-empty-lines": ["warn", {
            "max": 1,
            "maxBOF": 1,
            "maxEOF": 1
        }],
        // 禁用否定的表达式
        "no-negated-condition": "warn",
        // 禁用嵌套的三元表达式
        "no-nested-ternary": "warn",
        // 禁用 Object 的构造函数
        "no-new-object": "error",
        // 禁用一元操作符 ++ 和 --
        "no-plusplus": ["error", {
            "allowForLoopAfterthoughts": true
        }],
        // 禁用特定的语法（具体项目决定）
        "no-restricted-syntax": "off",
        // 禁用 tab
        "no-tabs": ["error", {
            "allowIndentationTabs": true
        }],
        // 禁用三元操作符
        "no-ternary": "off",
        // 禁用行尾空格
        "no-trailing-spaces": ["error", {
            "skipBlankLines": false,
            "ignoreComments": false
        }],
        // 禁止标识符中有悬空下划线
        "no-underscore-dangle": ["error", {
            "enforceInMethodNames": false,
            "allowAfterThis": false,
            "allowAfterSuper": false,
        }],
        // 禁止可以在有更简单的可替代的表达式时使用三元操作符
        "no-unneeded-ternary": ["error", {
            "defaultAssignment": false
        }],
        // 禁止属性前有空白
        "no-whitespace-before-property": "error",
        // 对单行语句强制使用一致的位置
        "nonblock-statement-body-position": ["error", "beside"],
        // 强制大括号内换行符的一致性
        "object-curly-newline": ["error", {
            "multiline": true
        }],
        // 强制在大括号中使用一致的空格
        "object-curly-spacing": ["error", "always", {
            "objectsInObjects": true,
            "arraysInObjects": true,  
        }],
        // 强制将对象的属性放在不同的行上
        "object-property-newline": ["error", {
            "allowMultiplePropertiesPerLine": false
        }],
        // 强制函数中的变量要么一起声明要么分开声明(可初始化的可分块连续声明，未初始化的必须连续声明)
        "one-var": ["error", {
            // 对已经初始化的变量，要求其连续的变量声明合并为一个声明
            "initialized": "consecutive",
            // 要求每个作用域的未初始化的变量有一个变量声明
            "uninitialized": "always",
        }],
        // 要求或禁止在变量声明周围换行
        "one-var-declaration-per-line": ["error", "initializations"],
        // 要求或禁止在可能的情况下使用简化的赋值操作符
        "operator-assignment": ["warn", "never"],
        // 强制操作符使用一致的换行符
        "operator-linebreak": ["error", "before", {
            "overrides": {
                "=": "none",
            }
        }],
        // 要求或禁止块内填充
        "padded-blocks": ["error", "never"],
        // 要求或禁止在语句间填充空行(太繁琐，不建议使用)
        "padding-line-between-statements": "off",
        // 禁止使用以对象字面量作为第一个参数的 Object.assign，优先使用对象扩展。
        "prefer-object-spread": "warn",
        // 要求对象字面量属性名称用引号括起来(要么都用，要么都不用)
        "quote-props": ["error", "consistent"],
        // 强制使用一致的反勾号、双引号或单引号
        "quotes": ["error", "single", {
            "avoidEscape": true,
            "allowTemplateLiterals": true
        }],
        // 要求或禁止使用分号代替 ASI
        "semi": ["error", "always", {
            "omitLastInOneLineBlock": true
        }],
        // 强制分号之前和之后使用一致的空格
        "semi-spacing": ["error", {
            "before": false,
            "after": true
        }],
        // 强制分号的位置
        "semi-style": ["error", "last"],
        // 要求对象属性按序排列
        "sort-keys": "off",
        // 要求同一个声明块中的变量按顺序排列
        "sort-vars": "off",
        // 强制在块之前使用一致的空格
        "space-before-blocks": ["error", "always"],
        // 强制在 function的左括号之前使用一致的空格
        "space-before-function-paren": ["error", {
            "anonymous": "never",
            "named": "never",
            "asyncArrow": "always"
        }],
        // 强制在圆括号内使用一致的空格
        "space-in-parens": ["error", "never"],
        // 要求操作符周围有空格
        "space-infix-ops": ["error", {
            "int32Hint": true
        }],
        // 强制在一元操作符前后使用一致的空格
        "space-unary-ops": ["error", {
            "words": true,
            "nonwords": false,
        }],
        // 强制在注释中 // 或 /* 使用一致的空格
        "spaced-comment": ["error", "always"],
        // 强制在 switch 的冒号左右有空格
        "switch-colon-spacing": ["error", {
            "after": true,
            "before": false
        }],
        // 要求或禁止在模板标记和它们的字面量之间有空格
        "template-tag-spacing": ["error", "never"],
        // 要求或禁止 Unicode 字节顺序标记 (BOM)
        "unicode-bom": "off",
        // 要求正则表达式被括号括起来
        "wrap-regex": "off",
        // ======== ECMAScript 6 ========
        // 要求箭头函数体使用大括号
        "arrow-body-style": ["error", "as-needed"],
        // 要求箭头函数的参数使用圆括号
        "arrow-parens": ["error", "as-needed", {
            "requireForBlockBody": true
        }],
        // 强制箭头函数的箭头前后使用一致的空格
        "arrow-spacing": ["error", {
            "before": true,
            "after": true
        }],
        // 要求在构造函数中有 super() 的调用
        "constructor-super": "error",
        // 强制 generator 函数中 * 号周围使用一致的空格
        "generator-star-spacing": ["error", {
            "before": true,
            "after": false
        }],
        // 禁止修改类声明的变量
        "no-class-assign": "error",
        // 禁止在可能与比较操作符相混淆的地方使用箭头函数
        "no-confusing-arrow": ["error", {
            "allowParens": true
        }],
        // 禁止修改 const 声明的变量 
        "no-const-assign": "error",
        // 禁止类成员中出现重复的名称
        "no-dupe-class-members": "error",
        // 禁止重复模块导入
        "no-duplicate-imports": ["error", {
            "includeExports": true
        }],
        // 禁止 Symbolnew 操作符和 new 一起使用
        "no-new-symbol": "error",
        // 禁用特定的 import(具体环境)
        "no-restricted-imports": "off",
        // 禁止在构造函数中，在调用 super() 之前使用 this 或 super
        "no-this-before-super": "error",
        // 禁止在对象中使用不必要的计算属性
        "no-useless-computed-key": "error",
        // 禁用不必要的构造函数
        "no-useless-constructor": "error",
        // 禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字
        "no-useless-rename": ["error", {
            "ignoreDestructuring": false,
            "ignoreImport": false,
            "ignoreExport": false
        }],
        // 要求使用 let 或 const 而不是 var
        "no-var": "error",
        // 要求或禁止对象字面量中方法和属性使用简写语法
        "object-shorthand": ["error", "properties", {
            "avoidQuotes": true,
        }],
        // 要求回调函数使用箭头函数
        "prefer-arrow-callback": "off",
        // 要求使用 const 声明那些声明后不再被修改的变量
        "prefer-const": ["error", {
            "destructuring": "all",
            "ignoreReadBeforeAssign": false
        }],
        // 优先使用数组和对象解构
        "prefer-destructuring": "off",
        // 禁用 parseInt() 和 Number.parseInt()，使用二进制，八进制和十六进制字面量
        "prefer-numeric-literals": "off",
        // 要求使用剩余参数而不是 arguments
        "prefer-rest-params": "warn",
        // 要求使用扩展运算符而非 .apply()
        "prefer-spread": "error",
        // 要求使用模板字面量而非字符串连接
        "prefer-template": "error",
        // 要求 generator 函数内有 yield
        "require-yield": "error",
        // 强制剩余和扩展运算符及其表达式之间有空格
        "rest-spread-spacing": ["error", "never"],
        // 强制模块内的 import 排序
        "sort-imports": "off",
        // 要求 symbol 描述
        "symbol-description": "warn",
        // 要求或禁止模板字符串中的嵌入表达式周围空格的使用
        "template-curly-spacing": ["error", "never"],
        // 强制在 yield* 表达式中 * 周围使用空格
        "yield-star-spacing": ["error", {
            "before": false,
            "after": true
        }],
        // ====== inspired by eslint-config-standard ======
        "import/export": "error",
        "import/first": "error",
        "import/no-absolute-path": ["error", { "esmodule": true, "commonjs": true, "amd": false }],
        "import/no-duplicates": "error",
        "import/no-named-default": "error",
        "import/no-webpack-loader-syntax": "error",

        "node/handle-callback-err": ["error", "^(err|error)$" ],
        "node/no-callback-literal": "error",
        "node/no-deprecated-api": "error",
        "node/no-exports-assign": "error",
        "node/no-new-require": "error",
        "node/no-path-concat": "error",
        "node/process-exit-as-throw": "error",

        "promise/param-names": "error"
    }
};