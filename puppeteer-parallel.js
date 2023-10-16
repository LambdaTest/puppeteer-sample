const puppeteer = require('puppeteer');
const expect = require('chai').expect;

const parallelTests = async (capability) => {
  console.log('Initialising test:: ', capability['LT:Options']['name'])

  const browser = await puppeteer.connect({
    browserWSEndpoint: `wss://cdp.lambdatest.com/puppeteer?capabilities=${encodeURIComponent(JSON.stringify(capability))}`
  })

  const page = await browser.newPage()

  await page.goto("https://duckduckgo.com");

  await page.goto('https://www.duckduckgo.com');
  let element = await page.$('[name="q"]');
  await element.click();
  await element.type('LambdaTest');
  await Promise.all([
      page.keyboard.press('Enter'),
      page.waitForNavigation()
  ]);
  const title = await page.title()


  try {
    expect(title).equal('LambdaTest at DuckDuckGo', 'Expected page title is incorrect!');
    // Mark the test as completed or failed
    await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'passed', remark: 'Title matched' } })}`)
    await teardown(page, browser)
  } catch (e) {
    await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'failed', remark: e.stack } })}`)
    await teardown(page, browser)
  }

}

async function teardown(page, browser) {
  await page.close();
  await browser.close();
}

// Capabilities array for with the respective configuration for the parallel tests
const capabilities = [
  {
    'browserName': 'Chrome', // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
    'browserVersion': 'latest',
    'LT:Options': {
      'platform': 'Windows 10',
      'build': 'Puppeteer With Parallel Build',
      'name': 'Puppeteer Sample Test on Windows 10 - Chrome',
      'user': process.env.LT_USERNAME,
      'accessKey': process.env.LT_ACCESS_KEY,
      'network': true,
      'video': true,
      'console': true
    }
  },
  {
    'browserName': 'MicrosoftEdge',
    'browserVersion': 'latest',
    'LT:Options': {
      'platform': 'MacOS Ventura',
      'build': 'Puppeteer With Parallel Build',
      'name': 'Puppeteer Sample Test on Ventura - MicrosoftEdge',
      'user': process.env.LT_USERNAME,
      'accessKey': process.env.LT_ACCESS_KEY,
      'network': true,
      'video': true,
      'console': true
    }
  },
  {
    'browserName': 'Chrome',
    'browserVersion': 'latest',
    'LT:Options': {
      'platform': 'MacOS Big sur',
      'build': 'Puppeteer With Parallel Build',
      'name': 'Puppeteer Sample Test on MacOS Big sur - Chrome',
      'user': process.env.LT_USERNAME,
      'accessKey': process.env.LT_ACCESS_KEY,
      'network': true,
      'video': true,
      'console': true
    }
  }]

capabilities.forEach(async (capability) => {
  await parallelTests(capability)
})
