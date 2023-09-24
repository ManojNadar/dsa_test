// Remove Duplicates

let array = [1, 2, 2, 3, 4, 4, 5, 6, 6, 6];

function removeDuplicates(array) {
  for (let i = 0; i < array.length; ) {
    if (array[i] === array[i + 1]) {
      array.splice(i, 1);
      //   console.log(array);
    } else {
      i++;
    }
  }

  return array;
}

console.log(removeDuplicates(array));
