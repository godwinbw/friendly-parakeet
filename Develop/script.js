// Assignment code here

// this variable holds all the user-specified parameters for the password
var passwordParameters = {
  passwordlength: 16,
  minPasswordLength: 8,
  maxPasswordLength: 128,
  includesLowercase: true,
  includesUppercase: true,
  includesNumeric: true,
  includesSpecial: true,
  lowercaseChars: "abcdefghijklmnopqrstuvwxyz",
  uppercaseChars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numericChars: "0123456789",
  specialChars: " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~",
  reset: function () {
    this.length = 16;
    this.includesLowercase = true;
    this.includeUppercase = true;
    this.includesNumeric = true;
    this.includesSpecial = true;
  },
  areCharChoicesValid: function () {
    // need at least one character type is included in order to return true
    return (
      this.includesLowercase ||
      this.includesUppercase ||
      this.includesNumeric ||
      this.includesSpecial
    );
  },
};

var getPasswordLength = function (minPasswordLength, maxPasswordLength) {
  // prompt the user for a password length, between the min and max password length
  // keep asking until a valid response is received

  console.log("getPasswordLength START...");
  var passwordLength = 8;

  console.log("...getPasswordLength END");
  return passwordLength;
};

var isLowercaseIncluded = function () {
  // prompt the user to specify if lowercase characters should be included in the password

  console.log("isLowercaseIncluded START...");
  var includeLowercase = true;

  console.log("...isLowercaseIncluded END");
  return includeLowercase;
};

var isUppercaseIncluded = function () {
  // prompt the user to specify if uppercase characters should be inculded in the password
  console.log("isUppercaseIncluded START...");
  var includeUppercase = true;

  console.log("...isUppercaseIncluded END");
  return includeUppercase;
};

var isNumericIncluded = function () {
  // prompt the user to specify if numeric characters should be inculded in the password
  console.log("isNumericIncluded START...");
  var includeNumeric = true;

  console.log("...isNumericIncluded END");
  return includeNumeric;
};

var isSpecialIncluded = function () {
  // prompt the user to specify if special characters should be inculded in the password
  console.log("isSpecialIncluded START...");
  var includeSpecial = true;

  console.log("...isSpecialIncluded END");
  return includeSpecial;
};

var generatePasswordFromUserInputs = function (userParameters) {
  // generate the password based on the prompts the user supplied
  console.log("generatePasswordFromUserInputs START...");

  var generatedPassword = "test";

  console.log("...generatePasswordFromUserInputs END");
  return generatedPassword;
};

var generatePassword = function () {
  console.log("generatePassword START...");

  // step 1 -> initialize our generatedPasswod
  var generatedPassword = "test";

  // step 2 -> reset our password parameters
  passwordParameters.reset();

  // step 3 -> user specifies password length
  passwordParameters.passwordLength = getPasswordLength(
    passwordParameters.minPasswordLength,
    passwordParameters.maxPasswordLength
  );

  // step 4 -> user specifies included character types, they must choose at least one
  do {
    passwordParameters.includesLowercase = isLowercaseIncluded();
    passwordParameters.includesUppercase = isUppercaseIncluded();
    passwordParameters.includesNumeric = isNumericIncluded();
    passwordParameters.includesSpecial = isSpecialIncluded();
  } while (!passwordParameters.areCharChoicesValid());

  // step 5 -> generate the password
  console.log("...generatePassword END");
  return generatePasswordFromUserInputs(passwordParameters);
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
