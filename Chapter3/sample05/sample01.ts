class Item {
    public tax: number;
    private price: number;

    constructor(price: number, tax?: number){
        if (tax === undefined) {
            this.tax = 10;
        } else {
            this.tax = tax;
        }
        if (isFinite(price)){
            this.price = price;
        } else {
            this.price = 0;
        }
    }

    public getTax(): number {
        return Math.round(this.price * (this.tax/100));
    }
}