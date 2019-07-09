let obj1 = {

    name: 'Willian',

    age: 26

};

let obj2 =  {

    name: 'Jonas',

    age: 22


};

//weakset so aceita objetos
let ws = new WeakSet([obj1, obj2]);

console.log(ws.has(obj1));

