// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

function rotate(nums, k) {
  // Wrap k around to a valid index
  k = k % nums.length;

  let firstArray = [];
  let secondArray = [];

  for (let i = nums.length - 1; i > k; i--) {
    firstArray.push(nums[i]);
  }

  for (let j = 0; j < nums.length - k; j++) {
    secondArray.push(nums[j]);
  }

  let revesedFirstArray = firstArray.reverse();

  return [...revesedFirstArray, ...secondArray];
  //   return secondArray;
}

// function rotate(nums, k) {
//   k = k % nums.length;
//   for (let i = 0; i < k; i++) {
//     nums.unshift(nums.pop());
//   }

//   return nums;
// }

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
