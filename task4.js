// 059-06-2026 Java Script Task's - 4


// Question No - 1 Age Category Finder
let age = Number(prompt("Enter Age :"));
console.log("Age :", age);
if (age <= 12) {
    console.log("Category : Child");
}
else if (age <= 19) {
    console.log("Category : Teenager");
}
else if (age <= 59) {
    console.log("Category : Adult");
}
else {
    console.log("Category : Senior Citizen");
}



// Question No - 2 Salary Hike Calculator
let salary = Number(prompt("Enter Salary : "));
let hike = 0;
if (salary < 20000) {
    hike = salary * 20 / 100;
}
else if (salary <= 50000) {
    hike = salary * 10 / 100;
}
else {
    hike = salary * 5 / 100;
}
console.log("Old Salary :", salary);
console.log("Hike :", hike);
console.log("New Salary :", salary + hike);



// Question No - 3 Electricity Department
let units = Number(prompt("Enter Units : "));
let bill = 0;
if (units <= 100) {
    bill = units * 5;
}
else if (units <= 200) {
    bill = units * 7;
}
else {
    bill = units * 10;
}
console.log("Units :", units);
console.log("Total Bill :", bill);


// Question No - 4 Simple ATM
let balance = 10000;
let withdraw = Number(prompt("Enter Withdraw Amount : "));
console.log("Available Balance :", balance);
console.log("Withdraw Amount :", withdraw);
if (withdraw <= balance) {
    balance -= withdraw;
    console.log("Withdrawal Successful");
    console.log("Remaining Balance :", balance);
}
else {
    console.log("Insufficient Funds");
}


// Question No - 5 Login Validation
let username = prompt("Enter Username : ");
let password = prompt("Enter Password : ");
if (username === "admin" && password === "12345") {
    console.log("Login Success");
}
else {
    console.log("Login Failed");
}


// Question No - 6 Mobile Recharge Offer
let recharge = Number(prompt("Enter Recharge Amount : "));
console.log("Recharge Amount :", recharge);
if (recharge >= 499) {
    console.log("Offer : Netflix Offer");
}
else if (recharge >= 299) {
    console.log("Offer : 2GB Extra Data");
}
else {
    console.log("Offer : No Offer");
}


// Question No - 7 Traffic Signal System
let signal = prompt("Enter Signal Color : ");
switch (signal.toLowerCase()) {

    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Signal");
}


// Question No - 8 Employee Attendance
let workingDays = Number(prompt("Enter Working Days : "));
let presentDays = Number(prompt("Enter Present Days : "));
let attendance = (presentDays / workingDays) * 100;
console.log("Attendance Percentage :", attendance + "%");
if (attendance >= 75) {
    console.log("Eligible");
}
else {
    console.log("Not Eligible");
}


// Question No - 9 Bus Ticket Booking
let ticketPrice = 500;
let tickets = Number(prompt("Enter Number Of Tickets : "));
let total = ticketPrice * tickets;
let gst = total * 5 / 100;
let finalAmount = total + gst;
console.log("Ticket Price :", ticketPrice);
console.log("Number Of Tickets :", tickets);
console.log("Total Amount :", total);
console.log("GST :", gst);
console.log("Final Amount :", finalAmount);


// Question No - 10 Restaurant Bill
let foodCost = Number(prompt("Enter Food Cost : "));
let discount = 0;

if (foodCost > 2000) {
    discount = foodCost * 10 / 100;
}

let finalBill = foodCost - discount;
console.log("Food Cost :", foodCost);
console.log("Discount :", discount);
console.log("Final Bill :", finalBill);


// Question No - 11 Police Recruitment
let policeAge = Number(prompt("Enter Age : "));
let height = Number(prompt("Enter Height : "));
let weight = Number(prompt("Enter Weight : "));
if (policeAge >= 18) {
    if (height >= 160) {
        if (weight >= 55) {
            console.log("Selected");
        } else {
            console.log("Rejected : Weight Less Than 55");
        }
    } else {
        console.log("Rejected : Height Less Than 160");
    }
} else {
    console.log("Rejected : Age Less Than 18");
}


// Question No - 12 Student Result
let m1 = Number(prompt("Enter Subject 1 Mark : "));
let m2 = Number(prompt("Enter Subject 2 Mark : "));
let m3 = Number(prompt("Enter Subject 3 Mark : "));
let m4 = Number(prompt("Enter Subject 4 Mark : "));
let m5 = Number(prompt("Enter Subject 5 Mark : "));
let studentTotal = m1 + m2 + m3 + m4 + m5;
let percentage = studentTotal / 5;
console.log("Total :", studentTotal);
console.log("Percentage :", percentage);

// Question No - 13 Employee Shift Finder
let time = Number(prompt("Enter Time (0-23) : "));
if (time >= 6 && time < 14) {
    console.log("Morning Shift");
}
else if (time >= 14 && time < 22) {
    console.log("Afternoon Shift");
}
else {
    console.log("Night Shift");
}


// Question No - 14 Loan Eligibility
let userAge = Number(prompt("Enter Age : "));
let userSalary = Number(prompt("Enter Salary : "));
let experience = Number(prompt("Enter Experience : "));
if (
    userAge >= 21 &&
    userSalary >= 25000 &&
    experience >= 2
) {
    console.log("Eligible For Loan");
}
else {
    console.log("Not Eligible For Loan");
}


// Question No - 15 Cab Fare Calculator
let distance = Number(prompt("Enter Distance : "));
let fare = 0;
if (distance <= 5) {
    fare = distance * 20;
}
else {
    fare = (5 * 20) + ((distance - 5) * 15);
}
console.log("Distance :", distance);
console.log("Total Fare :", fare);


// Question No - 16 Multiplication Table Generator
let number = Number(prompt("Enter Number : "));
for (let i = 1; i <= 10; i++) {
    console.log(
        number + " x " + i + " = " + (number * i)
    );
}


// Question No - 17 Password Checker
let passwordLength = Number(
    prompt("Enter Password Length : ")
);

if (passwordLength < 6) {
    console.log("Weak Password");
}
else if (passwordLength <= 10) {
    console.log("Medium Password");
}
else {
    console.log("Strong Password");
}


// Question No - 18 Company Bonus System
let empSalary = Number(prompt("Enter Salary : "));
let exp = Number(prompt("Enter Experience : "));
let companyBonus = 0;
if (exp <= 2) {
    companyBonus = empSalary * 5 / 100;
}
else if (exp <= 5) {
    companyBonus = empSalary * 10 / 100;
}
else {
    companyBonus = empSalary * 20 / 100;
}
console.log("Salary :", empSalary);
console.log("Bonus :", companyBonus);
console.log("Final Salary :", empSalary + companyBonus);


// Question No - 19 Countdown Timer
let count = 10;
while (count >= 1) {
    console.log(count);
    count--;
}
console.log("Happy New Year");


// Question No - 20 Interview Selection System
let degreeCompleted = prompt(
    "Degree Completed (yes/no) : "
);

let communication = prompt(
    "Communication (good/bad) : "
);

let technicalScore = Number(
    prompt("Technical Score : ")
);

if (degreeCompleted.toLowerCase() === "yes") {
    if (communication.toLowerCase() === "good") {
        if (technicalScore >= 70) {
            console.log("Selected");
        } 
        else {
            console.log(
                "Rejected : Technical Score Less Than 70"
            );
        }
    } 
    else {
        console.log(
            "Rejected : Communication Not Good"
        );
    }
} 
else {
    console.log(
        "Rejected : Degree Not Completed"
    );
}