class Person{

    count_from_one_to_ten() {
        for (let i = 1; i <= 10; i++) {
            console.log(i);
        }
    }


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
