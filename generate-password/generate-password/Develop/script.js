// Assignment code here
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var numbers = "0123456789";
var symbols = "!@#$%^&*_-+=";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  var passwordOptions = [];
  var finalPassword = [];

  var length = prompt('How long do you want the password to be?')

  if (length < 8 || length > 128) {
    alert('Password must be changed!');
    return null;
  } 
  var wantUpperCase = confirm('Do you want uppercase letters?');
  var wantLowerCase = confirm('Do you want lowercase letters?');
  var wantSymbols = confirm('Do you want symbols?');
  var wantNumbers = confirm('Do you want numbers?');

  if (wantLowerCase) {
    passwordOptions = passwordOptions.concat(lowerCase.split(''))
  }
  if (wantUpperCase) {
    passwordOptions = passwordOptions.concat(upperCase.split(''))
  }
  if (wantSymbols) {
    passwordOptions = passwordOptions.concat(symbols.split(''))
  }
  if (wantNumbers) {
    passwordOptions = passwordOptions.concat(numbers.split(''))
  }

  console.log(passwordOptions)

  

  for (var i = 0; i < length; i++) {
    finalPassword.push(passwordOptions[Math.floor(Math.random() * passwordOptions.length)])}
    console.log(finalPassword)

    return finalPassword.join('');
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// for (var i = 0; i < maxLengthPass; i++) {
//   password = password + collectionOfChar.charAt(Math.floor(Math.random() * size))
// }
