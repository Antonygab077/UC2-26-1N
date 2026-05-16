const ask = require(`readline-sync`)

let produtos = []
let registrarId = 1
let questionContinue = `sim`

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

//Funcao para buscar por id
function buscarProdutoPorId(registrarId) {
    for (let i = 0; i < produtos.length; i++) {
        if (registrarId == produtos[i][0]) {
            return `
            id: ${produtos[i][0]}
            Produto: ${produtos[i][1]}
            Preco: ${produtos[i][2]}
            Preco Fabricacao: ${produtos[i][3]}
            Quantidade em estoque: ${produtos[i][4]}
            `
        }

    }
    return `Nao a produto`
}
//Funcao para buscar por nome
function buscarProdutoPorNome(nome) {
    let findProd = [];

    for (let i = 0; i < produtos.length; i++) {
        if (nome === produtos[i][1]) {
            findProd.push(produtos[i])
        }
    }
    return `Produtos encontrados com o nome ${nome}: ${JSON.stringify(findProd)}`
}
//Funcao para mostrar produtos
function showProducts(produtos) {
    console.log('TODOS OS PRODUTOS CADASTRADOS:')
    for (let i = 0; i < produtos.length; i++) {

        console.log(` 
        id: ${produtos[i][0]}
        Produto: ${produtos[i][1]}
        Preco: R$${produtos[i][2]}
        Preco Fabricacao: R$${produtos[i][3]}
        Quantidade em estoque: ${produtos[i][4]} 
        `)
    }
}



console.clear()
//Loop para cadastrar produtos diferentes
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
console.clear()
console.log(produtos)

let searchId = ask.question("Digite o id de seu produto que deseja pesquisar: ")

console.log(buscarProdutoPorId(searchId))


let buscaNome = ask.question('Buscar produto por nome: ')

console.log(buscarProdutoPorNome(buscaNome));

showProducts(produtos)