# Rod Licensing - Frontend Acceptance Tests

An acceptance test project initiator, keeping much of the WebDriver and WebdriverIO setup outside of the project.

# **PREREQUISITES**

You must use Node.js version 20.x or above. Visit Node.js and choose the version for your system.

You must have the Java Development Kit installed. Visit Oracle and choose the version for your system.

Install Node Version Manager.

# **Getting Started**

In terminal, make a project folder:

mkdir [project-name] && cd [project-name]

#**Initialise a Node.js project in that folder:**

npm init

#**Clone project to local directory:**

git clone https://github.com/DEFRA/rod-licensing-tests.git

Ensure Node version 20.19.2 is installed and running:

nvm install v20.19.2

nvm use v20.19.2

node -v

#**Running all the tests:**

npm start local

**Isolating Tests:**

To run isolated tests you can suffix the above command with:

npm start local --spec 01_my_isolated_test.feature

#**Writing Tests:**

Test Framework

Cucumber is a software tool that supports behavior-driven development. Central to the Cucumber BDD approach is its ordinary language parser called Gherkin. It allows expected software behaviors to be specified in a logical language that customers can understand.

Step Definitions

The tests use Step Definition to produce plain english test steps. A Steo definition is a Java method with an expression that links it to one or more Gherkin steps. When Cucumber executes a Gherkin step in a scenario, it will look for a matching step definition to execute.

Logging

The test use defra-loggfing-facade to log steps and errors. The DEFRA logging facade has been designed to standardise the logging functionality for digital services. It uses twelve-factor app principles and may be configured completely via environment variables.

Hooks

Available hooks are listed in hooks.conf.js to be modified as needed. Some experimentation may be needed to produce the desired outcome using the available arguments.

# BrowserStack:

To use BrowserStack, add the following environment variables:

BROWSERSTACK_ACCESSKEY=[your BrowserStack access key]

BROWSERSTACK_USER=[your BrowserStack username]

Then run tests using:

npm start browserstack
