function mergeSortedArrays(array1, array2) {
  let mergedArray = [...array1, ...array2];
  //   let mergedArray = array1.concat(array2);
  let sortedMergedArray = mergedArray.sort(function (a, b) {
    return a - b;
    // The compare function should return a negative, zero, or positive value, depending on the arguments, a and b. If the returned value is negative, a is sorted before b. If the returned value is positive, b is sorted before a. If the returned value is zero, a and b are considered equal and their order is not changed.
  });

  return sortedMergedArray;
}
console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
