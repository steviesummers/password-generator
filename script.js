// Assignment Code
var characterLegnth = 8;
var choiceArr = [];


var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 'u', 'v', 'w', 'x', 'y', 'z']
var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '?']
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Write password to the #password input
function writePassword() {

  var correctPrompts = getPrompts();

  if(correctPrompts) {


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  var password = "";
  for(var i = 0; i < characterLegnth; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex]
  }
  return password;
    
    
  }

}

function getPrompts(){

  characterLegnth = [];
  
  characterLegnth = parseInt(prompt("How many character do you want your password to be? (8 - 128"));
  
  if(isNaN(characterLegnth) || characterLegnth < 8 || characterLegnth > 128) {
    alert("Character Legnth has to be a number, 8 - 128 digits. Please try again");
    return false;
  }

  if (confirm("Would you like lowercase letters in your password?")){
    choiceArr = choiceArr.concat(lowerCase);

    if (confirm("Would you like uppercase letters in your password?")) {
choiceArr = choiceArr.concat(upperCase);
    }

    if (confirm("Would you like special characters in your password?")) {
      choiceArr = choiceArr.concat(specialChar);
    }
    if (confirm("Would you like numbers in your password?")) {
      choiceArr = choiceArr.concat(number);
    }
    return true;
  }
}

