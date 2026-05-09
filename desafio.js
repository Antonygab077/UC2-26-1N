const ask = require(`readline-sync`)

function classificarMana(mana) {
    if (mana < 25) {
        return `Morto`
    } else if (mana >= 60) {
        return `Estavel`
    } else if (mana > 25) {
        return `Instavel`
    } else if (mana < 60) {
        return `Instavel`
    }
}

function mostrarCristal(nome, mana) { 
   
}

function somarMana(a, b, c, d) {

}

function mediaMana(total) {

}

function statusTorre(media) {

}

console.clear()
let questionMana = ask.question(`Digite a mana atual: `)
console.log(classificarMana(questionMana))
let cristaisNomes = []
let guardarNomes = ask.question('Digite os nomes:  ')
cristaisNomes.push(guardarNomes.split(", "))
console.log(cristaisNomes)
//Rubi Solar, Safira Lunar, Onix Sombrio, Esmeralda Viva