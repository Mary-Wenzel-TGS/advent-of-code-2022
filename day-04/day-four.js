import { readFileSync } from "node:fs";

const strings = readFileSync("day-four.txt", { encoding: "utf-8" })
  .replace(/\r/g, "")
  .trim()
  .split("\n");

function partOne() {
  const output = strings.map((string) => {
    const [interval1, interval2] = string
      .split(",")
      .map((interval) => interval.split("-").map(Number))
      .sort((a, b) => {
        const oneSize = a[1] - a[0];
        const twoSize = b[1] - b[0];
        return twoSize - oneSize;
      });

    const contains =
      interval1[0] <= interval2[0] && interval1[1] >= interval2[1];

    console.log({ interval1, interval2, contains });
    return contains ? 1 : 0;
  });
  console.log(output.reduce((a, b) => a + b, 0));
}

function partTwo() {
  const output = strings.map((string) => {
    const [first, second] = string
      .split(",")
      .map((interval) => interval.split("-").map(Number))
      .sort((a, b) => {
        const oneSize = a[1] - a[0];
        const twoSize = b[1] - b[0];
        return twoSize - oneSize;
      });

    //....567..
    //......789...
    const overlaps =
      (first[0] <= second[1] && first[1] >= second[1]) ||
      (first[0] <= second[1] && first[1] >= second[0]);

    console.log({ first, second, overlaps });
    return overlaps ? 1 : 0;
  });
  console.log(output.reduce((a, b) => a + b, 0));
}

partTwo();

// partOne();
