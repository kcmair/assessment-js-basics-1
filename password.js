const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log (`Welcome to the password validator tool.`);

reader.question(`Please enter a password that you would like to validate. `, function(input){

    // Make sure there is at least one upper case letter
    let validPass = false
    for (let i = 0; !validPass && i < input.length; i++){
        if (input.charCodeAt(i) > 64 && input.charCodeAt(i) < 91){
            validPass = true
        }
    }
    if (!validPass){
        console.log (`Please include a capital letter.`)
    }

    // Make sure there is at least one lower case character
    validPass = false
    for (let i = 0; !validPass && i < input.length; i++){
        if (input.charCodeAt(i) > 96 && input.charCodeAt(i) < 123){
            validPass = true
        }
    }
    if (!validPass){
        console.log (`Please include a lower case letter.`)
    }

    // Make shure it's at least 10 characters long
    if (input.length < 10){
        console.log (`That password is to short.`)
        validPass = false
    }

    // Make sure there aren't any spaces
    if (input.includes(` `)){
        console.log (`No spaces allowd`)
        validPass = false
    }

    // Make sure there is at least one special character
    if (input.includes(`!`) || input.includes(`@`) || input.includes(`#`) || input.includes(`$`) || input.includes(`%`) || input.includes(`&`) || input.includes(`*`) || input.includes(`?`) || input.includes(`;`) || input.includes(`:`) || input.includes(`_`)){
        // Do nothing
    } else {
        console.log (`Please inculde a special character.`)
        validPass = false
    }

    // If all requirements are met
    if (validPass){
        console.log (`That is a valid password.`);
    }
    reader.close()
});
