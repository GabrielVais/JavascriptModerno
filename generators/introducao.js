
//GENERATORS

function* genNames(){

    yield 'Willian';

    yield 'Jonas';

    yield 'Gabriel';

}

const names = genNames();


//chamando o generator

console.log(names.next());