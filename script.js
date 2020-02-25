// Assignment Code
var numBox = document.getElementById("num");
var symbox = document.getElementById("sym");
var upperBox = document.getElementById("upperCase");
var charbox = document.getElementById ("chars");
var generateBtn = document.querySelector("#generate");
var passwordDisplay = document.getElementById("password")



// chararcter lenght request///
	function checkNum() {
		if (pwLength >= 8 || pwLength < 128){radioButtonCheck();
		} else {
			alert("You need to put in a password greater than 8 and less than 128!");

		}
	}


// check if the number symbol and uppercase are checked. //
function radioButtonCheck(){
	var pwLength = prompt("Input character lenght")
	}

  
var chars = "abcdefghijklmnopqrstuvwzxy";
var charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789";
var sym = "!@#$%^&*=_";
var pwArray = [ num, charUpper, sym, chars]
console.log(pwArray);


generateBtn.addEventListener("click",function(event){

  if (numBox.checked === false && symbox.checked === false && upperBox.checked === false && charbox.checked === false){
		alert("Please select your criteria");
	}
  else {
    var pwLength = prompt("input a number length here");

    var possiblePasswordCharacters = '';
    if (numBox.checked === true ){
      possiblePasswordCharacters = possiblePasswordCharacters + num; 
    }
    
    if (symbox.checked === true ){
      possiblePasswordCharacters = possiblePasswordCharacters + sym; 
    }
    
    if (upperBox.checked === true ){
      possiblePasswordCharacters = possiblePasswordCharacters + charUpper; 
    }
    if (charbox.checked === true ){
      possiblePasswordCharacters = possiblePasswordCharacters + chars; 
    }

    console.log(possiblePasswordCharacters);

    var password = '';
    for (var index = 0; index < pwLength; index++) {
        var character = possiblePasswordCharacters[Math.floor(Math.random() * possiblePasswordCharacters.length)];
        password = password + character;
    }
    passwordDisplay.value = password;
  } 
});
	
  
