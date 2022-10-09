# Puppeteer Testing With Jest

Jest is a Facebook-maintained framework for developing frontend and backend unit tests in JavaScript and executing end-to-end testing using Playwright. It provides you with the flexibility to target a single test, delivering structured output, or an entire suite for common assertions.

LambdaTest allows you to run Puppeteer tests with Jest on a browser farm of 40+ real browsers and operating system combinations. 

This guide will cover the basics of getting started with Puppeteer testing with Jest on the LambdaTest platform.

## Pre-requisites

1. Clone the LambdaTest-Puppeteer repository on your system.

2. Install the npm dependencies.

```
npm install
```

3. In order to run your Puppeteer tests with Jest, you will need to set your LambdaTest username and access key in the environment variables. Click the **Access Key** button at the top-right of the Automation Dashboard to access it.

![image](https://user-images.githubusercontent.com/70570645/194759544-b8339cc9-f13a-4d98-906f-4ad7dad53baa.png)

**Windows**

```js
set LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
set LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```

**macOS/Linux**

```js
export LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
export LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```

## Running Tests Using Jest

>**Test Scenario**: The below test script searches LambdaTest on DuckDuckGo and verifies the website title.

1. To run the Puppeteer tests using Jest on LambdaTest, you need make some tweaks to the `jest-puppeteer.config.js` file.

```js
const caps_chrome = {
	browserName    : 'Chrome',
	browserVersion : 'latest',
	'LT:Options'   : {
		platform   : 'Windows 10',
		build      : 'Sample Puppeteer-Jest',
		name       : 'Puppeteer-jest test on Chrome',
		resolution : '1366x768',
		user       : process.env.LT_USERNAME,
		accessKey  : process.env.LT_USER_KEY,
		network    : true
	}
};

const caps_edge = {
	browserName    : 'MicrosoftEdge',
	browserVersion : 'latest',
	'LT:Options'   : {
		platform   : 'Windows 10',
		build      : 'Sample Puppeteer-Jest',
		name       : 'Puppeteer-jest test on Edge',
		resolution : '1366x768',
		user       : process.env.LT_USERNAME,
		accessKey  : process.env.LT_USER_KEY,
		network    : true
	}
};

module.exports = {
	connect : {
		browserWSEndpoint : `wss://cdp.lambdatest.com/puppeteer?capabilities=${encodeURIComponent(
			JSON.stringify(caps_chrome)
		)}`
	}
};

```

2. Pass the below command to run the test.

```
npm run test
```

3. Visit the LambdaTest Automation Dashboard to see the results of your Puppeteer Jest tests.
