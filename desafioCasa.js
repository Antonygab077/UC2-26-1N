const ask = require(`readline-sync`)

function classificarMana(mana) {
    if (mana < 25) {
        return `MORTO`
    } else if (mana > 25 && mana < 59) {
        return `INSTAVEL`
    }else if (mana >= 59) {
        return `ESTAVEL`
    }
}

function mostrarCristal(nome, mana) {
    console.log(`${nome} -> ${mana} -> ${classificarMana(mana)}`)
}

function somarMana(a, b, c, d) {

}

function mediaMana(total) {

}

function statusTorre(media) {

}

console.clear()


//Adicionando e guardando os cristais em um Array
let arrayCristais = []
let questionFirstCristal = ask.question(`Insira o primeiro cristal: `)
arrayCristais.push(questionFirstCristal)
let questionSecondCristal = ask.question(`Insira o segundo cristal: `)
arrayCristais.push(questionSecondCristal)
let questionThirdCristal = ask.question(`Insira o terceiro cristal: `)
arrayCristais.push(questionThirdCristal)
let questionFourthCristal = ask.question(`Insira o quarto cristal: `)
arrayCristais.push(questionFourthCristal)

//Adicionando e guardando as manas em um array
let arrayMana = []
let questionFirstMana = ask.question(`Mana do ${arrayCristais[0]}: `)
arrayMana.push(Number(questionFirstMana))
let questionSecondMana = ask.question(`Mana do ${arrayCristais[1]}: `)
arrayMana.push(Number(questionSecondMana))
let questionThirdMana = ask.question(`Mana do ${arrayCristais[2]}: `)
arrayMana.push(Number(questionThirdMana))
let questionFourthMana = ask.question(`Mana do ${arrayCristais[3]}: `)
arrayMana.push(Number(questionFourthMana))

//Escolhendo o cristal para mostrar
let escolhaCristal = ask.question(`Insira o Cristal: `)
if (escolhaCristal == arrayCristais[0]) {
    mostrarCristal(arrayCristais[0], arrayMana[0])
}
if (escolhaCristal == arrayCristais[1]) {
    mostrarCristal(arrayCristais[1], arrayMana[1])
}
if (escolhaCristal == arrayCristais[2]) {
    mostrarCristal(arrayCristais[2], arrayMana[2])
}
if (escolhaCristal == arrayCristais[3]) {
    mostrarCristal(arrayCristais[3], arrayMana[3])
}