const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log (`Welcome to the password validator tool.`);

validPass = true;
reader.question(`Please enter a password that you would like to validate. `, function(input){
    if (input.length < 10){
        console.log (`That password is to short.`)
        validPass = false
    }
    if (input.includes(` `)){
        console.log (`No spaces allowd`)
    }
    if (!input.includes(`!`) || !input.includes(`@`) || !input.includes(`#`) || !input.includes(`$`) || !input.includes(`%`) || !input.includes(`&`) || !input.includes(`*`) || !input.includes(`?`)){
        console.log (`Please inculde a special character.`)
        validPass = false
    }
    if (validPass){
        console.log (`That is a valid password.`);
    }
    reader.close()
});
