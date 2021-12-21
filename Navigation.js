'use strict';
const { strict } = require('once');
const puppeteer = require('puppeteer');
const expect = require('chai').expect;

(async () => {
    const caps = {
        'browserName': 'Chrome',
        'version': '90.0',
        'platform': 'Windows 10',
        'build': 'puppeteer-build-1',
        'name': 'My first Puppeteer test',
        'username': 'your username',
        'access_key': 'your accesskey'
    };
    try{
        const browser = await puppeteer.connect({
            browserWSEndpoint:
            `gridURL?caps=${encodeURIComponent(JSON.stringify(caps))}`,
            });
        
        const page = await browser.newPage();
        await page.goto('https://www.lambdatest.com/');
        await page.goto('https://www.lambdatest.com/pricing');
        await page.goto('https://www.lambdatest.com/automation-testing');
        await browser.close();
        
    }catch(e){
        // console.log("Error - ", e);
    }
})();
