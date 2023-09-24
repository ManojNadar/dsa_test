// reverse array

let array = [1, 2, 3, 4, 5];

// function reverseArray(array) {
//   let newArr = array.reverse();
//   //   console.log(newArr);
//   return newArr;
// }

// console.log(reverseArray(array));

function reverseArray(array) {
  let newArr = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArr.push(array[i]);
  }
  return newArr;
}

console.log(reverseArray(array));
