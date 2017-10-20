#!/usr/bin/env node

// coding: utf-8
// https://github.com/GoogleChrome/puppeteer
// install: yarn add puppeteer --dev
// run: node demo1.js or ./demo1.js
// author: qiuwei

const puppeteer = require('puppeteer')

const IS_HEAD_LESS = false


const main = async () => {

    console.info('打开浏览器')
    const browser = await puppeteer.launch({
        headless: IS_HEAD_LESS,
        timeout: 30000,
    })

    console.info('打开一个新页面')
    const page = await browser.newPage()
    // await page.waitForNavigation();

    page.setViewport({
        width: 1200,
        height: 768,
    })

    console.info('跳转到wiki')
    await page.goto('http://wiki.dataengine.com/', {
        //waitUntil: 'networkidle',
    })

    const selectorOfUserNameInput = '#os_username'
    const selectorOfPasswordInput = '#os_password'
    const selectorOfloginButton = '#loginButton'
    const options = { delay: 200 }

    console.info('输入用户名')
    await page.type(selectorOfUserNameInput, 'qiuwei', options)

    console.info('输入密码')
    await page.type(selectorOfPasswordInput, 'xxx', options)

    console.info('按下登录')
    await page.click(selectorOfloginButton, options)
}

module.exports = main

if (require.main === module) {
    main()
}
