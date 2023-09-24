// !factorial

let num = 5;

// 5*4*2*1

function factorial(num) {
  if (num < 0) {
    return -1;
  }
  if (num == 0) {
    return 1;
  } else {
    // console.log(num);
    return num * factorial(num - 1);
  }
}

console.log(factorial(num));
