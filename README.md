# wdio-appium-tests

This repository contains a comprehensive test automation suite for mobile applications using WebdriverIO (WDIO), Appium, and Cucumber. The project is designed to ensure the quality and performance of mobile apps across various platforms.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Running Tests](#running-tests)
- [Writing Tests](#writing-tests)
- [Reporting](#reporting)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

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
