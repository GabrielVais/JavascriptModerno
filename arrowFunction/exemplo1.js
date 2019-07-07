const ireland = ['Dublin', 'Galway', 'Corki'];

//map cria um novo array do array

//funçao normal
const love = ireland.map(function(name){


    return `I love ${name}!`;


});


//arrow function
const loveArrow = ireland.map((name)=>{

    return `I love ${name}!`;

});


//arrow function single
const loveArrowSingle = ireland.map(name =>{

    return `I love ${name}!`;

});



//arrow function single line

const loveArrowSingleLine = ireland.map(name => `I love ${name}!`);



const loveChain = ireland.filter(name => name == 'Dublin')
                         .map(name => `I love ${name}!`);


  

console.log(loveChain);