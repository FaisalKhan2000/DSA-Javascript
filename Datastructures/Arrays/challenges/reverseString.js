function reverse(str) {
  // validating
  if (!str || typeof str != "string" || str.length < 2) {
    return `you have entered an ${typeof str}`;
  }
  let reversedString = [];
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString.push(str[i]);
  }
  return reversedString.join("");
}

console.log(reverse("Hi My name is Andrei"));
