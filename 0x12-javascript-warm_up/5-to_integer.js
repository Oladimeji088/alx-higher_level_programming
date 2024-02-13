#!/usr/bin/node
const argument = process.argv[2]

// Check if the argument can be converted to an integer
const intValue = +argument

// Check if the conversion resulted in a valid number
if (!isNaN(intValue) && Number.isInteger(intValue)) {
  console.log(`My number: ${intValue}`);
} else {
  console.log('Not a number');
}
