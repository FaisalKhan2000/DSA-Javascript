/* 
Rule Book
    Rule 1. Worst Case 
    Rule 2. Remove Constants 
    Rule 3. Different terms for inputs
    Rule 4. Drop Non Dominants
*/

//! Rule 1. Worst Case

// const nemo = ["nemo"];

// const everyone = [
//   "dory",
//   "bruce",
//   "marlin",
//   "gill",
//   "bloat",
//   "nigel",
//   "squirt",
//   "darla",
//   "hank",
//   "nemo",
// ];

// const largeArray = new Array(100000).fill("nemo");

// function findNemo(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log("running");
//     if (array[i] === "nemo") {
//       console.log("Found NEMO!");
//       break;
//     }
//   }
// }

// findNemo(everyone);

/*

Best case --> "nemo" will be at firstPlace O(1)
Worst case --> "nemo" will be at lastPlace O(n)

* we will always consider the worst case : O(n)

*/

//! Rule 2. Remove Constants

// function printFirstItemThenFirstHalfThenSayHi100Times(items) {
//   console.log(items[0]); // 1

//   let middleIndex = Math.floor(items.length / 2);
//   let index = 0;

//   while (index < middleIndex) {
//     console.log(items[index]); // n/2 --> half
//     index++;
//   }

//   for (let i = 0; i < 100; i++) {
//     console.log("hi"); // 100
//   }
// }

/*
Dropping the constants

O(1 + n/2 + 100)

O(n/2 + 101)

O(n/2 + 1)

O(n + 1)

O(n)

*/

// Another Example

// function compressBoxestwice(boxes) {
//   boxes.forEach((box) => {
//     // O(n)
//     console.log(box);
//   });

//   boxes.forEach((box) => {
//     console.log(box); // O(n)
//   });
// }

/*
Dropping constants

O(n) + O(n)

O(2n)

O(n)
*/

/*
 In the above example we have two input boxes and we are iterating the same loop twice, BigO of loop1 will be O(n) & BigO of loop2 will be O(n)

 Hence, the overall BigO will be O(2n) 
 and dropping the constant we get BigO --> O(n)

*/

//! Rule 3. Different terms for inputs

// two for loops are separate one after another --> ADD
// one for loop is looped inside an another foor loop --> MULTIPLY

// function compressBoxestwice(boxes1, boxes2) {
//   boxes1.forEach((box) => {
//     console.log(box); // O(n)
//   });

//   boxes2.forEach((box) => {
//     console.log(box); // O(m)
//   });
// }

/*
In the above example we have two input boxes and we are iterating them separately so, BigO of loop1 will be O(n) & BigO of loop2 will be O(m)

Hence, the overall BigO will be O(m+n)

*/

// Another Example

// Log all pairs of array

const boxes = ["A", "B", "C", "D", "E"];

function logAllPairsOfArray(array) {
  for (let i = 0; i < array.length; i++) {
    // O(n)
    for (let j = 0; j < array.length; j++) {
      // O(n)
      console.log(array[i], array[j]);
    }
  }
}

logAllPairsOfArray(boxes);

/* 
In case of Nested loops instead of adding O(n+n)

we will multiply O(n*n)

so, BigO will be O(n^2)

*/

//! Rule 4. Drop Non Dominants

function printAllNumbersThenAllPairSums(numbers) {
  console.log("these are the numbers:");
  numbers.forEach(function (number) {
    // O(n)
    console.log(number);
  });

  console.log("and these are their sums:");
  numbers.forEach(function (firstNumber) {
    // O(n^2)
    numbers.forEach(function (secondNumber) {
      console.log(firstNumber + secondNumber);
    });
  });
}

printAllNumbersThenAllPairSums([1, 2, 3, 4, 5]);

/*
O(n + n^2)

Dropping the non dominant n

BigO will be O(n^2) 
*/
