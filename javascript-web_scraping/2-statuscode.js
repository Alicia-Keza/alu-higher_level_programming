#!/usr/bin/node

const request = require('request');

const url = process.argv[2];

request.get(url, (error, response) => {
  if (error) {
    process.stdout.write(error);
  } else {
    process.stdout.write(`code: ${response.statusCode}`);
  }
});
