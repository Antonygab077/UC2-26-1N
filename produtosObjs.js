const ask = require(`readline-sync`)

function registerProducts(name1, salePrice, manufacturingPrice, stock) {
    const productsRegister =
        { id: registerId, product: name1, salePrice: salePrice, manufacturingPrice: manufacturingPrice, stock: stock }

    registerId++
    products.push(productsRegister)
    console.log(`Product successfully registered.`)
}


function searchProductById() {
    for(let product of products) {
        if(questionIdSearch == product.id){
            return `
            Id: ${product.id}
            Name: ${product.name1}
            Sale Price: ${product.salePrice}
            Manufacturing Price: ${product.manufacturingPrice}
            Stock: ${product.stock}`
        }
    } 
    return `Invalid ID`
}

function searchProductByName() {

}

function showAllProducts() {

}

let products = []
let registerId = 1
let questionAddMore = `yes`

while (questionAddMore === `yes`) {
    let questionName = ask.question(`Enter the product name: `)
    let questionSalePrice = Number(ask.question(`Enter the selling price: `)).toString().replaceAll(".", ",")
    let questionManufacturingPrice = Number(ask.question(`Enter the manufacturing price: `)).toString().replaceAll(".", ",")
    let questionStock = Number(ask.question(`Enter stock: `))

    registerProducts(
        questionName,
        questionSalePrice,
        questionManufacturingPrice,
        questionStock
    )

    questionAddMore = ask.question(`Want to register another product? (yes/no): `)
    console.clear()

}

console.clear()
ask.question(`Press ENTER to continue...`)
let questionIdSearch = ask.question(`Enter the ID you want to search for: `)
console.log(searchProductById())

