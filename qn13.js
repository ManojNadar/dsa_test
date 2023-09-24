let nums = [5, 7, 7, 8, 8, 10];

target = 8;
output = [3, 4];

function arrayindex(nums) {
  let indexArray = [];

  let flag = false;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      flag = true;
      indexArray.push(i);
    }
  }

  if (!flag) {
    indexArray.push(-1);
  }
  return indexArray;
}

console.log(arrayindex(nums));
