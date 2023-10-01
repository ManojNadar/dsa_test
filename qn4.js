// isPalindrome

let str = "madam";
function palindrome(val) {
  //   console.log(val);
  //   console.log(typeof val);

  let newVal = val.split("").reverse().join("");
  //   console.log(newVal);
  //   console.log(anotherVal);

  if (newVal == str) {
    return true;
  }

  return false;
}

console.log(palindrome(str));
