
class Animal {


    constructor(name){

        this.name = name;



    }


    hello(){

        console.log(`I am ${this.name}`);


    }

}

class Dog extends Animal{

    constructor(name, sound){

        super(name);
        this.sound = sound;
    }


    bark(){


        console.log(`au au! ${this.sound} I am ${this.name}!`);


    }

}

const elephant = new Animal('Dumbo');

const dog = new Dog('Jake', 'auau');

console.log(elephant.hello());

console.log(dog.hello());