/* 
Hash tables

insert -> O(n)
lookup -> O(n)
delete -> O(n)
search -> O(n)
*/

let user = {
  age: 54,
  name: "kylie",
  magic: true,
  scream: function () {
    console.log("ahhhhhhh!");
  },
};
console.log(user.age);
user.spell = "abra kadabra";
console.log(user.spell);

/*
When you insert key-value pairs sometimes same keys takes the same place in memory 

E.g. age key is placed at location 0
and name is linked to age key at location 0
This is known as "Collisions"
*/
