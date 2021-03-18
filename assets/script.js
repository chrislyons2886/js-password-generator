//GIVEN I need a new, secure password
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN prompted for character types to include in the password
//THEN I choose lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page


// Assignment Code
var generateBtn = document.querySelector("#generate");
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+"]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  if (password !== undefined) {

    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }
}
function generatePassword() {

  var bigArray = [];
  var  password = []

  var wantsLowercase = confirm('Do you want lowercase characters?');
  console.log(wantsLowercase);
  if (wantsLowercase) {
    bigArray = bigArray.concat(lower);
    var randomLowerchar = lower[Math.floor(Math.random()*lower.length)];
    password.push (randomLowerchar)
  }
  var wantsUppercase = confirm('Do you want uppercase characters?');
  console.log(wantsUppercase);
  if (wantsUppercase) {
    bigArray = bigArray.concat(upper)
    var randomUpperchar = upper[Math.floor(Math.random()*upper.length)];
    password.push (randomUpperchar)
  }
  var wantsNumbers = confirm('Do you want numbers?');
  console.log(wantsNumbers);
  if (wantsNumbers) {
    bigArray = bigArray.concat(numbers)
    var randomNumberchar = numbers[Math.floor(Math.random()*numbers.length)];
    password.push (randomNumberchar)
  }
  var wantsSpecial = confirm('Do you want special characters?');
  console.log(wantsSpecial);
  if (wantsSpecial) {
    bigArray = bigArray.concat(special)
    var randomSpecialchar = special[Math.floor(Math.random()*special.length)];
    password.push (randomSpecialchar)
  }

  if (bigArray.length === 0) {
    alert("Please select at least one character type!");
    return;
  }

  // alternative approach
  // if (wantsLowercase === false && wantsUppercase === false && wantsNumbers === false && wantsSpecial === false){
  //   alert("Please select at least one character type!");
  //   return;
  // }

  var passwordLength = window.prompt('How long would you like your password to be (8-128 characters)?')
  console.log(passwordLength);
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please select a value between 8 and 128!");
    return;
  }
  if (isNaN(passwordLength)) {
    alert("Must be a number!")
    return;
  }
console.log (passwordLength)
passwordLength = passwordLength - password.length;
console.log (passwordLength)
 
  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * bigArray.length);
    let randomCharacter = bigArray[randomIndex];
    password.push(randomCharacter);
  }
  return password.join("")
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




