const file = require("fs").readFileSync("input.txt", "utf8");
const line = file.split("\n\n");

const Erufu = [];
let currentElf = 1;
const snacks = [
  "Candy Cane",
  "Butterscotch",
  "Gingerbread Man",
  "Gingerbread House",
  "Peanut Butter",
  "Chocolate",
  "Pretzel",
  "Peanut Butter Cup",
  "Peanut Brittle",
  "Peanut Butter Cookie",
  "Peanut Butter Fudge",
  "Peanut Butter Popcorn",
  "Peanut Butter Sandwich",
  "Peanut Butter and Jelly Sandwich",
  "Peanut Butter and Jelly Popcorn",
  "Peanut Butter and Jelly Fudge",
  "Peanut Butter and Jelly Cookie",
  "Peanut Butter and Jelly Brittle",
];

for (let i = 0; i < line.length; i++) {
  Erufu.push({ name: `elf ${currentElf}`, snacks: [], totalCalories: 0 });
  const calories = line[i].split("\n");

  for (let j = 0; j < calories.length; j++) {
    var snack = snacks[Math.floor(Math.random() * snacks.length)];

    Erufu[i].snacks.push({
      name: snack,
      calories: parseInt(calories[j]),
    });
  }
  currentElf++;
}

var maxCalories = 0;
var elfWithMaxCalories = null;

for (var i = 0; i < Erufu.length; i++) {
  var elf = Erufu[i];
  var elfTotalCalories = 0;
  for (var j = 0; j < elf.snacks.length; j++) {
    elfTotalCalories += elf.snacks[j].calories;
  }
  Erufu[i].totalCalories = elfTotalCalories;
  if (elfTotalCalories > maxCalories) {
    maxCalories = elfTotalCalories;
    elfWithMaxCalories = elf;
  }
}
console.log(Erufu[0]);
console.log(
  "The Elf carrying the most calories is " +
    elfWithMaxCalories.name +
    " and is carrying " +
    maxCalories +
    " calories."
);

var topThree = Erufu.sort(function (a, b) {
  return b.totalCalories - a.totalCalories;
}).slice(0, 3);
console.log("ZR topThree", topThree);
var totalCalories = topThree.reduce(function (sum, elf) {
  return sum + elf.totalCalories;
}, 0);

console.log(
  "How many Calories are those Elves carrying in total? " + totalCalories
);
