// Input: arr1[] = {1, 2, 5, 4, 0}, arr2[] = {2, 4, 5, 0, 1}
// Output: Yes

// Input: arr1[] = {1, 2, 5, 4, 0, 2, 1}, arr2[] = {2, 4, 5, 0, 1, 1, 2}
// Output: Yes

//  Input: arr1[] = {1, 7, 1}, arr2[] = {7, 7, 1}
// Output: No

// function areEqual(array1, array2) {
//   const map1 = new Map();
//   const map2 = new Map();

// Add the elements to the maps
for (let i = 0; i < array1.length; i++) {
  map1.set(array1[i], true);
}
for (let i = 0; i < array2.length; i++) {
  map2.set(array2[i], true);
}

//   //   Create an array from the keys in the map1 map
//   //   const array1 = Array.from(map1.keys());

//   //   Use the every() method to iterate through the array1
//   //   and apply the callback function to each element
//   //   const equal = array1.every((element) => {
//   //     Check if the element is present in the map2 map
//   //     using the has() method
//   //     return map2.has(element);
//   //   });

//   // Check if the arrays are equal
//   const equal = Array.from(map1.keys()).every((element) => map2.has(element));

//   return equal;
// }
// console.log(areEqual([1, 2, 5, 4, 0], [2, 4, 5, 0, 1]));

function areEqual(array1, array2) {
  // Sort the arrays
  array1.sort();
  array2.sort();

  // Check if the arrays are equal
  const equal = array1.every((element, index) => element === array2[index]);

  return equal;
}

console.log(areEqual([1, 2, 5, 4, 0], [2, 4, 5, 0, 1])); // returns true
