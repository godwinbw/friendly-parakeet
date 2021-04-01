// Assignment code here

// this variable holds all the user-specified parameters for the password
// includes functions to reset to defaults, and to validate character type input choices

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
  getValidCharacters: function () {
    // this will return a single string of all valid characters, based on current settings
    var allValidChars = "";
    if (this.includesLowercase) {
      allValidChars = allValidChars + this.lowercaseChars;
    }
    if (this.includesUppercase) {
      allValidChars = allValidChars + this.uppercaseChars;
    }
    if (this.includesNumeric) {
      allValidChars = allValidChars + this.numericChars;
    }
    if (this.includesSpecial) {
      allValidChars = allValidChars + this.specialChars;
    }
    return allValidChars;
  },
};

var getPasswordLength = function (minPasswordLength, maxPasswordLength) {
  // prompt the user for a password length, between the min and max password length
  // keep asking until a valid response is received

  console.log("getPasswordLength START...");

  // initialize our variables
  var passwordLength;
  var passwordLengthParsed;
  var validPasswordLength;

  do {
    // prompt user to enter a password length between minPasswordLength and maxPasswordLength
    passwordLength = prompt(
      "Specify the length of your desired password, between " +
        minPasswordLength +
        " and " +
        maxPasswordLength +
        " characters"
    );

    validPasswordLength = true; // assume the user specified a valid password length
    passwordLengthParsed = parseInt(passwordLength); // convert the user input to a number

    if (isNaN(passwordLengthParsed)) {
      // the input the user supplied was not a number
      console.log(
        "   ERROR : user specified password length is not a number -> " +
          passwordLength
      );
      alert(
        "The password length you specified (" +
          passwordLength +
          ") is not a number.  Please try again"
      );
      validPasswordLength = false;
    } else if (passwordLengthParsed < minPasswordLength) {
      // password is too short
      console.log(
        "   ERROR : user specified password length is too short -> " +
          passwordLengthParsed
      );
      alert(
        "The password length you specified (" +
          passwordLengthParsed +
          " characters) is too short.  Please try again"
      );
      validPasswordLength = false;
    } else if (passwordLengthParsed > maxPasswordLength) {
      // password is too long
      console.log(
        "   ERROR : user specified password length is too long -> " +
          passwordLengthParsed
      );
      alert(
        "The password length you specifid (" +
          passwordLengthParsed +
          " characters) is too long. Please try again"
      );
      validPasswordLength = false;
    }
  } while (!validPasswordLength);

  // return the validate, user specified password length

  console.log("     password length -> " + passwordLengthParsed);
  console.log("...getPasswordLength END");

  return passwordLengthParsed;
};

var isLowercaseIncluded = function () {
  // prompt the user to specify if lowercase characters should be included in the password
  console.log("isLowercaseIncluded START...");
  var includeLowercase = window.confirm(
    "Do you want to include LOWERCASE characters in your password? Select OK for YES, or Cancel for NO"
  );
  console.log("    includeLowercase -> " + includeLowercase);

  console.log("...isLowercaseIncluded END");
  return includeLowercase;
};

var isUppercaseIncluded = function () {
  // prompt the user to specify if uppercase characters should be inculded in the password
  console.log("isUppercaseIncluded START...");
  var includeUppercase = window.confirm(
    "Do you want to include UPPERCASE characters in your password? Select OK for YES, or Cancel for NO"
  );
  console.log("    includeUppercase -> " + includeUppercase);

  console.log("...isUppercaseIncluded END");
  return includeUppercase;
};

var isNumericIncluded = function () {
  // prompt the user to specify if numeric characters should be inculded in the password
  console.log("isNumericIncluded START...");
  var includeNumeric = window.confirm(
    "Do you want to include NUMERIC characters in your password? Select OK for YES, or Cancel for NO"
  );
  console.log("    includeNumeric -> " + includeNumeric);

  console.log("...isNumericIncluded END");
  return includeNumeric;
};

var isSpecialIncluded = function () {
  // prompt the user to specify if special characters should be inculded in the password
  console.log("isSpecialIncluded START...");
  var includeSpecial = window.confirm(
    "Do you want to include SPECIAL characters in your password? Select OK for YES, or Cancel for NO"
  );
  console.log("    includeSpecial -> " + includeSpecial);

  console.log("...isSpecialIncluded END");
  return includeSpecial;
};

var generatePasswordFromUserInputs = function (userParameters) {
  // generate the password based on the prompts the user supplied
  console.log("generatePasswordFromUserInputs START...");

  var generatedPassword = "";
  var validCharacters = userParameters.getValidCharacters();

  // loop for each character we need to create in the password
  for (var i = 0; i < userParameters.passwordLength; i++) {
    // for each character, we need to pick a random character from all the valid characters based on user settings
    // we will generate a random number between 0 and the length of the validCharacters string, and our character
    // will be whatever character is in the position

    // we will add that to our generated password
    generatedPassword =
      generatedPassword +
      validCharacters[Math.floor(Math.random() * validCharacters.length)];
  }

  console.log("   generated password -> " + generatedPassword);
  console.log("...generatePasswordFromUserInputs END");
  return generatedPassword;
};

var generatePassword = function () {
  console.log("generatePassword START...");

  // step 1 -> reset our password parameters
  passwordParameters.reset();

  // step 2 -> user specifies password length
  passwordParameters.passwordLength = getPasswordLength(
    passwordParameters.minPasswordLength,
    passwordParameters.maxPasswordLength
  );

  // step 3 -> user specifies included character types, they must choose at least one
  do {
    passwordParameters.includesLowercase = isLowercaseIncluded();
    passwordParameters.includesUppercase = isUppercaseIncluded();
    passwordParameters.includesNumeric = isNumericIncluded();
    passwordParameters.includesSpecial = isSpecialIncluded();
  } while (!passwordParameters.areCharChoicesValid());

  // step 4 -> generate the password
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
