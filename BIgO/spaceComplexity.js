// Example 1 : Space complexity O(1)
function boooo(n) {
  for (let i = 0; i < n; i++) {
    console.log("booooo");
  }
}

boooo([1, 2, 3, 4, 5]); // O(1) since, space is not changed after we provided the input to boooo() we have given array of length 5 and we are getting 5 values

// Example 2 : Space complexity O(n)
function arrayOfHiNTimes(n) {
  var hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = "hi";
  }
  return hiArray;
}

arrayOfHiNTimes(6); // O(n) since we have assigned a variable hiArray adn a data structure in hiArray[i]
