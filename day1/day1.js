import { readFileSync } from "fs";

function parseInput(path) {
  const fileContents = readFileSync(path, "utf8");
  return fileContents.split("\n");
}

function shapeArray(lines) {
  const arr1 = [];
  const arr2 = [];

  lines.forEach((line) => {
    const [val1, val2] = line.split("   ");
    arr1.push(Number(val1));
    arr2.push(Number(val2));
  });

  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  return { arr1, arr2 };
}

function main() {
  const inputPath = "./day1/day1.txt";
  const lines = parseInput(inputPath);

  const { arr1, arr2 } = shapeArray(lines);

  const ans = arr1.reduce(
    (sum, val, idx) => sum + Math.abs(val - arr2[idx]),
    0
  );

  console.log(ans);
}

main();
