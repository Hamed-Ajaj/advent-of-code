import * as fs from "node:fs";


// so it starts at 50
// if it's go R40 it will be 90
// R10 now it's 0
// L10 90
// L90 R0
// when the rol reach 0 we will increase the password by 2
//

// i want it to add the number if it's R 
// and substract it from the currentNumber if it's L
// if it go beyond 99, will return to 0
// also perhaps
// when it reach 0 we need to add 1 to password
// the problem how to make it work in both direction
// now i get it, it needs to point at 0?

let password: number = 0;
let currentNumber: number = 50;

const input = fs.readFileSync("input.txt", "utf8").trim().split("\n");

for (const line of input) {
  // takse the direction, because it's the first string
  const dir = line[0];
  const steps = Number(line.slice(1));
  // if the steps are 40, it will loop 40 times and add one or substract each loop to the currentNumber
  for (let i = 0; i < steps; i++) {
    if (dir === "R") {
      currentNumber = (currentNumber + 1) % 100;
    } else {
      currentNumber = (currentNumber - 1 + 100) % 100;
    }

    // if he currentNumber reached the 0, we will increase the password
    if (currentNumber === 0) {
      password += 1;
    }
  }
}
console.log(password)
