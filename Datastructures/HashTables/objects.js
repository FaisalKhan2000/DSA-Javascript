/* 
an object is an unordered collection of key-value pairs. It is a data type that represents a collection of properties, each of which has a name and a value.
*/

const obj = {
  name: "John",
  age: 30,
  country: "USA",
};

// Get a property value
console.log(obj.name); // Outputs "John"

// Set a property value
obj.age = 35;

// Check if an object has a property
console.log("country" in obj); // Outputs true

// Delete a property
delete obj.country;

// Iterate over the properties of an object
for (const prop in obj) {
  console.log(`${prop}: ${obj[prop]}`);
}
// Outputs:
// name: John
// age: 35

// Object.keys(obj) returns an array of the object's own enumerable property names

console.log(Object.keys(obj)); // Outputs: ['name', 'age', 'city']

// Object.values(obj) returns an array of the object's own enumerable property values
console.log(Object.values(obj)); // Outputs: ['John', 30, 'New York']

// Object.entries(obj) returns an array of the object's own enumerable [key, value] pairs
console.log(Object.entries(obj)); // Outputs: [['name', 'John'], ['age', 30], ['city', 'New York']]

Object.entries(obj).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

/* 
there are several built-in methods that can be used with objects. Here is a list of some of the most commonly used object methods:

Object.assign(target, ...sources): copies the enumerable own properties from one or more source objects to a target object. It returns the target object.

Object.create(proto[, propertiesObject]): creates a new object with the specified prototype object and properties.

Object.defineProperties(obj, properties): defines new or modifies existing properties on an object, and returns the object.

Object.defineProperty(obj, prop, descriptor): defines a new property directly on an object, or modifies an existing property on an object, and returns the object.

Object.entries(obj): returns an array of a given object's own enumerable property [key, value] pairs, in the same order as that provided by a for...in loop.

Object.freeze(obj): prevents new properties from being added to an object, and prevents existing properties from being removed or modified. It returns the object.

Object.getOwnPropertyDescriptor(obj, prop): returns a property descriptor for an own property of an object.

Object.getOwnPropertyDescriptors(obj): returns an object containing all own property descriptors of an object.

Object.getOwnPropertyNames(obj): returns an array of all own properties of an object, in the same order as that provided by a for...in loop.

Object.getOwnPropertySymbols(obj): returns an array of all own symbol properties of an object.

Object.getPrototypeOf(obj): returns the prototype of an object.

Object.is(value1, value2): determines whether two values are the same value.

Object.isExtensible(obj): determines if an object is extensible (whether it can have new properties added to it).

Object.isFrozen(obj): determines if an object is frozen.

Object.isSealed(obj): determines if an object is sealed.

Object.keys(obj): returns an array of a given object's own enumerable property names, in the same order as that provided by a for...in loop.

Object.preventExtensions(obj): prevents new properties from being added to an object. It returns the object.

Object.seal(obj): prevents new properties from being added to an object, and prevents existing properties from being removed. It returns the object.

Object.setPrototypeOf(obj, prototype): sets the prototype of an object.

Object.values(obj): returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop.

*/
