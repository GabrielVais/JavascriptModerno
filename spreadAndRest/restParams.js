
//metodo antigo
function multiply(mult, arg1, arg2, arg3){

    let array = [];

    array.push(mult * arg1);

    array.push(mult * arg2);

    array.push(mult * arg3);

    return array;

}
console.log(multiply(2, 1 ,3 ,4));


//metodo novo com restParams

function multiplyRest(mult, ...arguments){


    return arguments.map(arguments => arguments * mult);

    return arguments;

}

console.log(multiplyRest(5,3,4,5,6,7,8,9,10));