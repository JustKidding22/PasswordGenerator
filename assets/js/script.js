// Password Requirements
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const specialCharacter = "!@#$%^&*-_=+;:/?";
const number = "1234567890";

const genBtn = document.querySelector("#generate");

// User chooses requirements for password
let anyCharacters;
let anyNumber;
let anySpecial;
let passwordLength;

// Password Requirements, At least One Must Be Chosen




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
