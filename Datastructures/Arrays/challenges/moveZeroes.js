// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

function moveZeroes(nums) {
  let zeroes = [];
  let nonZeroes = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroes.push(nums[i]);
    } else {
      nonZeroes.push(nums[i]);
    }
  }

  return nonZeroes.concat(zeroes);
}

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0]));
