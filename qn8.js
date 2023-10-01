// isPrime

let n = 11;

function isPrime(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i < n; i++) {
    if (n % i !== 0) {
      return true;
    }
  }
  return false;
}

console.log(isPrime(n));
