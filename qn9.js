// calculate factorial using While Loop
let num = 5;

function factorial(num) {
  if (num < 0) {
    return -1;
  }

  if (num == 1 || num == 0) {
    return 1;
  }
  let sum = 1;
  let i = num;

  while (i >= 1) {
    sum = sum * i;
    i--;
  }
  return sum;
}
console.log(factorial(num));
