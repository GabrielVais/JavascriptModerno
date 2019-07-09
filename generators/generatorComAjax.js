


function ajax(url){

    fetch(url)
    .then(data => data.json())
    .then(data => dados.next(data));

}



function* ajaxGen(){


    console.log('Buscando dados github...');

    const github =  yield ajax('https://developer.github.com/v3/users/GabrielVais');

    console.log(github);

}




const dados = ajaxGen();

dados.next();