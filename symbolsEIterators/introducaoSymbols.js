
//symbol é usado para criar hashs 

//symbol é imutavel e unico
let foo = Symbol('name');

console.log(foo);


//symbol pode ser transformado em objeto
let obj = {

    [Symbol('name')]: 'Willian',
    [Symbol('age')]: 26,
    city: 'Dublin'

};


const symbols = Object.getOwnPropertySymbols(obj);

const data = symbols.map(sym => obj[sym]);

console.log(data);