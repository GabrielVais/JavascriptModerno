
/* promise e um objeto com uma açao nao realizada que no futuro
 tem uma açao que vai ser realizada como uma promesa

 é muito utilizada para dados assincronos
 */

var defer = new Promise((resolve, reject) =>{

    setTimeout(() => {

        
    if (true){

        resolve('Hello its works!');


    }else{

            reject('Error!');

        }

 }, 6000);

});


//apos recebimento da promessa then = entao faça
defer.then((data) => console.log(data))
//apos o erro da promessa executar o catch
.catch((err) => console.log(err));



