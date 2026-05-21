const ask = require(`readline-sync`)

function registerProducts(name1, salePrice, manufacturingPrice, stock) {
    const productsRegister =
        { id: registerId, product: name1, salePrice: salePrice, manufacturingPrice: manufacturingPrice, stock: stock }

    registerId++
    products.push(productsRegister)
    console.log(`Product successfully registered.`)
}


function searchProductById(searchId) {
    for (let product of products) {
        if (searchId == product.id) {
            return `
            Id: ${product.id}
            Name: ${product.product}
            Sale Price: ${product.salePrice}
            Manufacturing Price: ${product.manufacturingPrice}
            Stock: ${product.stock}`
        }
    }
    return `Invalid ID`
}

function searchProductByName(searchName) {
    for (let productName of products) {
        if (searchName == productName.product) {
            return `
            Id: ${productName.id}
            Name: ${productName.product}
            Sale Price: ${productName.salePrice}
            Manufacturing Price: ${productName.manufacturingPrice}
            Stock: ${productName.stock}`
        }
    }
    return `Invalid name`
}

function showAllProducts() {
    return products
}

let products = []
let registerId = 1
let questionAddMore = `yes`

while (true) {
    console.clear()
    console.log(`
CHOSE AN OPTION

1 - Register product
2 - Search product by ID
3 - Search product by Name
4 - Show all products
0 - Exit
    `)

    const option = Number(ask.question(``))

    switch (option) {
        case 1:
            console.clear()
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

                console.clear()
                questionAddMore = ask.question(`Want to register another product? (yes/no): `)
                console.clear()

            }
            break

        case 2:
            console.clear()
            let questionIdSearch = ask.question(`Enter the ID you want to search for: `)
            console.log(searchProductById(questionIdSearch))
            ask.question(`Press ENTER to continue...`)
            break

        case 3:
            console.clear()
            let questionNameSearch = ask.question(`Enter the name you want to search for: `)
            console.log(searchProductByName(questionNameSearch))
            ask.question(`Press ENTER to continue...`)
            break

        case 4:
            console.log(showAllProducts())
            ask.question(`Press ENTER to continue...`)
            break

        case 0:
            process.exit()
            break

        default:
            console.log(`Invalid Option`)
    }
}