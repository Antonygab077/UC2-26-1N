let ask = require(`readline-sync`)
// LISTA DE EXERCÍCIOS - STRINGS EM JAVASCRIPT
// Utilize o pacote readline-sync para entrada de dados quando necessário.
// Resolva cada exercício separadamente.

// 1)
// Peça para o usuário digitar um nome completo.
// Armazene esse valor em uma variável.
// Exiba no console:
// - O nome digitado
// - A quantidade total de caracteres do nome
let name = ask.question(`Qual seu nome completo? `)
console.log(`Nome: ${name}, Quantidade de caracteres: ${name.length}`)

// 2)
// Peça para o usuário digitar uma frase.
// Exiba:
// - A frase toda em letras maiúsculas
// - A frase toda em letras minúsculas
let fraseDa2 = ask.question(`Escreva uma frase qualquer: `)
console.log(`Maisuculo: ${fraseDa2.toUpperCase()}, Minusculo: ${fraseDa2.toLocaleLowerCase()}`)

// 3)
// Declare uma variável que armazene a frase "  Socorram-me! Subi no onibus em Marrocos!      "
// Exiba:
// - O texto original
// - O texto sem os espaços desnecessários
// - O tamanho antes e depois da remoção dos espaços
let fraseDa3 = (`  Socorram-me! Subi no onibus em Marrocos!      `)
console.log(fraseDa3, fraseDa3.length)
fraseDa3 = fraseDa3.trim()
console.log(fraseDa3, fraseDa3.length)



// 4)
// Armazene em uma variável uma string com o nome de 5 frutas a sua escolha.
// Depois peça para o usuário digitar o nome de uma fruta qualquer.
// Exiba no console um boolean indicando se a string contém a palavra fruta pelo usuário.
let fruits = `Melancia, Banana, Uva, Mirtilo, Ameixa`
let questionDa4 = ask.question(`Me fale uma fruta qualquer: `)
let trueOrFalse =  fruits.includes(questionDa4)
console.log(trueOrFalse)

// 5)
// Peça para o usuário digitar uma frase.
// Peça também para o usuário digitar uma palavra que deseja substituir.
// Peça ainda uma nova palavra para substituição.
// Substitua todas as ocorrências da palavra informada pela nova palavra.
// Exiba o resultado.
let questionDa5 = ask.question(`Digite uma frase: `)
let questionDa51 = ask.question(`Digite uma palavra que deseja substituir: `)
let questionDa52 = ask.question(`Digite uma nova palavra para substituicao: `)
let resultDa5 = questionDa5.replaceAll(questionDa51, questionDa52) 
console.log(resultDa5)

// 6)
// Crie duas variáveis com valores numéricos definidos por você.
// Exiba:
// - A soma desses valores
// - Uma frase concatenada explicando o resultado, utilizando template string
let num1 = 20
let num2 = 25
let resultDa6 = num1 + num2
console.log(`A gente pegou ` + num1 + ` e somou com ` + num2 + ` que deu ` + resultDa6)

// 7)
// Peça para o usuário digitar qualquer valor.
// Exiba:
// - O valor digitado
// - O tipo desse valor usando typeof
let val = 0
console.log(`Valor digitado: ${val}, Tipo do valor: ${typeof val}`)

// 8)
// Peça para o usuário digitar duas palavras e armazene em duas variáveis diferentes.
// Crie uma nova variável que seja a junção dessas palavras com um espaço entre elas.
// Exiba:
// - A frase final
// - O tamanho total da frase
let questionDa81 = ask.question(`Escreva uma palavra: `)
let questionDa82 = ask.question(`Agora escreva outra: `)
let togheter = `${questionDa81} ${questionDa82}`
console.log(togheter)
console.log(togheter.length)

// 9)
// Peça para o usuário digitar uma frase.
// Peça também para o usuário digitar uma letra.
// Transforme a frase para:
// - Toda em maiúsculas
// - Depois substitua todas as ocorrências da letra informada por "*"
// Exiba o resultado final.
let questionDa91 = ask.question(`Digite uma frase: `)
let questionDa92 = ask.question(`Digite uma letra: `)
let UpperCase9 = questionDa91.toUpperCase()
let subs = questionDa91.replaceAll(questionDa92, `*`)
console.log(subs)
