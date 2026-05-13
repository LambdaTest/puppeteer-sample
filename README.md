# Puppeteer Cloud — TestMu AI (Formerly LambdaTest)

<img height="400" src="https://user-images.githubusercontent.com/70570645/194756126-6b7f229a-050e-4f55-a31d-759ec35fef37.png">

<p align="center">
  <a href="https://www.testmuai.com/blog/?utm_source=github&utm_medium=repo&utm_campaign=puppeteer-sample" target="_bank">Blog</a>
  &nbsp; &#8901; &nbsp;
  <a href="https://www.testmuai.com/support/docs/?utm_source=github&utm_medium=repo&utm_campaign=puppeteer-sample" target="_bank">Docs</a>
  &nbsp; &#8901; &nbsp;
  <a href="https://www.testmuai.com/learning-hub/?utm_source=github&utm_medium=repo&utm_campaign=puppeteer-sample" target="_bank">Learning Hub</a>
  &nbsp; &#8901; &nbsp;
  <a href="https://www.testmuai.com/newsletter/?utm_source=github&utm_medium=repo&utm_campaign=puppeteer-sample" target="_bank">Newsletter</a>
  &nbsp; &#8901; &nbsp;
  <a href="https://www.testmuai.com/certifications/?utm_source=github&utm_medium=repo&utm_campaign=puppeteer-sample" target="_bank">Certifications</a>
  &nbsp; &#8901; &nbsp;
  <a href="https://www.youtube.com/@TestMuAI" target="_bank">YouTube</a>
</p>
&emsp;
&emsp;
&emsp;

*Learn the how to get started with Puppeteer testing on the TestMu AI platform.*

[<img height="58" width="200" src="https://user-images.githubusercontent.com/70570645/171866795-52c11b49-0728-4229-b073-4b704209ddde.png">](https://accounts.lambdatest.com/register?utm_source=github&utm_medium=repo&utm_campaign=puppeteer-sample)

## Table of Contents:

* [Pre-requisites](#pre-requisites)
* [Running Your First Puppeteer Test](#running-your-first-puppeteer-test)
* [View Your Puppeteer Test Results](#view-your-puppeteer-test-results)
* [Run Puppeteer Tests In Gitpod](#run-puppeteer-tests-in-gitpod)
* [Test Execution Setup](https://github.com/LambdaTest/puppeteer-sample/blob/main/puppeteer-docs/test-execution-setup.md)
* [Local Testing](https://github.com/LambdaTest/puppeteer-sample/blob/main/puppeteer-docs/local-testing.md)
* [Integrate With Mocha](https://github.com/LambdaTest/puppeteer-sample/blob/main/puppeteer-docs/puppeteer-mocha.md)
* [Integrate With Jest](https://github.com/LambdaTest/puppeteer-sample/blob/main/puppeteer-docs/puppeteer-jest.md)
* [Puppeteer Testing With CI/CD](https://github.com/LambdaTest/puppeteer-sample/blob/main/puppeteer-docs/puppeteer-testing-ci-cd.md)


## Pre-requisites

1. Clone the TestMu AI-Puppeteer repository on your system.

2. Install the npm dependencies.

```
npm install
```

3. In order to run your Puppeteer tests, you will need to set your TestMu AI username and access key in the environment variables. Click the **Access Key** button at the top-right of the Automation Dashboard to access it.

<img height="300" src="https://user-images.githubusercontent.com/70570645/169819599-127dd293-347d-45b6-9651-e46f2b038583.png"/>

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

## Running Your First Puppeteer Test

>**Test Scenario**: The below test script runs on Chrome browser running Windows 10. It visits the TestMu AI platform, clicks on the Pricing page, and navigates to the Automation Testing page.

Once you are done with the steps 1, 2, and 3, you can initiate your first Puppeteer test on LambdaTest. 

Check out [navigation.js](https://github.com/LambdaTest/puppeteer-sample/blob/main/navigation.js) file to view the sample test script.

Pass the below command to run the test.

```
node navigation.js
```

## View your Puppeteer test results

The TestMu AI Automation Dashboard is where you can see the results of your Puppeteer tests after running them on the TestMu AI platform.

The below screenshot of TestMu AI Automation Dashboard shows the Puppeteer build on the left and the build sessions associated with the selected build on the right.

<img height="400" src="https://user-images.githubusercontent.com/70570645/194756469-a8fd02e1-bd9c-4db2-814a-260b706a663c.png"/>

On clicking the session name of the respective test, you can view the details of Puppeteer test session that you just executed. For example, the below screenshot shows a test execution details of Puppeteer test like Test Name, Test ID, selected configurations, test logs, basic info, input config, and test session video.

<img height="400" src="https://user-images.githubusercontent.com/70570645/194756494-177d1a72-b1fd-406e-b1a9-925912f1d6c2.png"/>

## Run Puppeteer Tests In Gitpod

Select the button below to try this demo in [Gitpod](https://www.gitpod.io/)

[<img alt="Run in Gitpod" width="200px" align="center" src="https://user-images.githubusercontent.com/70570645/169987363-1408c494-4e2a-4f12-8828-c931eac716b0.png" />](https://gitpod.io/#https://github.com/LambdaTest/puppeteer-sample)

* After the Gitpod session launches, navigate to the terminal and run the following commands to save your [TestMu AI Credentials](https://accounts.lambdatest.com/detail/profile) to Gitpod as environment variables:

```
eval $(gp env -e LT_USERNAME=******)
eval $(gp env -e LT_ACCESS_KEY=******)
  ```

* Click the following link if you're unsure how to [access your TestMu AI credentials.](https://www.testmuai.com/support/docs/using-environment-variables-for-authentication-credentials/?utm_source=github&utm_medium=repo&utm_campaign=puppeteer-sample). Also, if you start a new terminal in Gitpod, you have to run the following command to reset envrionment variables:
```
 eval $(gp env -e)
```
For more information, refer to [Gitpod documentation](https://www.gitpod.io/docs/47_environment_variables/)

## Documentation & Resources :books:

      
Visit the following links to learn more about TestMu AI's features, setup and tutorials around test automation, mobile app testing, responsive testing, and manual testing.

* [TestMu AI Documentation](https://www.testmuai.com/support/docs/?utm_source=github&utm_medium=repo&utm_campaign=puppeteer-sample)
* [TestMu AI Blog](https://www.testmuai.com/blog/?utm_source=github&utm_medium=repo&utm_campaign=puppeteer-sample)
* [TestMu AI Learning Hub](https://www.testmuai.com/learning-hub/?utm_source=github&utm_medium=repo&utm_campaign=puppeteer-sample)    

## TestMu AI Community :busts_in_silhouette:

The [TestMu AI Community](https://community.testmuai.com/?utm_source=github&utm_medium=repo&utm_campaign=puppeteer-sample) allows people to interact with tech enthusiasts. Connect, ask questions, and learn from tech-savvy people. Discuss best practises in web development, testing, and DevOps with professionals from across the globe 🌎

## What's New At TestMu AI ❓

To stay updated with the latest features and product add-ons, visit [Changelog](https://changelog.lambdatest.com/)

## 🚀 LambdaTest is Now TestMu AI

👋 Welcome to TestMu AI, the next evolution of LambdaTest. As of January 2026, [LambdaTest is Now TestMu AI](https://www.testmuai.com/lambdatest-is-now-testmuai/) - we have evolved from a cross-browser testing cloud into a unified, AI-native quality engineering platform designed for the modern DevOps era.

Whether you have been part of the LambdaTest community for years or are just discovering TestMu AI, our mission remains the same: to help you ship faster with high-scale test execution, autonomous testing, and deep quality analytics.

### 🔄 Our Rebrand Journey

In 2017, we introduced LambdaTest with a clear mission: to become the world's most trusted cloud testing platform. We built a scalable, high-performance test cloud that eliminated flakiness, improved developer feedback cycles, and accelerated release velocity for teams worldwide.

As LambdaTest grew, we expanded the platform into Test Intelligence, Visual Regression Testing, Accessibility Testing, API Testing, and Performance Testing, covering the entire testing lifecycle. These capabilities enabled teams to test any stack, on any technology, at enterprise scale.

Over time, we rebuilt the architecture to be AI-native from the ground up. What began as LambdaTest's high-performance testing cloud has now evolved into TestMu AI, an AI-native, multi-agent platform redefining modern quality engineering.

We chose the name TestMu AI to reflect our shift towards intelligent, autonomous testing. While our identity has changed, our core technology and commitment to the testing community stay the same.

👉 Find [LambdaTest's New Home](https://www.testmuai.com/).

### 🔭 Explore TestMu AI

The same infrastructure LambdaTest customers relied on, now delivered through autonomous AI agents.

- [KaneAI](https://www.testmuai.com/kane-ai/)
- [Agent-to-Agent Testing](https://www.testmuai.com/agent-to-agent-testing/)
- [HyperExecute](https://www.testmuai.com/hyperexecute/)
- [Real Device Cloud](https://www.testmuai.com/real-device-cloud/)
- [Pricing](https://www.testmuai.com/pricing/)
- [Documentation](https://www.testmuai.com/support/docs/)