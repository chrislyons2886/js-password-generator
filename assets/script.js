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
  if(password!==undefined){

    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }
}
function generatePassword(){
  var password = [];
  var bigArray = [];

  var wantsLowercase = confirm('Do you want lowercase characters?');
  console.log(wantsLowercase);
  if (wantsLowercase){
    bigArray=bigArray.concat(lower)
  }
  var wantsUppercase = confirm ('Do you want uppercase characters?');
  console.log (wantsUppercase);
  if (wantsUppercase){
    bigArray=bigArray.concat(upper)
  }
  var wantsNumbers = confirm ('Do you want numbers?');
  console.log (wantsNumbers);
  if (wantsNumbers){
    bigArray=bigArray.concat(numbers)
  }
  var wantsSpecial = confirm ('Do you want special characters?');
  console.log (wantsSpecial);
  if (wantsSpecial){
    bigArray=bigArray.concat(special)
  }
  // alternative approach
  if (bigArray.length===0){
    alert("Please select at least one character type!");
    return;
  }



  // if (wantsLowercase === false && wantsUppercase === false && wantsNumbers === false && wantsSpecial === false){
  //   alert("Please select at least one character type!");
  //   return;
  // }
  var passwordLength = window.prompt('How long would you like your password to be (8-128 characters)?')
  console.log (passwordLength);
if (passwordLength<8||passwordLength>128){
  alert("Please select a value between 8 and 128!");
  return;
}
if (isNaN(passwordLength)){
  alert ("Must be a number!")
  return;
}


  for (let i = 0; i < passwordLength; i++) {
    let j = Math.floor(Math.random()*bigArray.length);
    let passDigit=bigArray[j];
    password.push(passDigit);
  }
  return password.join("")
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




