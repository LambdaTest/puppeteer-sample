import asyncio
import pytest
from pyppeteer.errors import PageError
import json

@pytest.mark.asyncio
async def test_search_1(page):
    await page.goto('https://www.duckduckgo.com')
    # Maximize the page
    await page.setViewport({'width': 1920, 'height': 1080})
    element = await page.querySelector('[name="q"]')
    await element.click()
    await element.type('LambdaTest')
    await asyncio.gather(
        page.keyboard.press('Enter'),
        page.waitForNavigation()
    )

    await asyncio.sleep(1)

    title = await page.title()

    try:
        assert title == 'LambdaTest at DuckDuckGo', 'Expected page title is incorrect!'
        await page.evaluate('_ => {}', f'lambdatest_action: {json.dumps({ "action": "setTestStatus", "arguments": { "status": "passed", "remark": "Title matched" } })}')
    except PageError as e:
        await page.evaluate('_ => {}', f'lambdatest_action: {json.dumps({ "action": "setTestStatus", "arguments": { "status": "failed", "remark": str(e) } })}')

    await asyncio.sleep(1)

    return title