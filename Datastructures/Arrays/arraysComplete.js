/* 
Here is a list of all the methods that are available on JavaScript arrays:

concat(): Returns a new array that is the result of concatenating the given arrays or values.

copyWithin(): Copies a sequence of elements within the array.

entries(): Returns a new Array Iterator object that contains the key/value pairs for each index in the array.

every(): Tests whether all elements in the array pass the test implemented by the provided function.

fill(): Fills all the elements of an array from a start index to an end index with a static value.

filter(): Creates a new array with all elements that pass the test implemented by the provided function.

find(): Returns the value of the first element in the array that satisfies the provided testing function.

findIndex(): Returns the index of the first element in the array that satisfies the provided testing function.

flat(): Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

flatMap(): Maps each element using a mapping function, then flattens the result into a new array.

forEach(): Calls a function for each element in the array.

includes(): Determines whether an array includes a certain value among its entries, returning true or false as appropriate.

indexOf(): Returns the first index at which a given element can be found in the array, or -1 if it is not present.

join(): Joins all elements of an array into a string and returns this string.

keys(): Returns a new Array Iterator that contains the keys for each index in the array.

lastIndexOf(): Returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.

map(): Creates a new array with the results of calling a provided function on every element in the calling array.

pop(): Removes the last element from an array and returns that element.

push(): Adds one or more elements to the end of an array and returns the new length of the array.

reduce(): Apply a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

reduceRight(): Apply a function against an accumulator and each element in the array (from right to left) to reduce it to a single value.

reverse(): Reverses the order of the elements in an array.

shift(): Removes the first element from an array and returns that element.

slice(): Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).

some(): Tests whether at least one element in the array passes the test implemented by the provided function.

sort(): Sorts the elements of an array in place and returns the sorted array.

splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

toLocaleString(): Returns a string representing the array and its elements in a language-sensitive, human-readable format.

toString(): Returns a string representing the array and its elements.

unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.

values(): Returns a new Array Iterator object that contains the values for each index in the array.

*/

let elements = ["Fire", "Air", "Water"];
let numbers = [1, 2, 3, 4];
let objects = [{ x: 1 }, { x: 2 }, { x: 3 }];

// concat()
let concat = elements.concat(numbers, objects);
console.log(concat); // ['Fire', 'Air', 'Water', 1, 2, 3, 4, {x: 1}, {x: 2}, {x: 3}]

// copyWithin()
let copyWithin = elements.copyWithin(1, 2);
console.log(copyWithin); // ['Fire', 'Water', 'Water']

// entries()
let entries = elements.entries();
console.log(entries.next().value); // [0, 'Fire']
console.log(entries.next().value); // [1, 'Air']
console.log(entries.next().value); // [2, 'Water']

// every()
let every = elements.every((element) => element.length === 4);
console.log(every); // true

// fill()
let fill = elements.fill("Earth", 1, 2);
console.log(fill); // ['Fire', 'Earth', 'Water']

// filter()
let filter = numbers.filter((number) => number % 2 === 0);
console.log(filter); // [2, 4]

// find()
let find = objects.find((object) => object.x === 2);
console.log(find); // {x: 2}

// findIndex()
let findIndex = objects.findIndex((object) => object.x === 2);
console.log(findIndex); // 1

// flat()
let flat = [1, 2, [3, 4], [5, [6]]].flat();
console.log(flat); // [1, 2, 3, 4, 5, [6]]

// flatMap()
let flatMap = numbers.flatMap((number) => [number, number * 2]);
console.log(flatMap); // [1, 2, 2, 4, 3, 6, 4, 8]

// forEach()
let forEach = numbers.forEach((number) => console.log(number));
// Output: 1 2 3 4

// includes()
let includes = numbers.includes(2);
console.log(includes); // true

// indexOf()
let indexOf = elements.indexOf("Air");
console.log(indexOf); // 1

// join()
let join = elements.join(", ");
console.log(join); // 'Fire, Air, Water'

// keys()
let keys = elements.keys();
console.log(keys.next().value); // 0
console.log(keys.next().value); // 1
console.log(keys.next().value); // 2

// lastIndexOf()
let lastIndexOf = elements.lastIndexOf("Air");
console.log(lastIndexOf); // 1

// map()
let map = numbers.map((number) => number * 2);
console.log(map); // [2, 4, 6, 8]

// pop()
let pop = elements.pop();
console.log(pop); // 'Water

// push()
let push = elements.push("Earth");
console.log(push); // 4
console.log(elements); // ['Fire', 'Air', 'Earth']

// reduce()
let reduce = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(reduce); // 10

// reduceRight()
let reduceRight = elements.reduceRight(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(reduceRight); // 'EarthAirFire'

// reverse()
let reverse = elements.reverse();
console.log(reverse); // ['Earth', 'Air', 'Fire']

// shift()
let shift = elements.shift();
console.log(shift); // 'Earth'
console.log(elements); // ['Air', 'Fire']

// slice()
let slice = elements.slice(0, 1);
console.log(slice); // ['Air']

// some()
let some = elements.some((element) => element.length === 4);
console.log(some); // true

// sort()
let sort = elements.sort();
console.log(sort); // ['Air', 'Fire']

// splice()
let splice = elements.splice(1, 0, "Earth");
console.log(splice); // []
console.log(elements); // ['Air', 'Earth', 'Fire']

// toLocaleString()
let toLocaleString = numbers.toLocaleString("en-US");
console.log(toLocaleString); // '1, 2, 3, 4'

// toString()
let toString = elements.toString();
console.log(toString); // 'Air,Earth,Fire'

// unshift()
let unshift = elements.unshift("Water");
console.log(unshift); // 4
console.log(elements); // ['Water', 'Air', 'Earth', 'Fire']

// values()
let values = elements.values();
console.log(values.next().value); // 'Water'
console.log(values.next().value); // 'Air'
console.log(values.next().value); // 'Earth'
console.log(values.next().value); // 'Fire'
