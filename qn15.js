// remove dupkicate character

let x = "hello";

function duplicate(x) {
  return [...new Set(x)].join("");
}

console.log(duplicate(x));
