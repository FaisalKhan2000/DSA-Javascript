// Input: a[] = {1, 3, 2, 3, 4}
// Output: 3
// Explanation: The number 3 is the only repeating element.

// Input: a[] = {1, 5, 1, 2, 3, 4}
// Output: 1

// function findRepeating(array) {
//   if (array.length < 2) {
//     return "array length is 1";
//   }
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] === array[j]) {
//         return array[i];
//       }
//     }
//   }
//   return "not found";
// }

function findRepeating(array) {
  // Create a Set object to store the elements we have seen so far
  const seen = new Set();

  // Iterate over each element in the array
  for (let i = 0; i < array.length; i++) {
    // Check if the element is in the Set
    if (seen.has(array[i])) {
      // If it is, return it
      return array[i];
    }
    // If it is not, add it to the Set
    seen.add(array[i]);
  }

  // If no repeating element is found, return undefined
  return undefined;
}

console.log(findRepeating([1, 3, 2, 3, 4]));
console.log(findRepeating([1, 5, 1, 2, 3, 4]));
console.log(findRepeating([1]));
