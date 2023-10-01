// Palindrome

let x = 121;
output = true;
function palindrome(x) {
  //   let val = x.toString();
  //   console.log(val);
  //   console.log(typeof val);

  let newVal = val.split("").reverse().join("");
  //   console.log(newVal);
  //   console.log(anotherVal);

  if (newVal == val) {
    return true;
  }

  return false;
}

console.log(palindrome(x));
