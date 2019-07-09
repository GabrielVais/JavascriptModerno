
const currency = new Promise((resolve, reject)=>{


    setTimeout(() => {
        
        resolve({ currency: 'euro', value: 3.50});

    }, 2000);

});

    const countries = new Promise((resolve, reject)=>{

            
            resolve(['Ireland', 'England', 'Scotland']);

     

    });


        //pegando todas promises dentro de uma lista com Promise.all
      //  Promise.all([currency, countries])
      //    .then(responses =>{

//Promise.race faz o mesmo q o all so que ignora todo o resto apos a primeira promise for respondida

        Promise.race([currency, countries])
        .then(responses =>{

            console.log(responses);


 });



  

