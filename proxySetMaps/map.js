//map e um conjunto de chave valor parecido com objeto


let m = new Map();

//adcionado chave e valor
m.set('Willian', 26);

m.set('Jonas', 22);

m.set('Godoy', 30);

console.log(m);

//deletando no map
m.delete('Jonas');

console.log(m);

//buscando no map
console.log(m.has('Jonas'));

//verificando valores

m.values();

const it = m.values();

console.log(it.next());