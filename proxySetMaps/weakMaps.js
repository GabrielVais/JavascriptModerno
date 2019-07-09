let obj1 = {

    name: 'Willian',

    age: 26


};


let obj2 = {

    name: 'Jonas',

    age: 22


};

let wm = new WeakMap();

wm.set(obj1, 'info do WIllian');

wm.set(obj2, 'info do jonas');

console.log(wm);