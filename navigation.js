'use strict';
const { strict } = require('once');
const puppeteer = require('puppeteer');
const expect = require('chai').expect;

(async () => {    
    const capabilities = {
        'browserName': 'Chrome',
        'browserVersion': 'latest',
        'LT:Options': {
            'platform': 'Windows 10',
            'build': 'puppeteer-build-1',
            'name': 'My first Puppeteer test',
            'resolution':'1366x768',
            'user': process.env.LT_USERNAME || "Your Username",
            'accessKey': process.env.LT_ACCESS_KEY || "Your Access Key",
            'network': true,
            'visual': true
        }
   };
    
    try {
        const browser = await puppeteer.connect({
            browserWSEndpoint:
                `wss://cdp.lambdatest.com/puppeteer?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`,
        });

        const page = await browser.newPage();
        await page.setViewport({
            width: 1024,
            height: 768,
            deviceScaleFactor: 1,
          });
        console.log("Navigating to LambdaTest");
        await page.goto('https://www.lambdatest.com/');
        console.log("Navigating to Pricing");
        await page.goto('https://www.lambdatest.com/pricing');
        console.log("Navigating to Automation");
        await page.goto('https://www.lambdatest.com/automation-testing');

        await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'passed', remark: "Test Passed" } })}`)

        console.log("Closing browser");
        await browser.close();

    } catch (e) {
        await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'failed', remark: "Test Failed" } })}`)
        console.log("Error - ", e);
    }
})();
