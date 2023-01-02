// Input: "fun&!! time";
// Output: time;
// Input: "I love dogs";
// Output: love;

function getLongestWord(sentence) {
  let allowedChars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ".split("");

  // Initialize an empty result string
  let result = "";

  // Iterate through each character in the sentence
  for (let i = 0; i < sentence.length; i++) {
    // If the character is allowed, add it to the result string
    if (allowedChars.indexOf(sentence[i]) !== -1) {
      result += sentence[i];
    }
  }

  // Split the sentence into an array of words
  let words = result.split(" ");

  // Sort the words by length in descending order
  words.sort((a, b) => b - a);

  // Return the first word (which will be the longest)
  return words[0];
}

console.log(getLongestWord("fun&!! time"));
console.log(getLongestWord("I love dogs"));
