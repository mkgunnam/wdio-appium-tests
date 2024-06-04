class ProductsPageLocator{

    get productsLabelText(){
        return $('//android.widget.TextView[@text="PRODUCTS"]')
    }
}
module.exports = new ProductsPageLocator()