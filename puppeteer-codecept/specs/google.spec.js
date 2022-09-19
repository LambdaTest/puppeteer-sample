Feature('Search Duckduckgo');

    Before(({ I }) => { // or Background
        I.amOnPage('https://www.bing.com');
    });
  
    Scenario('should be titled "Google"', async ({ I }) => {
        const text = 'Google';
        I.amOnPage('https://www.duckduckgo.com');
        I.click('[name="q"]');
        I.fillField('[name="q"]', text);
        I.pressKey('Enter');
        I.seeInTitle(text + ' at DuckDuckGo');
        let title = await I.grabTitle();
        if(title.includes(text + ' at DuckDuckGo')) {
            I.usePuppeteerTo('set test status', async ({ page, browser }) => {
                await page.evaluate(
                    (_) => {},
                    `lambdatest_action: ${JSON.stringify({
                        action    : 'setTestStatus',
                        arguments : { status: 'passed', remark: 'assertion passed' }
                    })}`
                );
            });
        } else {
            I.usePuppeteerTo('set test status', async ({ page, browser }) => {
                await page.evaluate(
                    (_) => {},
                    `lambdatest_action: ${JSON.stringify({
                        action    : 'setTestStatus',
                        arguments : { status: 'failed', remark: 'assertion failed' }
                    })}`
                );
            });
        }
    });

