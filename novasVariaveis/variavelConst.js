
//a variavel nao pode ser mudada mas o objeto da variavel pode ser mudada
const secretNumber = 28;


const will = {

        name: 'Willian',

        age: 53


}

//congelando o objeto para nao ser mudado
    Object.freeze(will);

    will.age = 26;

    console.log(will);
    
