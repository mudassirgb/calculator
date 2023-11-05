"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var answer = await inquirer_1.default.prompt([
    {
        type: "number",
        name: "numberone",
        message: "kindly is your first number"
    },
    {
        type: "number",
        name: "numbertwo",
        message: "kindly is your two number"
    },
    {
        type: "list",
        name: "operator",
        choices: ["+", "-", "*", "/", "%"],
        message: "select operator: "
    },
]);
var numberone = answer.numberone, numbertwo = answer.numbertwo, operator = answer.operator;
if (numberone && numbertwo && operator) {
    var result = 0;
    if (operator === "+") {
        result = numberone + numbertwo;
    }
    else if (operator === "-")
        result = numberone - numbertwo;
    if (operator === "*")
        result = numberone * numbertwo;
    if (operator === "/")
        result = numberone / numbertwo;
    console.log("your result is :", result);
}
else {
    console.log("kindly enter valid input");
}
;
