import * as fs from "node:fs";

const input = fs.readFileSync("input.txt", "utf8").trim().split(",");
let password: number = 0;

for (let i = 0; i < input.length; i++) {
  const id = input[i]?.split("-");
  const start = Number(id?.[0]);
  const end = Number(id?.[1]);

  for (let j = start; j <= end; j++) {
    const strNum = j.toString();

    // Skip odd-length numbers (can't be split evenly)
    if (strNum.length % 2 !== 0) continue;

    const halfLen = strNum.length / 2;
    const firstHalf = strNum.slice(0, halfLen);
    const secondHalf = strNum.slice(halfLen);

    // Check if it's a repeated pattern (compare as strings!)
    // and ensure no leading zeros
    if (firstHalf === secondHalf && firstHalf[0] !== '0') {
      password += j;
    }
  }
}

console.log(password);
