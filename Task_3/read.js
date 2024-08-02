const fs = require('fs');
const buf = Buffer.alloc(1024);

fs.open('hello.txt', 'r+', (err, fd) => {
  if (err) return console.error(err);

  console.log('Reading the file');
  fs.read(fd, buf, 0, buf.length, 0, (err, bytes) => {
    if (err) return console.error(err);

    if (bytes > 0) {
      console.log(buf.slice(0, bytes).toString());
    }
  });
});
