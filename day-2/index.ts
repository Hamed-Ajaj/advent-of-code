import * as fs from "node:fs";

const input = fs.readFileSync("input.txt", "utf8").trim().split(",");
let password: number = 0;

function isInvalid(num: number): boolean {
  const strNum = num.toString();
  const len = strNum.length;
  console.log(7 % 1)
  // Try all possible pattern lengths from 1 to len/2
  for (let patternLen = 1; patternLen <= len / 2; patternLen++) {
    // Only check if the pattern length divides evenly
    if (len % patternLen !== 0) continue;

    const pattern = strNum.slice(0, patternLen);

    // Skip if pattern has leading zeros
    if (pattern[0] === '0') continue;

    // Check if the entire number is this pattern repeated
    let isRepeated = true;
    for (let i = patternLen; i < len; i += patternLen) {
      if (strNum.slice(i, i + patternLen) !== pattern) {
        isRepeated = false;
        break;
      }
    }

    if (isRepeated) return true;
  }

  return false;
}

for (let i = 0; i < input.length; i++) {
  const id = input[i]?.split("-");
  const start = Number(id?.[0]);
  const end = Number(id?.[1]);

  for (let j = start; j <= end; j++) {
    if (isInvalid(j)) {
      password += j;
    }
  }
}

console.log(password);
