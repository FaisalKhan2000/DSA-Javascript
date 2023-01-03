// _hash is a private property which is no accessible outside the class

class HashTable {
  constructor(size) {
    this.data = new Array(size);
    // this.data = [];
  }

  _hash(key) {
    // _hash is a private property which is no accessible outside the class
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash; // generates 1 to n values from the size of the hashtable which was created by user

    /*
    hash
    ----------
    myHashTable._hash("grapes") --> 24
    myHashTable._hash("apple") --> 14
    myHashTable._hash("orange") --> 5

    */
  }

  set(key, value) {
    let address = this._hash(key); // assigned the hash generated in hash function into an address variable

    // for
    if (!this.data[address]) {
      // if nothing is present in this.data[address]
      // In grapes case this.data[24] is empty
      // Create an empty array
      this.data[address] = [];
    } // Then push the [key, value] in that array
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    const address = this._hash(key); // 24 incase of grapes
    const currentBucket = this.data[address]; // [['grapes,10000], ["Grapes", 10000]]
    if (currentBucket) {
      // if something is present in the array then proceed
      for (let i = 0; i < currentBucket.length; i++) {
        // currentBucket.length = 2 in
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    if (!this.data.length) {
      return undefined;
    }
    let result = [];
    // loop through all the elements
    for (let i = 0; i < this.data.length; i++) {
      // if it's not an empty memory cell
      if (this.data[i] && this.data[i].length) {
        // but also loop through all the potential collisions
        if (this.data.length > 1) {
          for (let j = 0; j < this.data[i].length; j++) {
            result.push(this.data[i][j][0]);
          }
        } else {
          result.push(this.data[i][0]);
        }
      }
    }
    return result;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.set("Grapes", 10000);
myHashTable.set("apples", 9);
myHashTable.set("Apples", 100);
myHashTable.set("orange", 1);
console.log(myHashTable);
console.log(myHashTable.get("grapes"));
console.log(myHashTable.get("Grapes"));
console.log(myHashTable.get("apples"));
console.log(myHashTable.get("Apples"));
console.log(myHashTable.get("orange"));
console.log(myHashTable.keys());

// console.log(myHashTable.set("grapes", 10000));
// console.log(myHashTable.set("Grapes", 10000));
// console.log(myHashTable.set("apples", 9));
