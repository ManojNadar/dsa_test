// !factorial

let num = 5;

// 5*4*2*1

// function factorial(num) {
//   if (num < 0) {
//     return -1;
//   }
//   if (num == 0) {
//     return 1;
//   } else {
//     // console.log(num);
//     return num * factorial(num - 1);
//   }
// }

function factorial(num) {
  let sum = 1;

  if (num == 0 || num == 1) {
    return sum;
  } else if (num > 1) {
    for (let i = num; i >= 1; i--) {
      sum = sum * i;
    }
    return sum;
  } else {
    return "not a valid number";
  }
}

console.log(factorial(num));
