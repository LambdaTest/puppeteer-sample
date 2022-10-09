# Puppeteer - Test Execution Setup

Whenever you run a Puppeteer test, you must specify the operating system and the browser you wish to use. The LambdaTest Desired Capabilities Generator allows you to automatically create the capabilities class needed to run your Puppeteer automation scripts on LambdaTest. 

In this guide, learn how to configure the desired capability for selecting browsers and OS, organzing tests, changing desktop resolution, and more for your Puppeteer tests.


## Choosing Browser And OS

To perform Puppeteer testing on LambdaTest, you need to define the `browserName`, `browserVersion`, and `platform` capabilities in your automation scripts.

| Key | Expected Values | Description 
| -------- | -----| ------------ | 
| browserName   |  Chrome, Edge |   Specify the browser to test on    | 
| browserVersion  |  Chrome 66 & above, Edge 80 & above |   Specify the browser version to test on    | 
| platform  |  **Windows**: 11, 10, 8, 8.1, 7 <br/><br/> **macOS**: Monterey, Big Sur, Cataline, Mojave |    Specify the platform name    | 

## Organizing Tests

You can name your test cases and categorize your builds by build, and name for easier analysis. You will need to use the name, and build capabilities to organize Puppeteer  automated tests.

| Key | Values | Description | 
| -------- | -----| ------------ | 
| build   |  Playwright Sample Build |   Represent the build number for your test    | 
| name   |  Playwright Sample Test |    Represents the name of a test   | 

Shown below is the script that configure the `build` and `name` capabilities. 

```js
# add test code after initializing your browser
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
            'user': process.env.LT_USERNAME || "LT_USERNAME",
            'accessKey': process.env.LT_ACCESS_KEY || "LT_ACCESS_KEY",
            'network': true
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
        console.log("Closing browser");
        await browser.close();

    } catch (e) {
        console.log("Error - ", e);
    }
})();
```

## Changing Desktop Resolutions

Puppeteer tests run with a `1920x1080` resolution by default for desktop browsers. With our `resolution` capability, you can set a different screen resolution for your tests.

| Capability | Description  | Expected Values | Example |
| -------- | -----| ------------ | -----------------------------|
| resolution   |  Specifying your desktop resolution before initiating the test |   String, **Default value**: 1920x1080 <br/> <br/> **Windows 11 & 10**: `1024x768, 1280x800, 1280x1024, 1366x768, 1440x900, 1680x1050, 1600x1200, 1920x1200, 1920x1080 and 2048x1536` <br/><br/> **macOS**: `1024x768, 1280x960, 1280x1024, 1600x1200 and 1920x1080`  | const caps = <br/>{<br/>'resolution': '1024x768',<br/>}; |

## Changing Browser Window Size

If you wish to modify the browser window size during your Playwright test, you can do it as shown in the code below.

```js

await page.setViewport({
            width: 1024,
            height: 768,
            deviceScaleFactor: 1,
          });
```

## Debugging Tests

By specifying the capabilities for the debugging tools, you can debug and fix your failed Puppeteer test sessions using network logs, console logs, and video logs.


| Key | Values | Description | Desired Capability |
| -------- | -----| ------------ | --------------|
| network   | true/false |   Enable network logs    |  `const capabilities = { 'LT:Options': {'network': true,}}` |
| console  | true/false |   Enable browser console logs  | `const capabilities = { 'LT:Options': {'console': true,}}` |
| video   |  true/false |    Enable Video recording of the entire screen     | `const capabilities = { 'LT:Options': {'video': true,}}` |

## Mark Tests As Passed Or Failed

While running Puppeteer tests on the LambdaTest platform, you may come across a scenario in which a test that failed in your local instance turns up to be successful on LambdaTest. For verifying expected behavior, it is critical to identify automated tests as **Passed** or **Failed** based on your testing requirements.

By default, the Status of each test that runs successfully is marked as **Completed**, and if there are any issues, the Status is marked as **Failed**.

Shown below is syntax how to mark Puppeteer tests as **Passed** or **Failed**.

1. To mark test status as **passed**.

```
await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status:'passed', remark: 'Title matched' } })}`)
```

2. To mark test status as **failed**.

```
await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status:'failed', remark: 'Title not matched' } })}`)
```
