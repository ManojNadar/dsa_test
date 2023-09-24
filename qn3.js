// sum of array

let nums = [1, 2, 3, 4, 5];

function sum(nums) {
  let add = 0;
  for (let i = 0; i < nums.length; i++) {
    add += nums[i];
    // console.log(add);
  }

  return add;
}

console.log(sum(nums));
