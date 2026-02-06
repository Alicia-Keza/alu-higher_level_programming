#!/usr/bin/node

const fs = require('fs');

const filePath = process.argv[2];

fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    process.stdout.write(err);
  } else {
    process.stdout.write(data);
  }
});
