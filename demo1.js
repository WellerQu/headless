#!/usr/bin/env node

// coding: utf-8
// https://github.com/GoogleChrome/puppeteer
// install: yarn add puppeteer --dev
// run: node demo1.js or ./demo1.js
// author: qiuwei

const puppeteer = require('puppeteer')

const IS_HEAD_LESS = false


const main = async () => {
    // 打开浏览器
    const browser = await puppeteer.launch({
        headless: IS_HEAD_LESS,
        timeout: 30000,
    })

    // 创建一个空白页
    const page = await browser.newPage()

    page.setViewport({
        width: 1200,
        height: 768,
    })

    // 跳转到目标地址
    await page.goto('https://baidu.com', { 
        waitUntil: 'networkidle' 
    })
    
    await page.screenshot({
        path: './baidu.png'
    })

    /*
     * > NOTE Generating a pdf is currently only supported in Chrome headless
     *
     * > page.pdf() generates a pdf of the page with print css media. 
     * > To generate a pdf with screen media, call page.emulateMedia('screen') before calling page.pdf()
     * 
     * [reference](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#pagepdfoptions)     
     */
    await page.emulateMedia('screen')
    await page.pdf({
        path: './baidu.pdf',
        format: 'A4',
    })

    // 关闭浏览器
    await browser.close()
}

module.exports = main

if (require.main === module) {
    main()
}
