import { readFileSync } from "node:fs";

const elves = readFileSync("day-1.txt", { encoding: "utf-8" })
  .replace(/\r/g, "")
  .trim()
  .split("\n\n");

const calories = elves.map((elf) => {
  const calories = elf.split("\n").map(Number);
  return calories.reduce((previous, current) => previous + current, 0);
});

function partOne() {
  //finds the largest number by turning the calories array into a list of arguments
  console.log(Math.max(...calories));
}

function partTwo() {
  var sorted = calories.sort(function (a, b) {
    return b - a;
  });
  var topThree = sorted.slice(0, 3);

  console.log(topThree.reduce((previous, current) => previous + current, 0));
}

partOne();
partTwo();
