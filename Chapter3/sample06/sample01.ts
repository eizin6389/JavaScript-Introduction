class Book {
    private _name: string = '';

    set name(value: string) {
        this._name = value;
    }

    get name(): string {
        return this._name;
    }
}

let mybook = new Book();
mybook.name = 'JavaScript入門';

console.log(mybook.name);