//
// import * as fs from "node:fs";
// // we need to loop on the input
// // we need to take the 2 biggest numbers and combine them in one number
// // like 893129479123874 the 2 are 99 so the number is 99 and we add it to the total
// // if we take the number we have to replace it with null
//
// const input = fs.readFileSync("input.txt", "utf8").trim().split("\n");
// let total = 0;
//
// const strArrToNum = (arr: string[]): number[] => {
//   return arr.map((str) => {
//     return Number(str)
//   })
// }
//
// const strToNum = (str: string) => {
//   const num = Number(str)
//   return num
// }
//
// for (let i = 0; i < input.length; i++) {
//   const strNumArr = input[i]!.split("")
//   const numArr = strArrToNum(strNumArr)
//   const sortedArr = numArr?.sort((a, b) => b - a)
//   const biggestNum = sortedArr[0]!
//   let secBiggestNum;
//   for (let j = 0; j < strNumArr.length; j++) {
//     if (sortedArr[j]! < biggestNum) {
//       secBiggestNum = sortedArr[j]
//       break
//     }
//   }
//   let joltage = `${biggestNum}${secBiggestNum}`;
//   console.log(joltage)
//   total += strToNum(joltage)
// }
// console.log(total)
//
import * as fs from "node:fs";

const input = fs.readFileSync("input.txt", "utf8")
  .trim()
  .split("\n")
  .filter(Boolean);

const maxJoltageFromLine = (line: string) => {
  const digits = line.split("").map((c) => Number(c));
  if (digits.length < 2) return 0; // or throw if impossible

  let best = -Infinity;
  for (let i = 0; i < digits.length - 1; i++) {
    for (let j = i + 1; j < digits.length; j++) {
      const val = digits[i]! * 10 + digits[j]!;
      if (val > best) best = val;
    }
  }
  return best;
};

// Compute for your input file:
let total = 0;
for (const line of input) {
  const lineMax = maxJoltageFromLine(line);
  total += lineMax;
}
console.log("Answer (sum of maximum joltage per bank):", total);
