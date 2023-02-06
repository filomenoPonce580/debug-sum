/*
First attempt

function getSumOfDigits(integer) {
  let sum = 0;
  let digits =  integer.toString().split('');
  for(let i = 0; i < digits.length; i++) {
    sum += Number(digits[i]);
  }
  return sum;
}
*/

//Better, cleaner. turn the integer into an array and then convert to numbers, and reduce
const getSumOfDigits = integer => integer.toString().split('').map(Number).reduce((a, b) => a + b)
