let ubranieKowboja = new Set();
ubranieKowboja.add('kapelusz');
ubranieKowboja.add('spodnie');
ubranieKowboja.add('beret');
ubranieKowboja.delete('beret');
console.log(ubranieKowboja.has('beret'));
console.log(ubranieKowboja.size);