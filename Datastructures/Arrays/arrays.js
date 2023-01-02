/* 
Lookup --> O(1)
Push --> O(1)
Insert --> O(n)
Delete --> O(n)
*/

const strings = [3, 4, 5, 6, 1, 2];
// const strings = [10, 5, 8, 1, 7];
// 4 items * each items taking 4 shelves  = 16 bytes of storage

strings[0]; // 3
strings[strings.length - 1]; // 2

// push --> add to last
strings.push("e"); // O(1)

// pop --> delete last
strings.pop(); // O(1)
strings.pop();

// unshift --> add to start
strings.unshift("x"); // O(n)

// splice

// splice(start);
// splice(start, deleteCount);
// splice(start, deleteCount, item1);
// splice(start, deleteCount, item1, item2, itemN);

// strings.splice(2, 0, "alien"); // O(n)

// shift --> deletes the first
strings.shift();

// Sort --> sorts the array in ascending order

//  When sorting numbers, the default behavior is to sort them as strings, which means that they will be sorted based on their ASCII values.

strings.sort();

// reverse --> reverse the array
strings.reverse();

// concat
let strings2 = [2, 3, 4];
let total = strings.concat(strings2);
// console.log(total);

// join --> 6, 5, 4, 3, 1
let total2 = strings.join(", ");
console.log(total2);

console.log(strings);
