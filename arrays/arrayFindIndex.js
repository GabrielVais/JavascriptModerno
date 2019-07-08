

/*find e findIndex serve para procurar find 
= procura 1 dado e findIndex procura o primeiro valor de um array

*/

const data = [

    {
    name: 'Willian',
    age: 26,
    city:'Dublin'

    },
     {
        name: 'Jonas',
        age: 22,
        city: 'Cologne'

    }
];

//ARRAY FIND
const sampleArray = [4, -5, 0];

/*fazendo uma arrow function para buscar os dados x = cada valor do array

     x => x e < 0

     procurar todos arrays que forem < 
*/
const underZero = sampleArray.find(x => x < 0);

console.log(underZero);


//ARRAY INDEX

const jonas = data.find(person => person.name === 'Jonas');


const jonasIndex = data.findIndex(person => person.name === 'Jonas');

console.log(jonasIndex);

