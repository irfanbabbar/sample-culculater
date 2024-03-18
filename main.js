import inquirer from "inquirer";
const answer = await inquirer.prompt([{
        message: "enter first number", type: "number", name: "firstNumber"
    },
    { message: "enter second number", type: "number", name: "secondNumber" },
    { message: "select one of the operators tp perfrom operator",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "dividion"],
    }
]);
// conditional statement
if (answer.operator === "addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Please select valid operator");
}
