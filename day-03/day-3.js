import { readFileSync } from "node:fs";

const strings = readFileSync("day-3.txt", { encoding: "utf-8" })
  .replace(/\r/g, "")
  .trim()
  .split("\n");

function letterToPriority(letter) {
  //if it is a lowercase letter
  if (/[a-z]/.test(letter)) {
    return letter.charCodeAt(0) - 96;
  } else {
    return letter.charCodeAt(0) - 65 + 27;
  }
}

function partOne() {
  const output = strings.map((string) => {
    const firstHalf = [...string.slice(0, string.length / 2)];
    const secondHalf = [...string.slice(string.length / 2)];

    let firstHalfSet = new Set(firstHalf);

    const intersection = secondHalf.filter((x) => firstHalfSet.has(x));
    const duplicated = [...new Set(intersection)];

    return letterToPriority(duplicated[0]);
  });

  console.log(output.reduce((a, b) => a + b, 0));
}

function partTwo() {
  let sum = 0;
  for (let i = 0; i < strings.length; i += 3) {
    const backpacks = [
      [...strings[i]],
      [...strings[i + 1]],
      [...strings[i + 2]],
    ];

    let set = new Set(backpacks[0]);
    let intersection = backpacks[1].filter((x) => set.has(x));

    set = new Set(intersection);
    intersection = backpacks[2].filter((x) => set.has(x));

    const duplicated = [...new Set(intersection)];
    sum += letterToPriority(duplicated[0]);
  }
  console.log(sum);
}

partOne();
partTwo();
