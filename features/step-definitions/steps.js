const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../../pages/loginPage');
const ProductsPage = require('../../pages/productsPage');
// const allure = require('@wdio/allure-reporter').default;

     
Given(/^I enter (.*) and (.*)$/, async (username, password) => {
   
    await LoginPage.enterUserName(username)
   
    await LoginPage.enterPassword(password)
   
});

When("I click on login button", async () => {
   
   await LoginPage.clickOnLoginButton()

});
      
Then(/^I should see the (.*) label$/, async (text) => {

    await ProductsPage.verifyProductsLabel(text)
   
});

