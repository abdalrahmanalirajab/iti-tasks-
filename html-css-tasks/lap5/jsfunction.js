// task 1 
function tips() {
    const tips = [
        "Always use strict mode",
        "Understand hoisting in JavaScript",
        "Use let and const instead of var",
        "Arrow functions simplify syntax",
        "Always validate user input",
        "Avoid global variables",
        "Use array methods like map & filter",
        "Learn async/await",
        "Understand closures well",
        "Practice DOM manipulation"
    ];
    document.write(tips[Math.floor(Math.random() * tips.length)]);
}


// task2 

function date() {

    document.write(new Date().toLocaleString());

}



// task 3

function checkEmail() {
    let email;
    do {
        email = prompt("Enter your email:");
        if (email.indexOf("@") > 0 &&
            email.indexOf("@") < email.length - 1) {
            alert("Valid Email");
            break;
        } else {
            alert("Invalid Email");
        }
    } while (true);
}


// task4

function validateFullNameAndEmail() {
    let nameRegex = /^[A-Za-z]{3,}( [A-Za-z]{3,})+$/;
    let emailRegex =
        /^[A-Za-z0-9]+@[A-Za-z0-9]+\.(com|net|edu|org)\.eg$/;

    let fullName, email;

    do {
        fullName = prompt("Enter Full Name:");
    } while (!nameRegex.test(fullName));

    do {
        email = prompt("Enter Email (.eg domain only):");
    } while (!emailRegex.test(email));

    alert("Both inputs are valid ✔");
}


// task6

function testArray() {
    let grades = new Array(60, 100, 10, 15, 85);
    grades.sort((a, b) => b - a);

    let highest = grades.find(g => g <= 100);


    let failed = grades.filter(g => g < 60);

    console.log("Sorted:", grades);
    console.log("Highest:", highest);
    console.log("Below 60:", failed);

}



// task 7 


function testOpeject() {
    let students = [
        { Name: "Ali", Degree: 95 },
        { Name: "Omar", Degree: 50 },
        { Name: "Sara", Degree: 100 }
    ];

    console.log(students.find(s => s.Degree >= 90));

    console.log(students.filter(s => s.Degree < 60));

    students.push({ name: "abody", Degree: 80 });

    for (let i in students) console.log(students[i]);

    for (let student of students) console.log(student);

    students.pop();

    for (let student of students) {
        console.log(student);
    }

    students.sort();

    for (let student of students) {
        console.log(student);
    }
    //(Bonus)

    students.splice(2, 0, { Name: "Youssef", Degree: 80 }, { Name: "Nada", Degree: 90 });

    //(Bonus)
    students.splice(3, 1);


}



// task 8 
function birthdata() {
    let dateStr = prompt("Enter Date (DD-MM-YYYY)");

    if (
        dateStr.length === 10 &&
        dateStr[2] === "-" &&
        dateStr[5] === "-"
    ) {
        let d = Number(dateStr.substring(0, 2));
        let m = Number(dateStr.substring(3, 5)) - 1;
        let y = Number(dateStr.substring(6));

        let dateObj = new Date(y, m, d);
        alert(dateObj.toDateString());
    } else {
        alert("Wrong Date Format");
    }
}

// task 9 
function handleError() {


    try {
        let test = Number(prompt("enter test number "));
        if (test < 0) throw "negitive "
        console.log("positive");
    } catch (e) {
        console.log("Caught Error:", e.message);


    }
}