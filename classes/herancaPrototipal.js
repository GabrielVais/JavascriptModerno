
//classe
function Animal(kind, sound){

    //funçao construtora

    this.kind = kind;

    this.sound = sound;


}
//criando uma funçao dentro do prototype
Animal.prototype.hello = function(){

    console.log(`${this.sound} I am ${this.kind}!`);

}

const dog = new Animal('dog', 'AUAU');

const cat = new Animal('cat', 'MIAU');

console.log(dog.hello(), cat.hello());