# Pyppeteer Cloud

<img height="400" src="https://user-images.githubusercontent.com/70570645/194756126-6b7f229a-050e-4f55-a31d-759ec35fef37.png">

<p align="center">
  <a href="https://www.lambdatest.com/blog/?utm_source=github&utm_medium=repo&utm_campaign=pyppeteer-sample" target="_bank">Blog</a>
  &nbsp; &#8901; &nbsp;
  <a href="https://www.lambdatest.com/support/docs/?utm_source=github&utm_medium=repo&utm_campaign=pyppeteer-sample" target="_bank">Docs</a>
  &nbsp; &#8901; &nbsp;
  <a href="https://www.lambdatest.com/learning-hub/?utm_source=github&utm_medium=repo&utm_campaign=pyppeteer-sample" target="_bank">Learning Hub</a>
  &nbsp; &#8901; &nbsp;
  <a href="https://www.lambdatest.com/newsletter/?utm_source=github&utm_medium=repo&utm_campaign=pyppeteer-sample" target="_bank">Newsletter</a>
  &nbsp; &#8901; &nbsp;
  <a href="https://www.lambdatest.com/certifications/?utm_source=github&utm_medium=repo&utm_campaign=pyppeteer-sample" target="_bank">Certifications</a>
  &nbsp; &#8901; &nbsp;
  <a href="https://www.youtube.com/c/LambdaTest" target="_bank">YouTube</a>
</p>
&emsp;
&emsp;
&emsp;

*Learn the how to get started with pyppeteer testing on the LambdaTest platform.*

[<img height="58" width="200" src="https://user-images.githubusercontent.com/70570645/171866795-52c11b49-0728-4229-b073-4b704209ddde.png">](https://accounts.lambdatest.com/register?utm_source=github&utm_medium=repo&utm_campaign=pyppeteer-sample)

## Table of Contents:

* [Pre-requisites](#pre-requisites)
* [Running Your First Pyppeteer Test](#running-your-first-pyppeteer-test)
* [View Your Pyppeteer Test Results](#view-your-pyppeteer-test-results)
* [Run Pyppeteer Tests In Gitpod](#run-pyppeteer-tests-in-gitpod)

## Pre-requisites

1. Clone the pyppeteer-sample repository on your system.

2. Create a virtual environment using the following commands:

```
virtualenv venv
```

```
source venv/bin/activate
```

3. Install the necessary configurations.

```
poetry install
```

4. Install the necessary dependencies

```
pip install -r requirements.txt
```

5. In order to run your pyppeteer tests, you will need to set your LambdaTest username and access key in the environment variables. Click the **Access Key** button at the top-right of the Automation Dashboard to access it.

<img width="1299" alt="Password-1" src="https://github.com/hjsblogger/web-automation-with-pyppeteer/assets/1688653/edd7c5a6-a554-4e39-8d5f-2636fe6c0c8d">

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

## Running Your First Pyppeteer Test

>**Test Scenarios**: The first test script navigates to DuckduckGo and searches for LambdaTest. The second test script navigates to Brave search and searches for LambdaTest. Both the tests are executed using Chrome (latest) on Windows 11.

Once you are done with the steps 1 thru' 4, you can initiate your first Pyppeteer test on LambdaTest. 

Run the following command on the terminal to run the Pyppeteer tests in parallel.

```
pytest --verbose --capture=no -s -n 2 tests/test_pytest_pyppeteer_1.py \
    tests/test_pytest_pyppeteer_2.py
```

## View your Pyppeteer test results

The LambdaTest Automation Dashboard is where you can see the results of your Pyppeteer tests after running them on the LambdaTest platform.

The below screenshot of LambdaTest Automation Dashboard shows the pyppeteer build on the left and the build sessions associated with the selected build on the right.

<img width="1440" alt="Pyppeteer-Execution-1" src="https://github.com/hjsblogger/web-automation-with-pyppeteer/assets/1688653/e7cc0d22-d191-4704-b1a1-18a9cf1f1cf9">

On clicking the session name of the respective test, you can view the details of pyppeteer test session that you just executed. For example, the below screenshot shows a test execution details of pyppeteer test like Test Name, Test ID, selected configurations, test logs, basic info, input config, and test session video.

<img width="1424" alt="Pyppeteer-Execution-2" src="https://github.com/hjsblogger/web-automation-with-pyppeteer/assets/1688653/852c4aff-0a4f-49c6-a1bd-c8be8234eedb">

## Run Pyppeteer Tests In Gitpod

Select the button below to try this demo in [Gitpod](https://www.gitpod.io/)

[<img alt="Run in Gitpod" width="200px" align="center" src="https://user-images.githubusercontent.com/70570645/169987363-1408c494-4e2a-4f12-8828-c931eac716b0.png" />](https://gitpod.io/#https://github.com/LambdaTest/pyppeteer-sample)

* After the Gitpod session launches, navigate to the terminal and run the following commands to save your [LambdaTest Credentials](https://accounts.lambdatest.com/detail/profile) to Gitpod as environment variables:

```
eval $(gp env -e LT_USERNAME=******)
eval $(gp env -e LT_ACCESS_KEY=******)
  ```

* Click the following link if you're unsure how to [access your LambdaTest credentials.](https://www.lambdatest.com/support/docs/using-environment-variables-for-authentication-credentials/?utm_source=github&utm_medium=repo&utm_campaign=pyppeteer-sample). Also, if you start a new terminal in Gitpod, you have to run the following command to reset environment variables:
```
 eval $(gp env -e)
```
For more information, refer to [Gitpod documentation](https://www.gitpod.io/docs/47_environment_variables/)

## Documentation & Resources :books:

      
Visit the following links to learn more about LambdaTest's features, setup and tutorials around test automation, mobile app testing, responsive testing, and manual testing.

* [LambdaTest Documentation](https://www.lambdatest.com/support/docs/?utm_source=github&utm_medium=repo&utm_campaign=pyppeteer-sample)
* [LambdaTest Blog](https://www.lambdatest.com/blog/?utm_source=github&utm_medium=repo&utm_campaign=pyppeteer-sample)
* [LambdaTest Learning Hub](https://www.lambdatest.com/learning-hub/?utm_source=github&utm_medium=repo&utm_campaign=pyppeteer-sample)    

## LambdaTest Community :busts_in_silhouette:

The [LambdaTest Community](https://community.lambdatest.com/?utm_source=github&utm_medium=repo&utm_campaign=pyppeteer-sample) allows people to interact with tech enthusiasts. Connect, ask questions, and learn from tech-savvy people. Discuss best practices in web development, testing, and DevOps with professionals from across the globe 🌎

## What's New At LambdaTest ❓

To stay updated with the latest features and product add-ons, visit [Changelog](https://changelog.lambdatest.com/) 
      
## About LambdaTest

[LambdaTest](https://www.lambdatest.com?utm_source=github&utm_medium=repo&utm_campaign=pyppeteer-sample) is a leading test execution and orchestration platform that is fast, reliable, scalable, and secure. It allows users to run both manual and automated testing of web and mobile apps across 3000+ different browsers, operating systems, and real device combinations. Using LambdaTest, businesses can ensure quicker developer feedback and hence achieve faster go to market. Over 500 enterprises and 1 Million + users across 130+ countries rely on LambdaTest for their testing needs.    

### Features

* Run Selenium, Cypress, Pyppeteer, Puppeteer, Playwright, and Appium automation tests across 3000+ real desktop and mobile environments.
* Real-time cross browser testing on 3000+ environments.
* Test on Real device cloud
* Blazing fast test automation with HyperExecute
* Accelerate testing, shorten job times and get faster feedback on code changes with Test At Scale.
* Smart Visual Regression Testing on cloud
* 120+ third-party integrations with your favorite tool for CI/CD, Project Management, Codeless Automation, and more.
* Automated Screenshot testing across multiple browsers in a single click.
* Local testing of web and mobile apps.
* Online Accessibility Testing across 3000+ desktop and mobile browsers, browser versions, and operating systems.
* Geo-location testing of web and mobile apps across 53+ countries.
* LT Browser - for responsive testing across 50+ pre-installed mobile, tablets, desktop, and laptop view-ports
    
[<img height="58" width="200" src="https://user-images.githubusercontent.com/70570645/171866795-52c11b49-0728-4229-b073-4b704209ddde.png">](https://accounts.lambdatest.com/register?utm_source=github&utm_medium=repo&utm_campaign=pyppeteer-sample)
      
## We are here to help you :headphones:

* Got a query? we are available 24x7 to help. [Contact Us](mailto:support@lambdatest.com)
* For more info, visit - [LambdaTest](https://www.lambdatest.com/?utm_source=github&utm_medium=repo&utm_campaign=pyppeteer-sample)
