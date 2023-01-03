// Input: arr[] = {10, 12, 11, 15},
//        low = 10, high = 15
// Output: 13, 14

// Input: arr[] = {1, 14, 11, 51, 15},
//        low = 50, high = 55
// Output: 50, 52, 53, 54 55

// function printMissing(array, low, high) {
//   // Low to high all numbers
//   const lowToHigh = [];

//   for (let i = low; i <= high; i++) {
//     lowToHigh.push(i);
//   }

//   // 10,11,12,13,14,15

//   const finalArray = lowToHigh.filter((element) => !array.includes(element));

//   return finalArray;
// }

function printMissing(array, low, high) {
  // Create a map to store the numbers in the range
  const map = new Map();

  // Iterate through the range and add the numbers to the map
  for (let i = low; i <= high; i++) {
    map.set(i, true);
  }

  // Iterate through the array and remove the numbers from the map
  for (let i = 0; i < array.length; i++) {
    map.delete(array[i]);
  }

  // Get the missing numbers from the map
  const finalArray = Array.from(map.keys());

  return finalArray;
}

console.log(printMissing([10, 12, 11, 15], 10, 15)); // returns [13, 14]
console.log(printMissing([1, 14, 11, 51, 15], 50, 55)); // returns [ 50, 52, 53, 54, 55 ]
