class Person{
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    }
}

function say_hello() {
    console.log("Hello!");
}

module.exports = {
    Person : Person,
    say_hello : say_hello,
}
