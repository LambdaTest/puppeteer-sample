const page = require('./hooks').page;
const expect = require('chai').expect;

describe('Search Text', () => {

	it('should be titled "Google"', async () => {
		let text = 'Google';
		await page.goto('https://www.duckduckgo.com');
		var element = await page.$('[name="q"]');
		await element.click();
		await element.type(text);
		await Promise.all([
			page.keyboard.press('Enter'),
			page.waitForNavigation()
		]);
		var title = await page.title();
		try {
			expect(title).equal(text + ' at DuckDuckGo', 'Expected page title is incorrect!');
			await page.evaluate(
				(_) => {},
				`lambdatest_action: ${JSON.stringify({
					action    : 'setTestStatus',
					arguments : { status: 'passed', remark: 'assertion passed' }
				})}`
			);
		} catch (e) {
			await page.evaluate(
				(_) => {},
				`lambdatest_action: ${JSON.stringify({
					action    : 'setTestStatus',
					arguments : { status: 'failed', remark: e.name }
				})}`
			);
		}
	});

});
