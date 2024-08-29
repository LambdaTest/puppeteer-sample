import { setHeadlessWhen } from '@codeceptjs/configure';

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

const caps_chrome = {
  browserName: 'Chrome',
  browserVersion: 'latest',
  'LT:Options': {
    platform: 'Windows 10',
    build: 'Sample Puppeteer-Codecept',
    name: 'Puppeteer-Codecept test on Chrome',
    resolution: '1366x768',
    user: process.env.LT_USERNAME,
    accessKey: process.env.LT_USER_KEY,
    network: true
  }
};

const caps_edge = {
  browserName: 'MicrosoftEdge',
  browserVersion: 'latest',
  'LT:Options': {
    platform: 'Windows 10',
    build: 'Sample Puppeteer-Codecept',
    name: 'Puppeteer-Codecept test on Edge',
    resolution: '1366x768',
    user: process.env.LT_USERNAME,
    accessKey: process.env.LT_USER_KEY,
    network: true
  }
};

export const config = {
  tests: './specs/*.spec.js',
  output: './output',
  helpers: {
    Puppeteer: {
      chrome: {
        browserWSEndpoint: `wss://cdp.lambdatest.com/puppeteer?capabilities=${encodeURIComponent(JSON.stringify(caps_chrome))}`,
        "ignoreHTTPSErrors": true
      }
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjs-example',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}