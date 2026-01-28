#!/usr/bin/node

const occurances = parseInt(process.argv[2]);

if (occurances) {
  for (let i = 1; i <= occurances; i++) {
    console.log('C is fun');
  }
} else {
  console.log('Missing number of occurrences');
}
