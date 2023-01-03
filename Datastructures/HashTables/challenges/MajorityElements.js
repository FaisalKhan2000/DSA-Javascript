// function countNums(arr, element) {
//   return arr.filter((e) => e === element).length;
// }

// function majorityElement(nums) {
//   let count = 0;
//   let element = null;

//   for (let i = 0; i < nums.length; i++) {
//     const currentCount = countNums(nums, nums[i]);
//     if (currentCount > count) {
//       count = currentCount;
//       element = nums[i];
//     }
//   }

//   return element;
// }

// console.log(majorityElement([1, 2, 2, 3, 2])); // returns 2

//* Using Maps
function majorityElement(nums) {
  // Create a map to count the frequency of each element in the array
  const map = new Map();

  // Iterate through the elements of the array
  for (let i = 0; i < nums.length; i++) {
    // Get the current element
    const num = nums[i];

    // Check if the element is in the map
    if (map.has(num)) {
      // If the element is in the map, increment its frequency
      map.set(num, map.get(num) + 1);
    } else {
      // If the element is not in the map, add it with a frequency of 1
      map.set(num, 1);
    }
  }

  // Initialize variables to keep track of the element with the highest frequency and its frequency
  let count = 0;
  let element = null;

  // Iterate through the elements of the array again
  for (let i = 0; i < nums.length; i++) {
    // Get the current element
    const num = nums[i];
    // Get the frequency of the element in the map
    const frequency = map.get(num);
    // If the frequency of the element is greater than the current maximum frequency, update the count and element variables
    if (frequency > count) {
      count = frequency;
      element = num;
    }
  }

  // Return the element with the highest frequency
  return element;
}

console.log(majorityElement([1, 2, 2, 3, 2])); // returns 2
