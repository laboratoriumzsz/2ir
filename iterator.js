const bloczki = ["Lego","Cobi"];
const iterator = bloczki[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());