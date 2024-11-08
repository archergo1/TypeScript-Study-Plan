class Animal {

    #job
    // 建構函式
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log(this)
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

}

const animal = new Animal('Jack'); // 創建實例
console.log(animal.name); 

// call getter method
let guess = animal.name
console.log('guess',guess);

// call setter method
animal.name = 'PETER'
console.log(animal)