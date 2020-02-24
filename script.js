// Assignment Code
var numBox = document.getElementById("num");
var symbox = document.getElementById("sym");
var upperBox = document.getElementById("upperCase");
var charbox = document.getElementById ("chars");
var pwLength = prompt("input a number length here");
var generateBtn = document.querySelector("generate");
var pwArray = [ numBox, upperBox, symbox, charbox]



// chararcter lenght request///

var pwLength = prompt("input a number length here");

	function checkNum() {
		if (pwLength >= 8 || pwLength < 128){radioButtonCheck();
		} else {
			alert("You need to put in a password greater than 8 and less than 128!");

		}
	}
	checkNum();

// check if the number symbol and uppercase are checked. //
function radioButtonCheck(){
	if (numBox.checked === false || symbox.checked === false || upperBox.checked === false || charbox.checked === false){
		alert("Please select your criteria");
	}
	var pwLength = prompt("Input character lenght")
	}

  
  
  function generate(length = PWlength) {
    var chars = letterSet.length;
    var charUpper = letterSet.length.charUpper;
    var num = numberSet.length;
    var sym = symbolSet.length;
    var all = uppercase + lowercase + numbers + symbols;
    var password = '';
    for (var index = 0; index < length; index++) {
        var character = Math.floor(Math.random() * all.length);
        password += all.substring(character, character + 1);
    }
    return password;
}
generateBtn.addEventListener("click",function(event){}
  //    console.log("test")
  



// // generated random buttom //
//   
  //  check to see at least 1 radio button is checked, if not alert that 1 needs to be checked. 
  // else, 
  // then prompt lenght PW. 
  // put selected criteria 2gether get list of characters based on selected criteria.
  // combine char set based on criteria selected.
  // randomly select that many char from combined char set
  
	
  
/* // Write password to the #password input
  
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button.
