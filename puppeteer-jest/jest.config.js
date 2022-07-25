const config = {
  verbose: true,
  preset: "jest-puppeteer",
  rootDir     : '.',
	testTimeout : 400000,
	testMatch   : [
		'<rootDir>/specs/sample.spec.js'
	],
};

module.exports = config;