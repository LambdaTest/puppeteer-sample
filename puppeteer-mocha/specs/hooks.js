const puppeteer = require('puppeteer');

let caps_chrome = {
	browserName    : 'Chrome',
	browserVersion : 'latest',
	'LT:Options'   : {
		platform   : 'Windows 10',
		build      : 'Sample Puppeteer-Mocha',
		name       : 'Puppeteer-mocha test on Chrome',
		resolution : '1366x768',
		user       : process.env.LT_USERNAME,
		accessKey  : process.env.LT_ACCESS_KEY,
		network    : true
	}
};
let caps_edge = {
	browserName    : 'MicrosoftEdge',
	browserVersion : 'latest',
	'LT:Options'   : {
		platform   : 'Windows 10',
		build      : 'Sample Puppeteer-Mocha',
		name       : 'Puppeteer-mocha test on Edge',
		resolution : '1366x768',
		user       : process.env.LT_USERNAME,
		accessKey  : process.env.LT_ACCESS_KEY,
		network    : true
	}
};

let browser = null
let page = null

beforeEach(async () => {
    browser = await puppeteer.connect({
        browserWSEndpoint : `wss://cdp.lambdatest.com/puppeteer?capabilities=${encodeURIComponent(
            JSON.stringify(caps_chrome)
        )}`
    });
    page = await browser.newPage();
});

afterEach(async () => {
    await page.close();
    await browser.close();
});

module.exports = { page }