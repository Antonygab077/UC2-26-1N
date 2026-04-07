const ask = require(`readline-sync`)

/*
let array = [`Pitbull`, `Bulldog`, `Husky`, `Pastor alemão`, `Lulu`]
console.log(`0: Pitbull`, `1: Bulldog`, `2: Husky`, `3: Pastor alemão`, `4: Lulu`)
let question = ask.question(`Escolha uma raca: `)
let result = array[question]
console.log(result)

let array = [1, 2, 3, 4, 5, 6]
console.log(array)
console.log(array.length)
array.push(7)
console.log(array)
array.splice(3, 2)
console.log(array)
console.log(array.length)
*/

const frase = `O inter acabou com a minha felicidade`
let upperCase = frase.toUpperCase()
let lenguage = frase.replaceAll(`a`, `i`)
let numbers = frase.length
console.log(`Tudo maiusculo: ${upperCase}, A por I: ${lenguage}, Numero de caracteres: ${numbers}`)