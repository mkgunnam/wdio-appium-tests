const timeouts = require("../utils/globalTimeOuts")
let assert;

(async () => {
  try {
    const chai = await import('chai');
    assert = chai.assert;

    // Now you can use assert or any other chai functionality
    assert.strictEqual(1 + 1, 2, '1 + 1 should equal 2');
  } catch (err) {
    console.error('Error importing chai:', err);
  }
})();

class commonFunctions{

/** 
 * clicks on the element
 * @param {*} element : pass the element 
 * @param {*} timeTowait : pass the time to wait for the element to be displayed
 * @param {*} customMessage : pass the custome message to be displayed on failure 
 * @param {*} textToEnter : pass the input text
 */
    async setValue(element, textToEnter, timeTowait, customMessage){
        try{
           await element.waitForDisplayed({timeout : timeTowait})
           await element.setValue(textToEnter)
        }
        catch(error){
            if(customMessage){
                assert.fail(customMessage+" : "+error)
            }
            else{
                assert.fail("Failed performing send keys to the element : "+element+" due to following error "+error)
            }
        }
    }

/** 
 * clicks on the element
 * @param {*} element : pass the element 
 * @param {*} timeTowait : pass the time to wait for the element to be displayed
 * @param {*} customMessage : pass the custome message to be displayed on failure 
 * @param {*} waitBeforeClicking :
 */
    async clickOnElement(element, customMessage, timeTowait, waitBeforeClicking = true){
        try{
            this.waitUntilElementDisplayed(element, timeTowait, customMessage)
            await element.click();
        }
        catch(error){

            if(customMessage){
                assert.fail(customMessage+" : "+error)
            }
            else{
                assert.fail("Failed to click on the element : "+element+" due to following error "+error)
            }
        }
    }
 /**
  * 
  * @param {*} element : pass the element 
  * @param {*} timeTowait : pass the time to wait for the element to be displayed
  * @param {*} customMessage : pass the custome message to be displayed on failure 
  */

    async waitUntilElementDisplayed(element, timeTowait, customMessage){
        try{
            await element.waitForDisplayed({timeout : timeTowait})
        }
        catch(error){
            if(customMessage){
                assert.fail(customMessage+" : "+ error)
            }
            else{
                assert.fail("Failed to wait for the : "+element+ " to be displayed, due to "+error)
            }
        }
    }
}
module.exports = new commonFunctions()