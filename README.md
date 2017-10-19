# Eslint & Headless Chrome

## Eslint

### start up

- 安装lint环境

    ```zsh
    yarn add babel-core babel-eslint eslint --dev
    ```

- 初始化约束规则

    ```zsh
    ./node_modules/.bin/eslint --init
    ```

    回答问题即可

- 配置约束规则

    ```json
    {
        "scripts": {
            "lint": "eslint ."
        }
    }
    ```

    ```yaml
    env:
      es6: true
      node: true
    extends: 'eslint:recommended'
    parser: babel-eslint
    parserOptions:
      sourceType: module
      globalReturn: false
      impliedStrict: true
    rules:
      indent:
        - error
        - 4
      linebreak-style:
        - error
        - unix
      quotes:
        - error
        - single 
      semi:
        - error
        - never
      no-console: off
    ```

    >
    > - "off" or 0 - turn the rule off
    > - "warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
    > - "error" or 2 - turn the rule on as an error (exit code will be 1)

- 运行约束检查

    ```zsh
    yarn lint
    ```

### reference

[Eslint on Github](https://github.com/eslint/eslint)

[Eslint](https://eslint.org/docs/user-guide/getting-started)

## Headless Chrome
