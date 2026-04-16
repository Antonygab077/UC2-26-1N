const ask = require(`readline-sync`)
// =========================================
/*


   █████████                                                   
  ███░░░░░███                                                  
 ░███    ░███  ████████  ████████   ██████   █████ ████  █████ 
 ░███████████ ░░███░░███░░███░░███ ░░░░░███ ░░███ ░███  ███░░  
 ░███░░░░░███  ░███ ░░░  ░███ ░░░   ███████  ░███ ░███ ░░█████ 
 ░███    ░███  ░███      ░███      ███░░███  ░███ ░███  ░░░░███
 █████   █████ █████     █████    ░░████████ ░░███████  ██████ 
░░░░░   ░░░░░ ░░░░░     ░░░░░      ░░░░░░░░   ░░░░░███ ░░░░░░  
                                              ███ ░███         
                                             ░░██████          
                                              ░░░░░░        
                                              
                                              
*/
// =========================================
// Instruções:
// - Leia cada enunciado com atenção
// - Implemente a solução logo abaixo de cada exercício
// - NÃO pule exercícios
// - Pesquise na internet métodos que você não conhece
// =========================================


// =========================================
// EXERCÍCIO 1
// Crie um array com pelo menos 6 filmes.
// Peça para o usuário digitar um número.
// Mostre o filme que está na posição informada.
// =========================================
/*
let array = [`Carros`, `Gigantes de Aço`, `John Wick`, `Velozes e Furiosos`, `Maze Runner`, `Harry Potter`]
let question = ask.question(`Digite um numero de 1 a 6: `)
console.log(array[question - 1])
*/

// =========================================
// EXERCÍCIO 2
// Crie um array com 8 tipos de bebidas.
// Mostre quantos elementos existem nele.
// =========================================
/*
let array2 = [`Água`, `Suco`, `Refrigerante`, `Cerveja`, `Vodka`, `Whisky`, `Vinho`, `Licor`]
console.log(array2.length)
*/

// =========================================
// EXERCÍCIO 3
// Crie um array com 5 Pokémons.
// Peça para o usuário digitar o nome de um Pokémon.
// Verifique se ele está no array.
// =========================================
/*
let array3 = [`Pikachu`, `Charmander`, `Squirtle`, `Bulbassaur`, `Onix`]
let question2 = ask.question(`Digite o nome de um Pokemon: `)
console.log(array3.includes(question2))
*/

// =========================================
// EXERCÍCIO 4
// Crie um array vazio.
// Peça ao usuário 3 nomes de jogos.
// Adicione ao array.
// Mostre o array final.
// =========================================
/*
let array4 = []
let question3 = ask.question(`Digite o nome de 3 jogos: `)
array4.push(question3)
console.log(array4)
*/

// =========================================
// EXERCÍCIO 5
// Crie um array com 5 séries.
// Remova a última série.
// Mostre o array atualizado.
// =========================================
/*
let array5 = [`Eu a patroa e as crianças`, `The walking dead`, `Peaky Blinders`, `The boys`, `Teen Wolf`]
array5.pop()
console.log(array5)
*/

// =========================================
// EXERCÍCIO 6
// Crie um array com 6 comidas.
// Remova 2 comidas a partir de uma posição específica.
// Mostre o array resultante.
// =========================================
/*
let array6 = [`Arroz`, `Feijao`, `Macarrao`, `Carne`, `Batata`]
array6.splice(3, 2)
console.log(array6)
*/

// =========================================
// EXERCÍCIO 7
// Crie um array com nomes de bandas.
// Mostre todas as bandas no console,
// separadas por " - ".
// =========================================
/*
let array7 = [`Nirvana`, `Metallica`, `Guns N Roses`, `Foo Figthers`, `Megadeath`, `Bon Jovi`,]
console.log(array7.join(' - '))
*/

// =========================================
// EXERCÍCIO 8
// Crie um array com preços de produtos.
// Mostre no console o primeiro e o último preço do array.
// =========================================
/*
let array8 = [`R$19,00`, `R$29,90`, `R$39,99`]
console.log(array8[0], array8[2])
*/

// =========================================
// EXERCÍCIO 9
// Crie um array com nomes de personagens de jogos.
// Ordene os nomes em ordem alfabética.
// =========================================
/*
let array9 = [`Link`, `Leon`, `Sonic`, `Mario`]
console.log(array9.sort())
*/

// =========================================
// EXERCÍCIO 10
// Crie um array com nomes de filmes repetidos.
// Mostre o tamanho do array.
// =========================================
/*
let array10 = [`Maze Runner`, `Maze Runner`, `Maze Runner`]
console.log(array10.length)
*/

// =========================================
// EXERCÍCIO 11
// Crie dois arrays:
// - um com filmes
// - outro com séries
// Junte os dois em um único array.
// =========================================
/*
let array11 = [`Carros`, `Gigantes de Aço`, `John Wick`, `Velozes e Furiosos`, `Maze Runner`, `Harry Potter`]
let array112 = [`Eu a patroa e as crianças`, `The walking dead`, `Peaky Blinders`, `The boys`, `Teen Wolf`]
console.log(array11.concat(array112))
*/

// =========================================
// EXERCÍCIO 12
// Crie um array com episódios de uma série.
// Inverta a ordem dos episódios.
// =========================================
/*
let array12 = [`EP: 1`, `EP: 2`, `EP: 3`, `EP: 4`, `EP: 5`, `EP: 6`]
console.log(array12.reverse())
*/

// =========================================
// DESAFIO EXTRA (NÃO OBRIGATÓRIO)
// Crie um sistema simples de catálogo de filmes:
// - Use pelo menos 3 métodos diferentes (map, filter, reduce, find, etc.)
// - Exemplo de ideias:
//   * Filtrar filmes por gênero
//   * Encontrar um filme específico
//   * Calcular média de notas dos filmes
// =========================================

let filmList = [
   {titulo: `CARROS`, genero: `ANIMACAO`, nota: `10`}, 
   {titulo: `GIGANTES DE AÇO`, genero: `ACAO`, nota: `9`}, 
   {titulo: `JOHN WICK`, genero: `ACAO`, nota: `8`}, 
   {titulo: `VELOZES E FURIOSOS`, genero: `AÇAO`, nota: `8.5`}, 
   {titulo: `MAZE RUNNER`, genero: `FICCAO CIENTIFICA`, nota: `10`}, 
   {titulo: `HARRY POTTER`, genero: `FICCAO CIENTIFICA`, nota: `8`}
]

const questionFind = ask.question(`Qual filme voce deseja: `)
const findFilm = filmList.find(film => film.titulo === questionFind.toUpperCase())
filmList.map(film => film.titulo)
console.log(findFilm)

const questionFilter = ask.question(`Qual genero voce deseja: `)
const filterFilm = filmList.filter(film => film.genero === questionFilter.toUpperCase())
filmList.map(film => film.genero)
console.log(filterFilm)


const questionNote = ask.question(`Qual nota minima voce deseja: `)
const noteFilm = filmList.filter(film => Number(film.nota) >= questionNote)
filmList.map(film => film.nota)
console.log(noteFilm)
