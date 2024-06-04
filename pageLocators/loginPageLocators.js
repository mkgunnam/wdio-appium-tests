class loginPageLocators{

    get userName(){
        return $('~test-Username')
    }

    get userPassword(){
        return $('~test-Password')
    }

    get loginBtn(){
        return $('//android.widget.TextView[@text="LOGIN"]')
    }
}

module.exports = new loginPageLocators()