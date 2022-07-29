describe('Search Bing', () => {
  beforeAll(async () => {
    await page.goto('https://www.bing.com')
  });

  it('should be titled "Lambdatest"', async () => {
    let text = 'LambdaTest'
    await page.goto('https://www.duckduckgo.com');
    var element = await page.$('[name="q"]');
    await element.click();
    await element.type(text);
    await Promise.all([page.keyboard.press('Enter'), page.waitForNavigation()])
    var title = await page.title();
    try {
      expect(title).toEqual(text+' at DuckDuckGo', 'Expected page title is incorrect!');
      await page.evaluate(_ => { }, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'passed', remark: 'assertion passed' } })}`);
    } catch {
      await page.evaluate(_ => { }, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'failed', remark: 'assertion failed' } })}`);
    }
  });
});