const puppeteer = require("puppeteer");
const expect = require("chai").expect;
let browser, page;

(async () => {
  const capabilities = {
    "browserName": "Chrome",
    "browserVersion": "latest",
    "LT:Options": {
      "platform": "Windows 10",
      "build": "Puppeteer SmartUI Build",
      "name": "Puppeteer SmartUI Test",
      "user": process.env.LT_USERNAME,
      "accessKey": process.env.LT_ACCESS_KEY,
      "network": true,
      "video": true,
      "console": true,
      "smartUIProjectName": "<projectName>", // Add the required Smart UI Project name
    },
  };

  try {
    browser = await puppeteer.connect({
      browserWSEndpoint: `wss://cdp.lambdatest.com/puppeteer?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
    });

    page = await browser.newPage();
    await page.setViewport({
      width: 1920,
      height: 1080,
      deviceScaleFactor: 1,
    });

    await page.goto("https://www.bing.com");

    // Add the following command in order to take screenshot in SmartUI
    await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({
      action: "smartui.takeScreenshot",
      arguments: {screenshotName: "<Your Screenshot Name>"},
    })}`);

    const element = await page.$("[aria-label=\"Enter your search term\"]");
    await element.click();
    await element.type("LambdaTest");
    await page.keyboard.press("Enter");
    const pageTitle = await page.title();

    try {
      expect(pageTitle).equal("LambdaTest - Search");
      await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({
        action: "setTestStatus",
        arguments: {status: "passed", remark: "Title matched"},
      })}`);
    } catch (e) {
      await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({
        action: "setTestStatus",
        arguments: {status: "failed", remark: e.stack},
      })}`);
    }

    await browser.close();
  } catch (e) {
    await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({
      action: "setTestStatus",
      arguments: {status: "failed", remark: e.stack},
    })}`);

    await browser.close();

    throw e;
  }
})();
