
//serve para partir um elemento array em diversas partes


    let front = ['react', 'vue', 'angular'];

    let back = ['python', 'ruby', 'nojejs'];

    //juntando 2 arrays em 1 metodo normal
    let fullstack = front.concat(back);

    //adiconando uma variavel ao array

    fullstackNovo = [...front,'Rjs', ...back];



    //desmenbrando uma string
    console.log([...'will']);


    //desmembrando um array
    console.log(...front);

    console.log(fullstack);

    console.log(fullstackNovo);


    //juntando 2 arrays em 1 so array