#!/usr/bin/node

const squareSize = parseInt(process.argv[2]);

if (squareSize) {
  for (let i = 1; i <= squareSize; i++) {
    console.log('X'.repeat(squareSize));
  }
} else if (squareSize < 0) {
  console.log('Missing size');
} else {
  console.log('Missing size');
}
