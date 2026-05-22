const prompt = require('readline-sync');

const accounts = []

function createAccount(user, password) {
    const account = {
        user: user,
        password: password
    }
    console.log('Account created successfully')
    accounts.push(account)
    return accounts
}
function logIn (user, password) {
    for(let account of accounts){
        if(account.user === user && account.password === password) {
            return true
        }
    } 
    return false
}

while(true) {
    console.clear();
    console.log('Choose option \n1- Create new account \n2- Account login \n0- Exit');

    const option = Number(prompt.question(''))

    switch(option) {
        case 1:
            console.clear()
            const user = prompt.question('Enter your username: ');
            const password = prompt.question('Enter the user password: ', {hideEchoBack: true, mask: '*'});
            
            createAccount(user, password)

            prompt.question('Press ENTER to continue')
            break

        case 2:
            console.clear()
            const userValidate = prompt.question('Enter your username: ');
            const passwordValidate = prompt.question('Enter the user password: ', {hideEchoBack: true, mask: '*'});
            if(logIn(userValidate, passwordValidate)) {
                console.log(`Logged sucessfully!`)
            } else {
                console.log(`Username or Password wrong!`)
            }
            prompt.question(`Press ENTER to continue...`)
            break

        case 0: 
        console.clear()
            console.log(`Process closed`)
            process.exit()
        
        default: 
            console.log(`Invalid Option`)

    }
}