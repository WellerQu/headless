# Headless Chrome & Eslint

## Headless Chrome

### Startup

- 安装无头浏览器Node开发包

    ```zsh
    yarn add puppeteer --dev
    ```
- 编写脚本代码

    ```javascript
    const browser = await puppeteer.launch({ ...options })
    const page = await browser.newPage();
    // some actions
    await browser.close()
    ```

### Reference

[Puppeteer on Github](https://github.com/GoogleChrome/puppeteer/)

[Puppeteer API](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#)

## Eslint

### Startup

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

    package.json
    ```json
    {
        "scripts": {
            "lint": "eslint ."
        }
    }
    ```

    .eslintrc.yml
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

### Reference

[Eslint on Github](https://github.com/eslint/eslint)

[Eslint](https://eslint.org/docs/user-guide/getting-started)

## End

Enjoy coding
