#!/usr/bin/env node

// coding: utf-8
// https://github.com/GoogleChrome/puppeteer
// install: yarn add puppeteer --dev
// run: node demo1.js or ./demo1.js
// author: qiuwei

const puppeteer = require('puppeteer')

const IS_HEAD_LESS = false


const main = async () => {

    const browser = await puppeteer.launch({
        headless: IS_HEAD_LESS,
        timeout: 30000,
    })

    const page = await browser.newPage()

    page.setViewport({
        width: 1200,
        height: 768,
    })

    await page.goto('http://baidu.com', {
        waitUntil: 'networkidle',
    })

    await browser.close()
}

module.exports = main

if (require.main === module) {
    main()
}
