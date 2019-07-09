function makeSandwiche(bread, cheese, source){



    console.log(`Your sandwich with ${bread} bread, 
    ${cheese} cheese and ${source} is done!`);



}


const ingredients = ['white', 'cheddar', 'barbecue'];

//utilizando o spread na funçao concatenando a constante ingredientes na funçao

makeSandwiche(...ingredients);