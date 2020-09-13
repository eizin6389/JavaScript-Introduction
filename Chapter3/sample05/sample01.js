var Item = /** @class */ (function () {
    function Item(price, tax) {
        if (tax === undefined) {
            this.tax = 10;
        }
        else {
            this.tax = tax;
        }
        if (isFinite(price)) {
            this.price = price;
        }
        else {
            this.price = 0;
        }
    }
    Item.prototype.getTax = function () {
        return Math.round(this.price * (this.tax / 100));
    };
    return Item;
}());
