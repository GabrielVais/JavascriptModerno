
let obj = {

    name: 'Willian',
    age: 26

};


let proxy = new Proxy(obj, {

    get(target, name){

    console.log('Alguem esta pedindo o nome =D');


},

    set(target, name, value){

        console.log("Alguem esta mudando o nome");

        target[name] = value.toUpperCase();
}


});

console.log(proxy.name = '123');
