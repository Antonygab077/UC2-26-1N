const prompt = require(`readline-sync`)

function createCharacter(name, age, yourClass) {
    let character = {
        name: name,
        age: age,
        class: yourClass
    }

    return character
}

function generateEnemy(enemies) {

}

function attack(character, enemy) {

}

function defend(character) {

}

function usePotion(character) {

}

function combatMenu() {

}

function startCombat(character, enemy) {

}

//Creating classes with objects
let warrior = {
    ClassName: `Warrior`,
    health: 140,
    defense: 12,
    potions: 3,
    attack: function () {

        console.log("⚒️ The warrior strikes with a powerful attack!")
        let damage = Math.floor(Math.random() * 15) + 15

        return damage
    }
}

let ranger = {
    ClassName: `Ranger`,
    health: 120,
    defense: 10,
    potions: 3,
    attack: function() {
        console.log("🏹 The ranger strikes with a powerful attack!")
        let damage = Math.floor(Math.random() * 15) + 20

        return damage
    }
}

let wizard = {
    ClassName: `Wizard`,
    health: 110,
    defense: 8,
    potions: 3,
    attack: function() {
        console.log("🪄 The wizard strikes with a powerful attack!")
        let damage = Math.floor(Math.random() * 15) + 30

        return damage
    }
}
