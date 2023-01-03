// Input:  arr[] = {1, 5, 7, -1}, sum = 6
// Output:  2
// Explanation: Pairs with sum 6 are (1, 5) and (7, -1).

// O(n^2) --> complexity
function getPairsCount(array, sum) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === sum) {
        // console.log(array[i], array[j]);
        count++;
      }
    }
  }

  return count;
}

console.log(getPairsCount([1, 5, 7, -1], 6));
console.log(getPairsCount([1, 5, 7, -1, 5], 6));
console.log(getPairsCount([1, 1, 1, 1], 2));
console.log(getPairsCount([10, 12, 10, 15, -1, 7, 6, 5, 4, 2, 1, 1, 1], 11));
