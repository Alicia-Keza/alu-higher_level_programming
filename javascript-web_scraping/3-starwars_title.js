#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request.get(url, (error, response, body) => {
  if (error) {
    process.stdout.write(error);
  } else {
    const data = JSON.parse(body);
    process.stdout.write(data.title);
  }
});
