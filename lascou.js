const ask = require(`readline-sync`)
// =========================================
// LISTA DE EXERCÍCIOS - JAVASCRIPT
// =========================================



// =========================================
// EXERCÍCIO 1
// Crie variáveis para armazenar:
// - seu nome
// - sua idade
// - se você gosta de programar
//
// Imprima tudo em uma única frase
// =========================================
/*
let name = `Antony Gabriel`
let age = `16`
let like = `gosto`
console.log(`Meu nome é ${name}, tenho ${age} anos e ${like} gosto de programar`)
*/

// =========================================
// EXERCÍCIO 2
// Crie duas variáveis com números.
//
// Mostre no console:
// - soma
// - multiplicação
// - divisão
// - resto da divisão
// =========================================
/*
let num1 = 10
let num2 = 5
console.log(num1 + num2, num1 - num2, num1 / num2, num1 * num2)
*/


// =========================================
// EXERCÍCIO 3
// Crie duas variáveis com números.
//
// Mostre no console o resultado das comparações:
// - são iguais
// - são diferentes
// - o primeiro é maior
// - o segundo é menor ou igual
// =========================================
/*
let number1 =  10
let number2 = 5
console.log(number1 === number2, number1 !== number2, number1 > number2, number2 <= number1)
*/




// =========================================
// EXERCÍCIO 4
// Crie três variáveis booleanas:
// a = true
// b = false
// c = true
//
// Mostre no console o resultado das seguintes operações:
// - a e b
// - b e c
// - a e c
// - a ou b
// - b ou c
// - negação de a
// - negação de b
// =========================================
/*
let a = true
let b = false
let c = true
console.log(a && b, b && c, a && c, a || b, b || c, !a, !b)
*/




// =========================================
// EXERCÍCIO 5
// Peça ao usuário um número.
//
// Crie outra variável com esse mesmo valor,
// mas convertido para texto.
//
// Mostre:
// - valor e tipo da primeira
// - valor e tipo da segunda
// =========================================
/*
let question = ask.question(`Me fale um numero: `)
console.log(question, typeof question)
let convertido = question.toString()
console.log(convertido, typeof convertido)
*/



// =========================================
// EXERCÍCIO 6
// Crie uma variável com o seguinte valor:
// "   Aprender Javascript é legal   "
//
// Faça as seguintes operações:
// - remover os espaços no início e no fim
// - transformar toda a frase em maiúsculo
//
// Mostre:
// - a frase original
// - a frase sem espaços
// - a frase em maiúsculo
// - o tamanho da frase original
// - o tamanho da frase sem espaços
// =========================================
/*
let sla = `   Aprender Javascript é legal   `
console.log(sla)
console.log(sla.length)
console.log(sla.toUpperCase())
let slaNoSpace = sla.trim()
console.log(slaNoSpace)
console.log(slaNoSpace.length)
*/

// =========================================
// EXERCÍCIO 7
// Peça ao usuário uma frase sobre javascript.
//
// Faça as seguintes operações:
// - verifique se a frase contém a palavra "javascript"
// - substitua todas as ocorrências de "javascript" por "JS"
//
// Mostre:
// - a frase original
// - o resultado da verificação (true ou false)
// - a frase modificada
// =========================================
/*
let phrase = ask.question(`Escreva uma frase sobre JavaScript: `)
let verification = phrase.includes(`JavaScript`)
let replace = phrase.replaceAll(`JavaScript`, `JS`)
console.log(`Frase: ${phrase}, Verificaçao: ${verification}, Substituiçao: ${replace}`)
*/


// =========================================
// EXERCÍCIO 8
// Crie um array com pelo menos 5 elementos.
//
// Mostre:
// - o tamanho do array
// - o primeiro elemento
// - o último elemento
// =========================================
/*
let array = [`Azul`, `Vermelho`, `Amarelo`, `Roxo`, `Verde`]
console.log(`Tamanho: ${array.length}, Primeiro: ${array[0]}, Ultimo: ${array[4]}`)
*/


// =========================================
// EXERCÍCIO 9
// Crie um array com os números: 10, 20, 30, 40 e 50.
//
// Faça as seguintes alterações no array:
// - adicione os números 60 e 70 ao final
// - remova o primeiro elemento do array
// - remova o número que agora está na posição 2
//
// Mostre:
// - o array final
// - o tamanho do array antes e depois das alterações
// =========================================
/*
let array2 = [10, 20, 30, 40, 50]
console.log(array2.length)
array2.push(60, 70)
array2.splice(0, 1)
array2.splice(2, 1)
console.log(array2, array2.length)
*/



// =========================================
// EXERCÍCIO 10
// Crie um array com nomes.
//
// Peça ao usuário um nome.
//
// Mostre:
// - se o nome informado existe no array
// =========================================
/*
let arrayNames = [`Antony`, `Erick`, `Emanuel`]
let arrayVerification = ask.question(`Dgite um nome: `)
if (arrayNames.includes(arrayVerification)){
    console.log(`O nome existe no array`)
}else{
    console.log(`O nome NAO existe no array`)
}
*/


// =========================================
// EXERCÍCIO 11
// Peça ao usuário um nome (pode estar em qualquer formato).
//
// Crie outra variável com esse nome:
// - sem espaços no início e no fim
// - todo em minúsculas
// - com apenas a primeira letra em maiúscula
//
// Mostre:
// - o nome original
// - o nome formatado
// - o tamanho dos dois
// =========================================
/*
let userName = ask.question(`Escreva um nome: `)
let noSpace = userName.trim()
let lowerCase = userName.toLowerCase()
console.log(`Original: ${userName}, Sem espaço: ${noSpace}, Tudo minusculo: ${lowerCase}`)
*/



// =========================================
// EXERCÍCIO 12
// Peça ao usuário uma frase.
//
// Crie outra variável baseada nessa frase com as seguintes alterações:
// - todas as letras em minúsculo
// - remover espaços no início e no fim
// - substituir todas as vogais "a" por "i"
//
// Mostre:
// - a frase original
// - a frase modificada
// - o tamanho das duas frases
// =========================================
/*
let phrase2 = ask.question(`Escreva uma frase: `)
let alterada = phrase2.toLowerCase()
alterada.trim()
alterada.replaceAll("a", "i")
console.log(phrase2, alterada)
*/

// =========================================
// EXERCÍCIO 13
// Crie um array com 10 números.
//
// Remova o terceiro, o quarto e o sétimo elemento do array.
// Adicione um elemento entre o novo terceiro e o novo quarto elemento.
//
// Mostre o resultado
// =========================================
/*
let array3 = [1, 2, 3, 4, 5, 6, 7, 8 , 9, 10]
array3.splice(6, 1, `Uva`)
array3.splice(2, 2, `Laranja`)
console.log(array3)
*/

// =========================================
// EXERCÍCIO 14
// Crie uma variável sem valor.
//
// Mostre o tipo dela.
//
// Depois atribua um valor e mostre o tipo novamente.
// =========================================
/*
let noValor
console.log(typeof noValor)
noValor = `Emanuel quer banana`
console.log(typeof noValor)
*/

// =========================================
// EXERCÍCIO 15
// Peça ao usuário:
// - nome
// - idade
//
// Crie uma frase que combine tudo usando texto e variáveis.
// =========================================
let name1 = ask.question(`Qual seu nome? `)
let age1 = ask.question(`Qual sua idade? `)
console.log(`Seu nome eh ${name1} e voce tem ${age1} anos`)
