const ask = require(`readline-sync`)

function soma (num1, num2) {
    return num1 + num2
}

function subtracao (num3, num4) {
    return num3 - num4
}

function multiplicacao (num5, num6) {
    return num5 * num6
}

function divisao (num7, num8) {
    return num7 / num8
}

function restoDivisao (num9, num10) {
    return num9 % num10
}

console.clear()
let questionOperacao = ask.question(`0 - Soma 
1 - Subtracao 
2 - Multiplicacao  
3 - Divisao / 
4 - Resto da divisao.
Escolha sua operacao: `)
let questionFirstNumber = Number(ask.question(`Digite seu primeiro numero: `))
let questionSecondNumber = Number(ask.question(`Digite seu segundo numero: `))


switch(questionOperacao) {
    case `0`:
        console.log(soma(questionFirstNumber, questionSecondNumber))
        break;
    case `1`:
        console.log(subtracao(questionFirstNumber, questionSecondNumber))
        break
    case `2`:
        console.log(multiplicacao(questionFirstNumber, questionSecondNumber))
        break
    case `3`:
        console.log(divisao(questionFirstNumber, questionSecondNumber))
        break
    case `4`:
        console.log(restoDivisao(questionFirstNumber, questionSecondNumber))
        break
    default:
        console.log(`Voce inseriu uma opçao invalida`)
        break
}