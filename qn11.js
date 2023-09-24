// missing numbers

let num = [2, 4, 1, 3, 6, 7, 8];

function missingNumber(num) {
  for (let i = 1; i < num.length; i++) {
    if (!num.includes(i)) {
      return i;
    }
  }

  return num;
}

console.log(missingNumber(num));
