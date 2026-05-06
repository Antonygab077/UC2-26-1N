const ask = require(`readline-sync`)

/*
function exercicio1(num1, num2) {
    if (num1 === num2) {
        return `${num1} e ${num2} sao iguais`
    }else {
        return `${num1} e ${num2} NAO sao iguais`
    }
}

let user1 = ask.question(`Digite um numero: `)
let user2 = ask.question(`Digite outro numero: `)

console.log(exercicio1(user1, user2))
*/

function exercicio3(num5, num6) {
    if (num5 === num6) {
        return `${num5} eh igual que ${num6}`
    } else if (num5 > num6) {
        return `${num5} eh maior a ${num6}`
    } else if (num5 < num6) {
        return `${num5} eh menor que ${num6}`
    } else {
        return `Numero nao identificado`
    }
}

let question = Number(ask.question(`Digite um numero: `))
let question2 = Number(ask.question(`Digite outro numero: `))

console.log(exercicio3(question, question2))
