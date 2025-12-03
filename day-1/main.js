"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("node:fs");
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
var Direction;
(function (Direction) {
    Direction["Right"] = "R";
    Direction["Left"] = "L";
})(Direction || (Direction = {}));
var password = 0;
var start = 50;
var currentNumber = start;
var input = fs.readFileSync("input.txt", "utf8").trim().split("\n");
for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
    var line = input_1[_i];
    // takse the direction, because it's the first string
    var dir = line[0];
    var steps = Number(line.slice(1));
    // if the steps are 40, it will loop 40 times and add one or substract each loop to the currentNumber
    for (var i = 0; i < steps; i++) {
        if (dir === "R") {
            currentNumber = (currentNumber + 1) % 100;
        }
        else {
            currentNumber = (currentNumber - 1 + 100) % 100;
        }
        // if he currentNumber reached the 0, we will increase the password
        if (currentNumber === 0) {
            password += 1;
        }
    }
}
console.log(password);
