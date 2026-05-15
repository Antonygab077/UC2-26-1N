const ask = require(`readline-sync`)

//Funcao para cadastrar produtos
function cadastrarProduto(nome, precoVenda, precoFab, estoque) {
    let arrayProduto = [
        registrarId,
        nome,
        precoVenda,
        precoFab,
        estoque
    ]

    produtos.push(arrayProduto)

    registrarId++
}

let produtos = []
let registrarId = 1
let questionContinue =  `sim`

console.clear()
//Loop para cadastrar produtos diferente
while (questionContinue === `sim`) {

    let questionName = ask.question('Insira o nome do produto: ')
    let questionSale = Number(ask.question('Insira o valor de venda: '))
    let questionManufacturing = Number(ask.question('Insira o valor de fabricacao: '))
    let questionStock = Number(ask.question('Insira o estoque atual: '))

    cadastrarProduto(
        questionName,
        questionSale,
        questionManufacturing,
        questionStock
    )
    
    questionContinue = ask.question(`Deseja cadastrar outro produto? (sim/nao): `).toLowerCase()
}

console.log(produtos)