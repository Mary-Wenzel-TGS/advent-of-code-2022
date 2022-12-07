import { readFileSync } from "node:fs";

const guide = readFileSync("day-2.txt", { encoding: "utf-8" })
  .replace(/\r/g, "")
  .trim()
  .split("\n")
  .map((line) => line.split(" "));

const moves = {
  rock: 1,
  paper: 2,
  scissors: 3,
};

const mapInput = {
  A: moves.rock,
  B: moves.paper,
  C: moves.scissors,
  X: moves.rock,
  Y: moves.paper,
  Z: moves.scissors,
};

function score(opponentMove, ourMove) {
  if (opponentMove === ourMove) {
    return ourMove + 3; // draw
  }
  if (
    (opponentMove === moves.rock && ourMove === moves.paper) ||
    (opponentMove === moves.paper && ourMove === moves.scissors) ||
    (opponentMove === moves.scissors && ourMove === moves.rock)
  ) {
    // I win
    return ourMove + 6;
  }
  // I lose
  return ourMove;
}

function partOne() {
  const outcomes = guide.map((line) => {
    const opponentMove = mapInput[line[0]];
    const ourMove = mapInput[line[1]];

    return score(opponentMove, ourMove);
  });

  console.log(outcomes.reduce((a, b) => a + b, 0));
}

const solution = {
  A: {
    //rock
    X: moves.scissors, //lose
    Y: moves.rock, //draw
    Z: moves.paper, //win
  },
  B: {
    //paper
    X: moves.rock,
    Y: moves.paper,
    Z: moves.scissors,
  },
  C: {
    //scissors
    X: moves.paper,
    Y: moves.scissors,
    Z: moves.rock,
  },
};

function partTwo() {
  const outcomes = guide.map((line) => {
    const opponentMove = mapInput[line[0]];

    //
    const ourMove = solution[line[0]][line[1]];

    return score(opponentMove, ourMove);
  });

  console.log(outcomes.reduce((a, b) => a + b, 0));
}

partOne();
partTwo();
