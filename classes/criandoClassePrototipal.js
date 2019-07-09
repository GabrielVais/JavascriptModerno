
//classe

class Animal{
    
    //construindo propriedades do objeco com constructor

    constructor(kind, sound){


        this.kind = kind;

        this.sound = sound;
    }

    //chamando metodos

    hello(){


        console.log(`${this.sound} I am ${this.kind}!`);

    }

    //metodos staticos

    static info(){

        console.log('This is a class to create animals!');

    }

    //metodos get e setters

    get name(){

        console.log(`${this.sound} My name is jake!`);

    
    }


    set nickname(nick){

        this.nick = nick;

    }

}


const dog = new Animal('dog', 'AUAU');

const cat = new Animal('cat', 'MIAU');

console.log(dog.hello(), cat.hello());

console.log(Animal.info());