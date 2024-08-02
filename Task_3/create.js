const fs = require('fs');

console.log('Lets create the file');
fs.writeFile('welcome.txt', 'Hello Node', function (err) {
  if (err) {
    return console.error(err);
  }

  console.log('File created successfully!');
});
