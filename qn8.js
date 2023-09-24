// isPrime

let n = 4;

function isPrime(n) {
  if (n % 1 === 0) {
    return true;
  }

  if (n % n === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isPrime(n));
