# wdio-appium-tests

This repository contains a comprehensive test automation suite for mobile applications using WebdriverIO (WDIO), Appium, and Cucumber. The project is designed to ensure the quality and performance of mobile apps across various platforms.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Writing Tests](#writing-tests)
- [Reporting](#reporting)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js** (v18.x or later)
- **Appium** (latest version)
- **Android SDK** (latest version)
- **Java JDK** (8 or later)
- **Device/Emulator** for testing

## Installation

Follow these steps to set up the project:

1. **Clone the repository:**
 
   git clone https://github.com/mkgunnam/appium-wdio-tests.git
   cd appium-wdio-tests
   
Install dependencies:

  npm install

2. **Set up Android SDK:**
Ensure your ANDROID_HOME environment variable is set correctly in your .zshrc or .bashrc:

  export ANDROID_HOME=/Users/muraligunnam/Library/Android/sdk
  export PATH=$ANDROID_HOME/emulator:$ANDROID_HOME/tools:$ANDROID_HOME/tools/bin:$ANDROID_HOME/platform-tools:$PATH

Apply the changes:

  source ~/.zshrc   # or source ~/.bashrc
  
Verify installations:

Run appium-doctor to check if all required dependencies are installed:

  appium-doctor --android

3. **Running Tests**
To run the tests, ensure that the Appium server is running and your device/emulator is set up correctly.

Start Appium server:

  appium
  
Run the tests:

  npx wdio
  
 4. **Writing Tests**

 Feature Files: Write your Gherkin scenarios in .feature files located in the features/testCases directory.
 Step Definitions: Implement the steps in the features/stepDefinitions directory.
 Locators: Define your element locators in utils/locators.js.
 User Actions: Implement common user actions in utils/userActions.js.

5. **Reporting**
The project uses Timeline report for generating test reports. After running the tests, the reports will be available in the reports directory.
