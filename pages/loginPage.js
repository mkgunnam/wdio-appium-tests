const loginPageLocators = require("../pageLocators/loginPageLocators.js")
const userActions = require("../utils/userActions.js")
const timeOuts = require("../utils/globalTimeOuts.js")
class login{
/**
 * 
 * @param {*} username 
 */
    async enterUserName(username){
        await userActions.waitUntilElementDisplayed(loginPageLocators.userName, timeOuts.midTimeOut, 'Failed to wait for the use name to be displayed')
        await loginPageLocators.userName.addValue(username);
    }

    async enterPassword(password){
        await userActions.waitUntilElementDisplayed(loginPageLocators.userPassword, timeOuts.midTimeOut, 'Failed to wait for the user password to be displayed')
        await loginPageLocators.userPassword.addValue(password);
    }

    async clickOnLoginButton(){
        
        await userActions.waitUntilElementDisplayed(loginPageLocators.loginBtn, timeOuts.maxTimeOut, 'Failed to wait for the login button to be clickable')
        await userActions.clickOnElement(loginPageLocators.loginBtn, timeOuts.midTimeOut, 'Failed to click on the login button')
        // await loginPageLocators.loginBtn.click()
    }
}
module.exports= new login()