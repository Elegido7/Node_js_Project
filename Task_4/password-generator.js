const generatePassword = require('generate-password');

// Create a function that generates a random password
function generateRandomPassword() {
  // Generate a random password with specified options
  const password = generatePassword.generateMultiple(4, {
    length: 10, // Length of the password
    numbers: true, // Include numbers
    symbols: true, // Include symbols
    uppercase: true, // Include uppercase letters
    lowercase: true, // Include lowercase letters
  });

  // Return the generated password
  return password;
}

// Call the function to generate a random password and log it
const password = generateRandomPassword();
console.log('Generated Password:', password);
