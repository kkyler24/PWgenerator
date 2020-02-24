// Assignment Code
var numBox = document.getElementById("num");
var symbox = document.getElementById("symbol");
var upperBox = document.getElementById("upperCase");
var pwLength = prompt("input a number length here");
var generateBtn = document.querySelector("#generate");


// chararcter lenght request///

var pwLength = prompt("")

function checkNum() {
  if (pwLength >= 8 || pwLength < 128){radioButtonCheck();
  } else {
    alert("You need to put in a password greater than 8 and less than 128!");

  }
}
checkNum();

// check if the number symbol and uppercase are checked. //
var num = document.getElementById("")
function radioButtonCheck(){
	if (numBox.checked === false || symbox.checked === false || upperBox.checked === false){
		alert("Please check next three boxes");
	}
	else if (numBox.checked === true || symbox.checked === true || upperBox.checked === true){
		alert("click generate button")
	}
}

  
  // function writePassword(l, characters)//
 
  function randomPassword(length) {
    	console.log("Hello")
       
        for (var x = 0; x < PWlength; x++) {
            var i = Math.floor(Math.random() * chars.length);
            pass += chars.charAt(i);
        }
        return pass;
      
    }
    
// generated random buttom //
  generateBtn.addEventListener("click",function(event){
   console.log("test")
  //  check to see at least 1 radio button is checked, if not alert that 1 needs to be checked. 
  // else, 
  // then prompt lenght PW. 
  // put selected criteria 2gether get list of characters based on selected criteria.
  // combine char set based on criteria selected.
  // randomly select that many char from combined char set
  
    // var characters = char;
	  // var chars = letterSet.length;
		// var charUpper = letterSet.length.charUpper;
		// var num = numberSet.length;
    // var sym = symbolSet.length;
  })
  
/* // Write password to the #password input
  
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
// 
