// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
// Length of password
function getPasswordOptions() {
  var passwordLength = parseInt(prompt('Enter password length (8-128 characters):'));
// At least 8 characters but not more than 128
  if (passwordLength < 8 || passwordLength > 128) {
    alert('Password length must be between 8 and 128 characters.');
    return;
  }
  // Characters types
var includeLowercase = confirm('Include lowercase characters?');
var includeUppercase = confirm('Include uppercase characters?');
var includeNumeric = confirm('Include numeric characters?');
var includeSpecial = confirm('Include special characters?');

if (!(includeLowercase || includeUppercase || includeNumeric || includeSpecial)) {
  alert('At least one character type should be selected.');
  return;
}

var passwordOptions = {
  length: passwordLength,
  includeLowercase: includeLowercase,
  includeUppercase: includeUppercase,
  includeNumeric: includeNumeric,
  includeSpecial: includeSpecial,
};

return passwordOptions;
}







// Function for getting a random element from an array
function getRandom(arr) {
  var randomElement = Math.floor(Math.random() * arr.length);
  return arr[randomElement];

}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();

  if (!options) {
    return 'Password is required'; 
  }

  var requiredCharacters = [];
  if (options.includeLowercase) {
    requiredCharacters = requiredCharacters.concat(lowerCasedCharacters);
  }
  if (options.includeUppercase) {
    requiredCharacters = requiredCharacters.concat(upperCasedCharacters);
  }
  if (options.includeNumeric) {
    requiredCharacters = requiredCharacters.concat(numericCharacters);
  }
  if (options.includeSpecial) {
    requiredCharacters = requiredCharacters.concat(specialCharacters);
  }

  var generatedPassword = '';
  for (var i = 0; i < options.length; i++) {
    var randomChar = getRandom(requiredCharacters);
    generatedPassword += randomChar;
  }

  return generatedPassword;

}

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