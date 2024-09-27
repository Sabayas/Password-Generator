//Random Password Generator

function generatePassword(length, includeLowercase, includeUppercase, includeSymbols, includeNumbers){

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbercaseChars ="1234567890";
    const symbolcaseChars ="!@#$%^&*()_+";


    let allowedPassword = "";
    let password = "";

    allowedPassword += includeLowercase ? lowercaseChars : "";
    allowedPassword += includeUppercase ? uppercaseChars : "";
    allowedPassword += includeNumbers ? numbercaseChars : " ";
    allowedPassword += includeSymbols ? symbolcaseChars : "";

    if(length <= 0 ){
        return `(password length must be at least 1)`
    }

    if(allowedPassword.length === 0){
        return `?(At least 1 set of character needs to be selected);`
    }

    for(let i = 0; i< length; i++){
        const randomIndex = Math.floor(Math.random()* allowedPassword.length);
        password +=allowedPassword[randomIndex];
    }



  

return password ;
}


const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;


const password= generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
console.log(`Generated password: ${password}`)