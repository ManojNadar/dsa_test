// sorting in ascending order

let nums = [2, 4, 1, 3, 6, 5];

function sortNumbers(nums) {
  let sortArr = nums.sort((a, b) => {
    return a - b;
  });

  return sortArr;
}

console.log(sortNumbers(nums));
