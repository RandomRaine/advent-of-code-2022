const file = require("fs").readFileSync("input.txt", "utf8");
const line = file.split("\n\n");

const elfCalories = [];
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
  elfCalories.push({ name: `elf ${currentElf}`, snacks: [] });
  const calories = line[i].split("\n");

  for (let j = 0; j < calories.length; j++) {
    var snack = snacks[Math.floor(Math.random() * snacks.length)];

    elfCalories[i].snacks.push({
      name: snack,
      calories: parseInt(calories[j]),
    });
  }
  currentElf++;
}

var maxCalories = 0;
var elfWithMaxCalories = null;

for (var i = 0; i < elfCalories.length; i++) {
  var elf = elfCalories[i];
  var elfTotalCalories = 0;
  for (var j = 0; j < elf.snacks.length; j++) {
    elfTotalCalories += elf.snacks[j].calories;
  }
  if (elfTotalCalories > maxCalories) {
    maxCalories = elfTotalCalories;
    elfWithMaxCalories = elf;
  }
}
console.log(elfCalories[0]);
console.log(
  "The Elf carrying the most calories is " +
    elfWithMaxCalories.name +
    " and is carrying " +
    maxCalories +
    " calories."
);
