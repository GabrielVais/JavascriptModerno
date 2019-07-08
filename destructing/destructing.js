var data ={

    name: 'Willian',
    surname: 'Justen',
    age: 25,
    blog: 'https//google.com.br',
    social:{

        twitter: '@willian',
        facebook: '/willian'

    }

};

//destruting permite pegar nome de elementos e variaveis a partir de objetos


const{name, surname} = data;

console.log(name);

console.log(surname);

//identaçao destructing

const{facebook, twitter} = data.social;

console.log(facebook);

console.log(twitter);

//mudando o valor da variavel com destructing
const{facebook: fb} = data.social;

console.log(fb);

//definindo um valor Default
const {city = 'Dublin'} = data;

//ignora se o valor ja existe

console.log(city);