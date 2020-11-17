let say_hello = require('./second').say_hello;
let Person = require('./second').Person;

let person = new Person('Vadim', 19);

let name = person.name;
let age = person.age;

console.log(name, age);

say_hello();
