// JavaScript provides a built-in Map object that can be used to store key-value pairs. A Map object is an iterable, meaning that you can loop over it with a for...of loop. Here's an example of how to create and use a Map object:

/*
n JavaScript, a Map object is a collection of key-value pairs that are ordered by insertion order. It is similar to an object, but it can store keys of any type, including functions, objects, and primitives.

A Map object is not a hash table, but it is often used to implement hash-like data structures. Unlike an object, a Map object maintains the insertion order of its elements, and it can iterate its elements in that order.
*/

const map = new Map([
  ["name", "John"],
  ["age", 30],
  ["country", "USA"],
]);

console.log(map.size); // Outputs 3

// Get the value for a key
console.log(map.get("name")); // Outputs "John"

// Check if a key exists in the map
console.log(map.has("age")); // Outputs true

// Remove a key-value pair from the map
map.delete("country");

// Iterate over the keys and values in the map
for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}
// Outputs:
// name: John
// age: 30

// Iterate over the key-value pairs in the map
map.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

// Clear the map
map.clear();
console.log(map.size); // Outputs 0

/* 
list of all the methods that can be used with Map objects in JavaScript:

new Map([iterable]): creates a new Map object. If an iterable object is provided, the elements of the iterable are added to the map.

map.clear(): removes all key-value pairs from the map.

map.delete(key): removes the key-value pair with the specified key from the map. Returns true if the key-value pair was removed, or false if the key was not found in the map.

map.entries(): returns a new iterator object that contains the key-value pairs for each element in the map, in insertion order.

map.forEach(callback[, thisArg]): calls the callback function once for each key-value pair in the map, in insertion order. The callback function is invoked with three arguments: the value, the key, and the map itself.

map.get(key): returns the value associated with the specified key, or undefined if the key is not present in the map.

map.has(key): returns a boolean indicating whether the map has an element with the specified key.

map.keys(): returns a new iterator object that contains the keys for each element in the map, in insertion order.

map.set(key, value): adds a new key-value pair to the map, or updates the value of an existing key. Returns the map object.

map.values(): returns a new iterator object that contains the values for each element in the map, in insertion order.

*/
