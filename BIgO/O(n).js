// O(n) --> Linear time

const nemo = ["nemo"];

const everyone = [
  "dory",
  "bruce",
  "marlin",
  "nemo",
  "gill",
  "bloat",
  "nigel",
  "squirt",
  "darla",
  "hank",
];

const largeArray = new Array(100000).fill("nemo");

function findNemo(array) {
  // let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found NEMO!");
    }
  }
  // let t1 = performance.now();
  // console.log(`Call to find Nemo took ${t1 - t0} milliseconds`);
}

findNemo(largeArray); // O(n) --> Linear Time

/*


The above function findNemo is a O(n) --> complexity
as if we increase the "no of elements" in an array the "no of operations" also increases

-->  If we have 1 element in an array the no of operations becomes 1
-->  If we have 2 element in an array the no of operations becomes 2

Hence, if we plot a graph we will get a straight line i.e. Linear graph

https://miro.medium.com/max/1012/1*OWkUhdYdVcSN9UI9ibziFg.png


*/
