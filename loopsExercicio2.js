let array = [11, 15, 18, 14, 12, 13];
let maior = array[0]

for(let i = 0; i < array.length; i++) {
    if (array[i] > maior) {
        maior = array[i]
    }
}

console.log(`O maior numero eh ${maior}`)
