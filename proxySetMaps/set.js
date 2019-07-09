
//set é um objeto que permite guardar valores unicos de um tipo seja um tipo primitivo exemplo string ou um objeto


let mySet = new Set(['willian', 'jonas', 'godoy']);

console.log(mySet);

//pegar o tamanho do set
console.log(mySet.size);
//adcionando no set

mySet.add("teste");
console.log(mySet);

//deletando um elemento
mySet.delete('willian');
console.log(mySet);

//verificando se um elemento existe no set

console.log(mySet.has('willian'));

console.log(mySet.has('jonas'));

let it = mySet.values();

for(name of it){

    console.log(name);

}