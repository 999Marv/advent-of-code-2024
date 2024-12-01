import { readFileSync } from "fs";

function parseInput(path) {
  const fileContents = readFileSync(path, "utf8");
  return fileContents.split("\n");
}

function main() {
  const inputPath = "./day1/day1.txt";
  const lines = parseInput(inputPath);

  const arr1 = [];
  const arr2 = [];

  lines.forEach((line) => {
    const [val1, val2] = line.split("   ");

    arr1.push(val1);
    arr2.push(val2);
  });

  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  let count = 0;

  for (let i = 0; i < arr1.length; i++) {
    count += Math.abs(arr1[i] - arr2[i]);
  }

  console.log(count);
}

main();
