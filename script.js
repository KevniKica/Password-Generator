//Password Generator : Randomly generates a password from 8-100 characters!
// Assignment code here
document.querySelector("#generate").addEventListener("click", writePassword);

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//Variables
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

// Asks how many characters you'd want in this password
function generatePassword() {
  var confirmLength = (prompt("What number of characters would you like in the password?"));

  // Loop if length is not between 8 and 100 characters 
  while(confirmLength <= 7 || confirmLength >= 101) {
    alert("Password must be between 8-100 characters, Please Try again");
    var confirmLength = (prompt("How many characters would you like in the password?"));
    } 

    // Shows how long your password will be 
    alert(`Your password will have ${confirmLength} characters`);

        // Confirm characters used 
        var confirmSpecialCharacter = confirm("If you want special characters, click OK");
        var confirmNumericCharacter = confirm("If you want numeric characters, click OK");    
        var confirmLowerCase = confirm("If you want lowercase characters, click OK");
        var confirmUpperCase = confirm("If you want uppercase characters, click OK");
          // Loop if none are chosen
          while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
            alert("Choose at least one parameter");
            var confirmSpecialCharacter = confirm("If you want special characters, click OK");
            var confirmNumericCharacter = confirm("If you want numeric characters, click OK");    
            var confirmLowerCase = confirm("If you want lowercase characters, click OK");
            var confirmUpperCase = confirm("If you want uppercase characters, click OK");   
        } 
    
          var passwordCharacters = []
          
        if (confirmSpecialCharacter) {
          passwordCharacters = passwordCharacters.concat(specialCharacters)
        }
    
        if (confirmNumericCharacter) {
          passwordCharacters = passwordCharacters.concat(number)
        }
          
        if (confirmLowerCase) {
          passwordCharacters = passwordCharacters.concat(lowerCase)
        }
    
        if (confirmUpperCase) {
          passwordCharacters = passwordCharacters.concat(upperCase)
        }
    
          console.log(passwordCharacters)

                // Characters randomly selected based on parameters chosen are put together here
      var randomPassword = ""
      
      for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
