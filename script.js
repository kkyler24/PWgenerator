// Assignment Code
var generateBtn = document.querySelector("#generate");
var charLower = "abcdefghijklmnopqrstuvwzxy";
var charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789";
var sym = "!@#$%^&*=_";

var charNum = document.getElementById("charNum");
var numBox = document.getElementById("numBox");
var symbox = document.getElementById("symbox");
var submit = document.getElementById("submit");
var yourPw =  document.getElementById("yourPW");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
