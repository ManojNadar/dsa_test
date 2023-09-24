let nums = [3, 2, 2, 3];
let val = 3;

function intArr(nums, val) {
  let finalArray = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      nums.push("_");
    } else {
      finalArray.push(nums[i]);
    }
  }
  return finalArray;
}

console.log(intArr(nums, val));

// function intArr(nums, val) {
//   let finalArray = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] == val) {
//       nums.splice(i, 1);
//       nums.push("_");
//       finalArray.push(nums[i]);
//     }
//   }
//   return finalArray;
// }

console.log(intArr(nums, val));
