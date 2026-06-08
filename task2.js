// 05-06-2026 Java Script Task's - 2


// Question No - 1 Student Result Checker
let marks = 75;
console.log("Marks :", marks);
let result = marks >= 35 ? "Pass" : "Fail";
console.log("Result :", result);

if (marks >= 90) {
    console.log("Grade : A");
} else if (marks >= 75) {
    console.log("Grade : B");
} else if (marks >= 60) {
    console.log("Grade : C");
} else {
    console.log("Grade : Fail");
}


// Question No - 2 Employee Bonus Calculator
let salary = 25000;
let bonus = salary * 10 / 100;
let finalSalary = salary + bonus;
console.log("Original Salary :", salary);
console.log("Bonus :", bonus);
console.log("Final Salary :", finalSalary);


// Question No - 3 User Login Validation
let email = "sammano044@gmail.com";
let password = "Sam@1542";

if (email === "sammano044@gmail.com" && password === "Sam@1542") 
    {
    console.log("Login Success");
    } 
else {
    console.log("Login Failed");
}


// Question No - 4 Product Discount Calculator
let price = 2000;
let finalAmount = price > 1000 ? price - (price * 20 / 100) : price;
console.log("Original Price :", price);
console.log("Final Amount :", finalAmount);


// Question No - 5 Array Product Management
let products = ["Laptop", "Mobile", "Mouse", "Keyboard", "Charger"];
console.log("First Product :", products[0]);
console.log("Last Product :", products[products.length -4]);
console.log("Total Products :", products.length);


// Question No - 6 Employee Object
let employee = {
    name: "Mano",
    department: "Full Stack Developer",
    salary: 25000
};
console.log("Employee Details :", employee);
console.log("Employee Name :", employee.name);
console.log("Employee Salary :", employee.salary);


// Question No - 7 E-Commerce Cart Total
let shirt = 500;
let pant = 1000;
let shoe = 1500;

let totalBill = shirt + pant + shoe;
let discount = totalBill * 10 / 100;
let finalBill = totalBill - discount;

console.log("Total Bill :", totalBill);
console.log("Discount :", discount);
console.log("Final Amount :", finalBill);


// Question No - 8 Age Eligibility Checker
let age = 17;

if (age >= 18) {
    console.log("Eligible for Voting");
} else {
    console.log("Not Eligible");
}


// Question No - 9 Increment Decrement Practice
let a = 10;

console.log("Initial Value :", a);

a++;
console.log("After a++ :", a);

++a;
console.log("After ++a :", a);

a--;
console.log("After a-- :", a);

--a;
console.log("After --a :", a);


// Question No - 10 Mini Employee Attendance System
let isPresent = true;
let completedTask = true;
if (isPresent && completedTask) {
    console.log("Eligible for Salary");
} else {
    console.log("Not Eligible");
}


let employeeDetails = {
    id: "STK-26-2457",
    name: "Mano",
    department: "Full Stack Developer",
    salary: 25000,
    experience: 2.
};

console.log("Employee ID :", employeeDetails.id);
console.log("Employee Name :", employeeDetails.name);
console.log("Department :", employeeDetails.department);
console.log("Salary :", employeeDetails.salary);
console.log("Experience :", employeeDetails.experience + " Years");

let empBonus = employeeDetails.salary * 10 / 100;
let empFinalSalary = employeeDetails.salary + empBonus;
console.log("Bonus :", empBonus);
console.log("Final Salary :", empFinalSalary);

let performanceStatus =
    employeeDetails.experience >= 2 ? "Good" : "Average";
console.log("Performance Status :", performanceStatus);