

//array fill faz um auto preenchemento do array


//definindo um array de 50 espaços
const array = new Array(50);


//povoando os 50 espaços 
array.fill('lol');


//definindo um array
const newArray = [1, 2, 3, 4, 5, 6];

//povoando com uma string somente os numeros 1 e 3
newArray.fill('lol', 1, 3);

console.log(array);

console.log(newArray);