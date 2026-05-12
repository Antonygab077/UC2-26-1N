const ask = require(`readline-sync`)

let user = null
let soma = 0

while(user !== 0) {
    user = Number(ask.question(`Digite um numero: `))
    soma = soma + user
}

console.log(soma)