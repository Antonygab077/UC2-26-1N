const ask = require('readline-sync')

function exercicio5(ensinoMedioConcluido, idade, cursandoOutraFaculdade) {

    if (ensinoMedioConcluido && idade >= 18 && !cursandoOutraFaculdade) {
        console.log('Parabéns! Você está apto a ingressar em nossa instituição')
    } else {
        console.log('Infelizmente você não atende aos requisitos necessários')
    }
}

let ensinoMedioConcluido = ask.question('Voce ja concluiu o ensino medio? (sim/nao) ').toLowerCase() === 'sim'

let idade = Number(ask.question('Voce ja tem 18 anos? Informe sua idade: '))

let cursandoOutraFaculdade = ask.question('Voce esta fazendo outra faculdade? (sim/nao) ').toLowerCase() === 'sim'

exercicio5(ensinoMedioConcluido, idade, cursandoOutraFaculdad
    