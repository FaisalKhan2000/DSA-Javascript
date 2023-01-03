// function firstRecurringCharacter(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i - 1; j >= 0; j--) {
//       if (array[i] === array[j]) {
//         return array[i];
//       }
//     }
//   }
//   return undefined;
// }

function firstRecurringCharacter(arr) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (map.has(element)) {
      return element;
    }
    map.set(element, true);
  }
  return null;
}

console.log(firstRecurringCharacter([1, 2, 3, 4, 5])); // returns null
console.log(firstRecurringCharacter([1, 2, 3, 4, 1])); // returns 1
console.log(firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4])); // returns 1
console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4])); // returns 1
