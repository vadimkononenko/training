'use strict';

class Person {

  countFromOneToTen() {
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

function sayHello() {
  console.log('Hello');
}

module.exports = {
  Person,
  sayHello,
};
