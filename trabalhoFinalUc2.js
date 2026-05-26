const prompt = require(`readline-sync`)

function createCharacter(name, yourClass) {
    let character = {
        name: name,
        class: yourClass,
        health: yourClass.health,
        defense: yourClass.defense,
        potions: yourClass.potions,
        defending: false
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
    let damage = character.class.attack() //Calling the attack function
    enemy.health -= damage //Taking the enemy's life and reducing the damage dealt
    return damage
}

function defend(character) {
    character.defending = true
}

//Additional function not mandatory
function receiveDamage(character, damage) {
    if (character.defending) {
        damage = Math.round(damage / 2) //It was supposed to split the damage in 2
        character.defending = false //Cancel the defense after 1 attack.
    }

    character.health -= damage

    return damage
}

function usePotion(character) {
    if (character.potions > 0) {
        let heal = 20
        
        character.health += heal
        character.potions--

        console.log(`You used a potion and healed ${heal} HP`)
        console.log(`Potions left: ${character.potions}`)
    } else {
        console.log("No potions left ❌")
    }
}

function combatMenu(character, enemy) {
    let choice = Number(prompt.question(`
        Choose an action:
        1 - Attack 
        2 - Defend 
        3 - Potion 
        : `
    ))

    if (choice == 1) {
        let damage = attack(character, enemy)
        console.log(`You dealt ${damage} damage`)
        prompt.question(`Press ENTER to continue...`)
        console.clear()
    } 
    
    else if (choice == 2) {
        defend(character)
        console.log("You are defending 🛡️")
        prompt.question(`Press ENTER to continue...`)
        console.clear()
    } 
    
    else if (choice == 3) {
        usePotion(character)
        prompt.question(`Press ENTER to continue...`)
        console.clear()
    }

    else {
        console.log("Invalid choice")
    }
}

function startCombat(character, enemy) {
    while (character.health > 0 && enemy.health > 0) {
        
        combatMenu(character, enemy)

        if (enemy.health <= 0) {
            console.log("You win 😎")
            break
        }

        let damage = enemy.attack()
        let finalDamage = receiveDamage(character, damage)

        console.log(`Enemy dealt ${finalDamage} damage`)
        console.log(`Your health: ${character.health}`)
        console.log(`Enemy health: ${enemy.health}`)
    }

    if (character.health <= 0) {
        console.log("You died 💀")
    }
    prompt.question(`Press ENTER to continue...`)
    console.clear()
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
        attack: function () {
            return Math.floor(Math.random() * 8) + 15
        }
    },
    {
        name: `Morthis`,
        health: 75,
        attack: function () {
            return Math.floor(Math.random() * 8) + 10
        }
    },
    {
        name: `Zargul`,
        health: 50,
        attack: function () {
            return Math.floor(Math.random() * 8) + 20
        }
    },
    {
        name: `Velkan`,
        health: 100,
        attack: function () {
            return Math.floor(Math.random() * 5) + 10
        }
    },
    {
        name: `Nyrax`,
        health: 45,
        attack: function () {
            return Math.floor(Math.random() * 8) + 25
        }
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
                    |  Attack: 15/30  |  Attack: 20/35  |  Attack: 30/45  |
                    |  Potions: 3     |  Potions: 3     |  Potions: 3     |
                    `)
            let chooseYourClass = Number(prompt.question(`

                    1 - Warrior
                    2 - Ranger
                    3 - Wizard

                    Choose your class: `))
                    prompt.question(`Press ENTER to view your character...`)
                    console.clear()

            switch (chooseYourClass) {
                case 1:
                    character = createCharacter(chooseYourName, warrior)
                    console.log(`
                    Your Name: ${chooseYourName}
                    Your Class: ${warrior.ClassName}
                    Your Health: ${warrior.health}
                    Your Defense: ${warrior.defense}
                    Your Attack: Min 15 Max 30
                    Your Potions: ${warrior.potions}
                    `)
                    prompt.question(`PRESS ENTER TO START THE GAME...`)
                    break
                    
                case 2:
                    character = createCharacter(chooseYourName, ranger)
                    console.log(`
                    Your Name: ${chooseYourName}
                    Your Class: ${ranger.ClassName}
                    Your Health: ${ranger.health}
                    Your Defense: ${ranger.defense}
                    Your Attack: Min 20 Max 35
                    Your Potions: ${ranger.potions}
                    `)
                    prompt.question(`PRESS ENTER TO START THE GAME...`)
                    break

                case 3:
                    character = createCharacter(chooseYourName, wizard)
                    console.log(`
                    Your Name: ${chooseYourName}
                    Your Class: ${wizard.ClassName}
                    Your Health: ${wizard.health}
                    Your Defense: ${wizard.defense}
                    Your Attack: Min 30 Max 45
                    Your Potions: ${wizard.potions}
                    `)
                    prompt.question(`PRESS ENTER TO START THE GAME...`)
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

while (enemies.length > 0 && character.health > 0) {
    
    let enemy = generateEnemy(enemies)

    console.clear()
    console.log(`A wild ${enemy.name} appeared! 👹`)
    console.log(`Enemy HP: ${enemy.health}`)

    startCombat(character, enemy)

    if (character.health > 0) {
        console.log(`You defeated ${enemy.name}! 🎉`)
        prompt.question("Press ENTER to continue...")
    }
}

if (character.health > 0) {
    console.log("🏆 You defeated ALL enemies! You win the game!")
}
