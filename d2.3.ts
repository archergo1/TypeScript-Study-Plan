class Animal {

    name: string

    constructor(name: string) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise.`);
    }

    sleep() {
        console.log(`zzz`)
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
        // 呼叫父類別的 constructor
    }

    speak() {
        super.sleep()
        super.speak(); // 呼叫父類別的 speak 方法
    }
}
const dog = new Dog('Mitzie');
dog.speak();