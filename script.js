// Create an array of special characters and store to a variable

var special = ["(", ")", "*", "!", "@", "#", "$", "%", "^", "&", "*", "+", "-", "=", "/", ":", ";", ">", "?", "`", "~", "}", "|", "{", "_", "]", "[", "\"", "<", "."];

// Create an array of numeric charecters and store it to a variable

var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Create an array of uppercase characters and store it to a variable

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Ccreate an array of lowercase characters and store it to a variable

var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var comboPassword = [];

// ==========================================
// Function to get options from user input

// function getUserInput() {


//   return userOptions;
// }

function generatePassword() {

  var passLength = window.prompt("Please enter a password length");
  passLength = parseInt(passLength)
  if (passLength < 8) {
    alert("password need to be equal or greater than 8 characters");
    return;
  }
  var specialChar = window.confirm("Do you want special characters in your password");
  var numChar = window.confirm("Do you want Numeric characters in your password");
  var lowerCaseChar = window.confirm("Do you want Lowercase characters in your password");
  var upperCaseChar = window.confirm("Do you want Uppercase characters in your password");
  var finalPassword = "";
  
  if (specialChar) {
    comboPassword = comboPassword.concat(special);

  }
  if (numChar) {
    comboPassword = comboPassword.concat(num);
  }
  if (lowerCaseChar) {
    comboPassword = comboPassword.concat(lowerCase);

  }
  if (upperCaseChar) {
    comboPassword = comboPassword.concat(upperCase);
  }

  console.log(comboPassword);


  for (var i = 0; i < passLength; i++) {
    finalPassword += comboPassword[Math.floor(Math.random() * comboPassword.length)];
    console.log(finalPassword)
  }

  return finalPassword;
}

// Call user option function and store the return object to a variable



// Create a varialbe to be assigned with an empty array initially, to be populated by concatenating
// all posiible character sets chosen by user


// Create a variable to be assigned with an empty array initially, to be populated with one character
// from all character sets chosen by user.
// It is to guarrantee that at least one character from the chosen character set will be included in password

// Create a variable to be assigned with an empty array initially, to be populated with password

// Create a conditional statement: 1) to add array of special characters into array of possible characters based on user input
// 2) to push a random special character to the array of guaranteed characters

// Create a conditional statement: 1) to add array of numeric characters into array of possible characters based on user input
// 2) to push a random numeric character to the array of guaranteed characters

// Create a conditional statement: 1) to add array of uppercase characters into array of possible characters based on user input
// 2) to push a random uppercase character to the array of guaranteed characters

// Create a conditional statement: 1) to add array of lowercase characters into array of possible characters based on user input
// 2) to push a random lowercase character to the array of guaranteed characters

// For loop to iterate over the password length from the retuned object of options based on user input,
// selecting random indices from the array of possible characters and adding those characters into the password array variable

// For loop to iterate over the length of the guaranteed array, replacing the first few characters in the password array with the characters in the guarantee array

// Convert the password array into password string

// Return the converted password string to the caller

// Create an object to store all the values of user input

// return the object to the caller

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
