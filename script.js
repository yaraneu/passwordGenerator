// Assignment Code
var length = prompt("What length do you want the password to be? at least 8 to 128 characters");
var lowerCase = confirm("Do you want lowercase?");
var upperCase = confirm("Do you want uppercase?");
var number = confirm(" Do you want numbers?");
var special = confirm("Do you want special characters?");
var finalize = alert("Now click Generate Password");
var charnum = parseInt(length);
var criterias = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwyz0123456789!@#$%^&*()-=_+[]\{}|;':,./?><";
var generateBtn = document.querySelector("#generate");


// Code for generating random password
function generatePassword(){
    passArray ="";
    for (var i = 0; i < charnum; i++) {
        passArray = passArray + criterias.charAt(Math.floor(Math.random() * criterias.length));
    
}
return passArray;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

  
                
                
