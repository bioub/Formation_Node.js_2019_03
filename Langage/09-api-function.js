// 'use strict';

global.prenom = 'Toto';

function hello(p1, p2) {
  return `Hello ${p1}, ${p2}, my name is ${this && this.prenom}`;
}

const contact = {
  prenom: 'Romain',
};

console.log(hello.call(contact, 'Jean', 'Eric'));
console.log(hello.apply(contact, ['Jean', 'Eric']));
console.log(hello.call(contact, ...['Jean', 'Eric']));


function bind(fct, that) {
  return function(...args) {
    return fct.call(that, ...args);
  };
}

const helloContact = bind(hello, contact);
console.log(helloContact('Jean', 'Eric'));

const helloContactES5 = hello.bind(contact);
console.log(helloContactES5('Jean', 'Eric'));

