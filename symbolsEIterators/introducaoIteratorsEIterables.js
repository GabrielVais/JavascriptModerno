

/* Iterators e itarable servem para
iterar alguma açao/elementos

elementos que podem ser iteratos sao 
Iterables

e elementos que sirvam para iterar
 o outro elemento
e chamado de iterators

*/


var txt = 'Ireland';

var it = txt[Symbol.iterator]();



for(letter of txt){

    console.log(letter);

    if(letter === 'a') break;

}