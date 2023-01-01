// O(1) --> Constant time

const boxes = [0, 1, 2, 3, 4, 5];

function logFirstBox(boxes) {
  console.log(boxes[0]);
}

logFirstBox(boxes);

/*
In this example we are just printing the first value from an array and no matter how big is the array it will still print the first value from the array 

the complexity will be O(1) since, the no of operations is 1 whereas no. of Elements are 6 in the array
*/

// O(2) ???

function logFirstTwoBox(boxes) {
  console.log(boxes[0]);
  console.log(boxes[1]);
}

logFirstTwoBox(boxes);

/*
In the second example our function is printing two elements from an array now we can say the complexity is O(2)

Then, if we have 100 elements the complexity is O(100)???

No, so we Round down the complexity to O(1).... So It doesn't matter how big our inputs are we are always printing the same no of elemets so the complexity will be O(1)



*/
