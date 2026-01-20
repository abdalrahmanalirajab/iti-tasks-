"use strict";


// task1 

function welcome() {
    alert("Welcome to my site");
    let userName = prompt("Enter your name");
    document.write("Welcome " + userName);
}
// task2 
function sum() {
    let a = Number(prompt("enter the first number "));
    let b = Number(prompt("enter the second number "));

    console.log(a + b);
}
// task 3 

function Temp() {
    let temp = Number(prompt("enter today temp"));
    let ans = (temp >= 30 ? "Hot " : "cold");
    console.log(ans);
}

// task4 

function checkTemp() {
    let temp = Number(prompt("enter your temp"));
    let actualFeel = Number(prompt("enter your actualFeel"));
    let result =
        (temp >= 25 && temp <= 30 && actualFeel >= 25 && actualFeel <= 30) ?
        "Normal" :
        (temp < 25 && actualFeel < 25) ?
        "Cold" :
        (temp > 30 && actualFeel > 30) ?
        "Hot" :
        "Ambiguous, can’t detect";

    console.log(result);
}

// task5

function Faculty() {
    let faculty = prompt("enter your faculty");

    switch (faculty) {
        case "FCI":
            alert("You’re eligible to Programming tracks");
            break;
        case "Engineering":
            alert("You’re eligible to Network and Embedded tracks");
            break;
        case "Commerce":
            alert("You’re eligible to ERP and Social media tracks");
            break;
        default:
            alert("You’re eligible to SW fundamentals track");
    }
}

//task 6
function showOdd() {
    let num1 = Number(prompt("enter the first number "));
    let num2 = Number(prompt("enter the second number "));
    for (let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}

// task7

function executeExpression(exp) {
    return eval(exp);
}

function calculate() {
    let expression = prompt("Enter math expression");
    let result = executeExpression(expression);
    alert(`You entered: ${expression}, and the result is: ${result}`);
}

// task8 

function information() {
    let name;
    do {
        name = prompt("Enter your name");
    } while (!isNaN(name));

    let birthYear;
    do {
        birthYear = Number(prompt("Enter birth year"));
    } while (isNaN(birthYear) || birthYear >= 2010);

    let age = 2025 - birthYear;

    document.write(`
Name: ${name}<br>
Birth year: ${birthYear}<br>
Age: ${age}
`);

}
// task9
function debuger() {
    console.log("Start");
    debugger;
    let x = 5;
    console.log(x);
}

//task10


//1=Try this code using strict mode and without strict mode, what’ s the difference ? And why ?

function foo() {

    var x;

    x = 5;

    y = 6;
    return x + y;

}

//Console.log(foo());
// in strict mode you must declare variables before use it 
// works will in non strict mode and the output give 11


//  2- Will this code work with strict mode? Explain why? 

var y;

y = 10;

x = 5;

console.log(x);

console.log(y);

var x;

// no it does work because we use without declare it    



// 3-What’s the value of y variable in the following code? And why? 

var x = 5;

console.log(x);

console.log(y); // y is undefined 

var y = 7;

// 4 
function test() {
    for (let i = 0; i < 10; i++) {
        alert(i);
        alert(x); // Error: Cannot access 'x' before initialization
        let x = 10;
    }
    console.log(i); // Error: i is not defined
}


// bouns assigment
function bouns1() {
    for (let i = 1; i <= 6; i++) {
        document.write("<h" + i + ">Welcome to my page</h" + i + ">");
    }
}