const ireland = {

    live: 'Dublin',

    love: 'Galway'

}

//normal
const text = 'Eu moro em ' + ireland.live + 'e sou apaixonado por ' + ireland.love + '!';

//template string

const newText = ` Eu moro em ${ireland.live} e sou apaixonado por ${ireland.love}`;


//pulando linhas template string

const newFruits = ` banana
                    orange
                    apple`;


console.log(newFruits);