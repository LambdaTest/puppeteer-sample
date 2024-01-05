from os import environ
import json
import asyncio
import pytest

from pyppeteer import connect, launch
from urllib.parse import quote

# Get username and access key of the LambdaTest Platform
username = environ.get('LT_USERNAME', None)
access_key = environ.get('LT_ACCESS_KEY', None)

cloud_capabilities = {
    'browserName': 'chrome',
    'browserVersion': 'latest',
    'LT:Options': {
        'platform': 'Windows 11',
        'build': '[Build] Pytest + Pyppeteer testing on LambdaTest',
        'name': 'Pytest + Pyppeteer testing on LambdaTest',
        'resolution': '1920x1200',
        'user': username,
        'accessKey': access_key,
        'network': True,
        'video': True,
        'console': True,
        'headless': False
    }
}

# Fixture for launching a browser
@pytest.fixture(scope='function')
async def browser(request):
    capability = quote(json.dumps(cloud_capabilities))
    print('Initializing test:: ', cloud_capabilities['LT:Options']['name'])

    browser = await connect(
        browserWSEndpoint=f'wss://cdp.lambdatest.com/puppeteer?capabilities={capability}'
    )
    
    yield browser
    await asyncio.sleep(1)

# Fixture for creating a new page
@pytest.fixture(scope='function')
async def page(browser):
    page = await browser.newPage()
    await page.setViewport({'width': 1920, 'height': 1200})
    yield page

    await page.close()
    await asyncio.sleep(1)
    await browser.close()