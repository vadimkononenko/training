'use strict';

const sayHello = require('./second').sayHello;
const Person = require('./second').Person;

const person = new Person('Vadim', 19);

const name = person.name;
const age = person.age;

sayHello();

console.log(name, age);

person.countFromOneToTen();
