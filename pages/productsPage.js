const productsPageLocators = require("../pageLocators/productsPageLocators.js")
const userActions = require("../utils/userActions.js")
const timeOuts = require("../utils/globalTimeOuts.js")


class Products{

    async verifyProductsLabel(labelText){
        await userActions.waitUntilElementDisplayed(productsPageLocators.productsLabelText, timeOuts.maxTimeOut, "Failed while verifying the label in products page")
        await expect(productsPageLocators.productsLabelText).toBeExisting()
    }

}
module.exports = new Products()