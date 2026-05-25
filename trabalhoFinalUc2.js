const prompt = require(`readline-sync`)

function createCharacter(name, yourClass) {
    let character = {
        name: name,
        class: yourClass
    }

    return character
}

function generateEnemy(enemies) {
    while (enemies.length > 0) {
        let enemiesRandom = Math.floor(Math.random() * enemies.length) //Picking a random enemy
        let enemyDelete = enemies.splice(enemiesRandom, 1)[0] //Removing this enemy from the array
        return enemyDelete
    }
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
    attack: function () {
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
    attack: function () {
        console.log("🪄 The wizard strikes with a powerful attack!")
        let damage = Math.floor(Math.random() * 15) + 30

        return damage
    }
}

//Creating enemies with objects
let enemies = [
    {
        name: `Gorak`,
        health: 65,
        minDamage: 15,
        maxDamage: 23
    },
    {
        name: `Morthis`,
        health: 75,
        minDamage: 10,
        maxDamage: 18
    },
    {
        name: `Zargul`,
        health: 50,
        minDamage: 20,
        maxDamage: 28
    },
    {
        name: `Velkan`,
        health: 100,
        minDamage: 10,
        maxDamage: 15
    },
    {
        name: `Nyrax`,
        health: 45,
        minDamage: 25,
        maxDamage: 33
    }
]

//Variables
let character = ``
let enemy = generateEnemy(enemies)
let option //Empty variable for while menu

//Menu for creating a character.
while (option !== 1 && option !== 0) {
    console.clear()
    console.log(`
                    ===========================
                        WELCOME TO THE RPG!
                    ===========================

                    1 - Create a character
                    0 - Exit
        `)

    option = Number(prompt.question(`Choose an option: `))

    //Switch to choose the character's class
    switch (option) {
        case 1:
            console.clear()
            let chooseYourName = prompt.question(`What is your name? Tell me: `)
            console.clear()
            console.log(`

                    |     WARRIOR     |     RANGER      |     WIZARD      |
                    |                 |                 |                 |
                    |  Health: 140    |  Health: 120    |  Health: 110    |
                    |  Defense: 12    |  Defense: 10    |  Defense: 8     |
                    |  Attack: 15/30  |  Attack: 15/35  |  Attack: 15/45  |
                    |  Potions: 3     |  Potions: 3     |  Potions: 3     |
                    `)
            let chooseYourClass = Number(prompt.question(`

                    1 - Warrior
                    2 - Ranger
                    3 - Wizard

                    Choose your class: `))

            switch (chooseYourClass) {
                case 1:
                    character = createCharacter(chooseYourName, warrior)
                    console.log(character)
                    break
                case 2:
                    character = createCharacter(chooseYourName, ranger)
                    console.log(character)
                    break
                case 3:
                    character = createCharacter(chooseYourName, wizard)
                    console.log(character)
                    break
                default:
                    console.log(`Invalid Option`)
            }
            break

        case 0:
            console.clear()
            process.exit()

        default:
            console.clear()
            console.log(`Invalid option!`)
            prompt.question(`Press ENTER to continue...`)
    }
}
