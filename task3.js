// 08-06-2026 Java Script Task's - 3


// Question No - 1 Employee Salary Calculator
let basicSalary = 40000;
let hra = basicSalary * 15 / 100;
let bonus = basicSalary * 10 / 100;
let totalSalary = basicSalary + hra + bonus;
let tax = totalSalary * 5 / 100;
let finalSalary = totalSalary - tax;
console.log("Basic Salary :", basicSalary);
console.log("HRA :", hra);
console.log("Bonus :", bonus);
console.log("Tax :", tax);
console.log("Final Salary :", finalSalary);
document.writeln("<h3>Question No - 1 Employee Salary Calculator</h3>");
document.writeln("Basic Salary : " + basicSalary + "<br>");
document.writeln("HRA : " + hra + "<br>");
document.writeln("Bonus : " + bonus + "<br>");
document.writeln("Tax : " + tax + "<br>");
document.writeln("Final Salary : " + finalSalary + "<br><br>");


// Question No - 2 Student Grade System
let marks = 80;
console.log("Marks :", marks);
document.writeln("<h3>Question No - 2 Student Grade System</h3>");
document.writeln("Marks : " + marks + "<br>");

if (marks >= 90) {
    console.log("Grade : A+");
    document.writeln("Grade : A+ <br><br>");
} 
else if (marks >= 80) {
    console.log("Grade : A");
    document.writeln("Grade : A <br><br>");
} 
else if (marks >= 70) {
    console.log("Grade : B");
    document.writeln("Grade : B <br><br>");
}
else if (marks >= 60) {
    console.log("Grade : C");
    document.writeln("Grade : C <br><br>");
}
else {
    console.log("Grade : Fail");
    document.writeln("Grade : Fail <br><br>");
}


// Question No - 3 Login Authentication System
let username = "sammano@gmail.com";
let password = "Sam@12544";
document.writeln("<h3>Question No - 3 Login Authentication System</h3>");
if (username === "sammano@gmail.com") {
    if (password === "Sam@1254") {
        console.log("Login Success");
        document.writeln("Login Success <br><br>");
    } 
    else {
        console.log("Invalid Password");
        document.writeln("Invalid Password <br><br>");
    }
}
else {
    console.log("Invalid Username");
    document.writeln("Invalid Username <br><br>");
}


// Question No - 4 ATM Withdrawal Machine
let balance = 26000;
let withdrawAmount = 5000;

document.writeln("<h3>Question No - 4 ATM Withdrawal Machine</h3>");
console.log("Available Balance :", balance);
console.log("Withdraw Amount :", withdrawAmount);
document.writeln("Available Balance : " + balance + "<br>");
document.writeln("Withdraw Amount : " + withdrawAmount + "<br>");

if (withdrawAmount > balance) {
    console.log("Insufficient Balance");
    document.writeln("Status : Insufficient Balance <br><br>");
} 
else {
    balance = balance - withdrawAmount;
    console.log("Withdrawal Success");
    console.log("Remaining Balance :", balance);
    document.writeln("Status : Withdrawal Success <br>");
    document.writeln("Remaining Balance : " + balance + "<br><br>");
}


// Question No - 5 E-Commerce Discount System
let purchaseAmount = 12000;
let discount = 0;

if (purchaseAmount >= 10000) {
    discount = purchaseAmount * 20 / 100;
}
else if (purchaseAmount >= 5000) {
    discount = purchaseAmount * 10 / 100;
}
else if (purchaseAmount >= 2000) {
    discount = purchaseAmount * 5 / 100;
}

let finalAmount = purchaseAmount - discount;
console.log("Original Amount :", purchaseAmount);
console.log("Discount :", discount);
console.log("Final Amount :", finalAmount);
document.writeln("<h3>Question No - 5 E-Commerce Discount System</h3>");
document.writeln("Original Amount : " + purchaseAmount + "<br>");
document.writeln("Discount : " + discount + "<br>");
document.writeln("Final Amount : " + finalAmount + "<br><br>");


// Question No - 6 Traffic Fine Checker
let helmet = false;
let license = false;
let fine = 0;

if (!helmet && !license) {
    fine = 10000;
}
else if (!helmet) {
    fine = 5000;
}
else {
    fine = 5000;
}

console.log("Fine :", fine);
document.writeln("<h3>Question No - 6 Traffic Fine Checker</h3>");
document.writeln("Fine : " + fine + "<br><br>");


// Question No - 7 Employee Attendance Tracker
let attendance = ["P","P","P","P","A","P","P","A","P","P","P","P"];
let present = 0;
let absent = 0;

for(let i = 0; i < attendance.length; i++){

    if(attendance[i] === "P"){
        present++;
    }
    else{
        absent++;
    }
}

console.log("Present Days :", present);
console.log("Absent Days :", absent);
document.writeln("<h3>Question No - 7 Employee Attendance Tracker</h3>");
document.writeln("Present Days : " + present + "<br>");
document.writeln("Absent Days : " + absent + "<br><br>");


// Question No - 8 Product Inventory Management
let Product = {
    "Product Name" : "Mobile",
    "Model" : "Apple iPhone 17 Pro Max",
    "Price" : 199000,
    "Stock" : 3
};
document.writeln("<h3>Question No - 8 Product Inventory Management</h3>");

for(let key in Product){
    console.log(key + " : " + Product[key]);
    document.writeln(key + " : " + Product[key] + "<br>");
}
document.writeln("<br>");


// Question No - 9 Cab Fare Calculator
let distance = 16;
let fare = 0;

if(distance <= 6){
    fare = distance * 20;
}
else if(distance <= 10){
    fare = (6 * 20) + ((distance - 6) * 15);
}
else{
    fare = (6 * 20) + (6 * 15) + ((distance - 10) * 10);
}

console.log("Total Fare :", fare);
document.writeln("<h3>Question No - 9 Cab Fare Calculator</h3>");
document.writeln("Distance : " + distance + " KM<br>");
document.writeln("Total Fare : ₹" + fare + "<br><br>");


// Question No - 10 Mini Employee Management System
let employees = [
    {id:1,name:"Mano",salary:50000},
    {id:2,name:"Samantha",salary:40000},
    {id:3,name:"Sam",salary:35000},
    {id:4,name:"Santhiya",salary:30000},
];

let highest = employees[0];
let lowest = employees[0];
let totalExpense = 0;
document.writeln("<h3>Question No - 10 Mini Employee Management System</h3>");

for(let i = 0; i < employees.length; i++){

    console.log(employees[i]);
    document.writeln(
        "ID : " + employees[i].id +
        " | Name : " + employees[i].name +
        " | Salary : " + employees[i].salary +
        "<br>"
    );

    totalExpense += employees[i].salary;

    if(employees[i].salary > highest.salary){
        highest = employees[i];
    }
    if(employees[i].salary < lowest.salary){
        lowest = employees[i];
    }
}

console.log("Highest Salary Employee :", highest.name);
console.log("Lowest Salary Employee :", lowest.name);
console.log("Total Employees :", employees.length);
console.log("Total Salary Expenditure :", totalExpense);

document.writeln("<br>");
document.writeln("Highest Salary Employee : " + highest.name + "<br>");
document.writeln("Lowest Salary Employee : " + lowest.name + "<br>");
document.writeln("Total Employees : " + employees.length + "<br>");
document.writeln("Total Salary Expenditure : " + totalExpense + "<br>");