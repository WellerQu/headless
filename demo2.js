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

    console.info('登录页')
    await page.goto('http://localhost:8084', {
        //waitUntil: 'networkidle',
    })

    const selectorOfUserNameInput = 'input[name=name]'
    const selectorOfPasswordInput = 'input[name=password]'
    const selectorOfPasswordGooglePwdInput = 'input[name=googlePwd]'
    const selectorOfloginButton = 'button[type=submit]'
    const options = { delay: 1 }

    console.info('输入用户名')
    await page.type(selectorOfUserNameInput, 'admin', options)

    console.info('输入密码')
    await page.type(selectorOfPasswordInput, '654321', options)

    if (page.$(selectorOfPasswordGooglePwdInput).value === '') {
      console.info('输入Google验证码')
      await page.type(selectorOfPasswordGooglePwdInput, '123456', options)
    }

    console.info('按下登录')
    await page.click(selectorOfloginButton, options)
    await page.waitForNavigation({
      waitUntil: 'load'
    })

    console.info('点击运营系统')
    await page.waitForSelector('a[href="javascript:top_show(183);"]')
    await page.click('a[href="javascript:top_show(183);"]')

    console.info('点击研究院审核列表')
    await page.waitForSelector('a[href="/coinList/approval/institute/list"]')
    await page.click('a[href="/coinList/approval/institute/list"]')

    console.info('点击审核')
    await page.waitForSelector('a[href="/coinList/approval/researchInstituteReview?projectCode=201808034207"]')
    await page.click('a[href="/coinList/approval/researchInstituteReview?projectCode=201808034207"]')

    console.info('填写备注')
    await page.waitForSelector('textarea[name=remark]')
    await page.type('textarea[name=remark]', '123456', options)
}

module.exports = main

if (require.main === module) {
    main()
}
