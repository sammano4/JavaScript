// 15-06-2026 Java Script Task's - 7



// Question No - 1 Traffic Signal Management
let signal = "Red";
switch (signal) {
    case "Red":
        console.log("Stop");
        break;
    case "Yellow":
        console.log("Get Ready");
        break;
    case "Green":
        console.log("Go");
        break;
    default:
        console.log("Invalid Signal");
}


// Question No - 2 Employee Attendance Report
for (let i = 1; i <= 30; i++) {
    console.log(`Employee ${i} Present`);
}


// Question No - 3 ATM Cash Withdrawal
let balance = 10000;
while (balance > 0) {
    balance -= 500;
    console.log("Remaining Balance:", balance);
}


// Question No - 4 College Admission Eligibility
let age = 20;
let percentage = 75;
let entranceExamPassed = true;

if (age >= 18) {
    if (percentage >= 70) {
        if (entranceExamPassed) {
            console.log("Admission Approved");
        }
         else {
            console.log("Admission Rejected - Entrance Exam Not Passed");
        }
    }
    else {
        console.log("Admission Rejected - Percentage Below 70");
    }
} 
else {
    console.log("Admission Rejected - Age Below 18");
}


// Question No - 5 Food Delivery Status
function foodDelivery(customerName, foodItem, deliveryAddress) {
    console.log("Customer Name:", customerName);
    console.log("Food Item:", foodItem);
    console.log("Delivery Address:", deliveryAddress);
    console.log("Order Delivered Successfully");
}
foodDelivery(
    "Rahul",
    "Pizza",
    "Chennai"
);


// Question No - 6 Salary Processing System
function calculateSalary() {
    return 30000;
}
function calculateBonus(salary) {
    let bonus = salary * 0.10;
    return salary + bonus;
}

let salary = calculateSalary();
let finalSalary = calculateBonus(salary);
console.log("Salary:", salary);
console.log("Final Salary:", finalSalary);


// Question No - 7 E-commerce Discount Engine
function applyDiscount(amount, callback) {
    let discountAmount = amount - (amount * 0.20);
    callback(discountAmount);
}

function generateInvoice(finalAmount) {
    console.log("Invoice Generated");
    console.log("Final Amount:", finalAmount);
}
applyDiscount(5000, generateInvoice);


// Question No - 8 Promotional Offers
function* offers() {
    yield "10% OFF";
    yield "20% OFF";
    yield "Free Delivery";
    yield "Buy 1 Get 1";
}

let offer = offers();
console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);


// Question No - 9 Student Database Merge
let scienceStudents = ["Rahul", "Kavin"];
let commerceStudents = ["John", "Ajay"];
let allStudents = [...scienceStudents, ...commerceStudents];
console.log(allStudents);


// Question No - 10 Online Exam System
function totalMarks(studentName, ...marks) {
    let total = 0;
    for (let mark of marks) {
        total += mark;
    }
    console.log("Student:", studentName);
    console.log("Total Marks:", total);
}
totalMarks("Rahul", 80, 90, 85, 70);


// Question No - 11 Employee Profile
let employee = {
    name: "Rahul",
    department: "IT",
    salary: 30000,
    experience: 5
};

let { name, department, salary: empSalary, experience } = employee;
console.log(name);
console.log(department);
console.log(empSalary);
console.log(experience);


// Question No - 12 Product Inventory Filter
let products = [
    { name: "Mobile", price: 15000, category: "Electronics" },
    { name: "Laptop", price: 50000, category: "Electronics" },
    { name: "Book", price: 500, category: "Education" }
];

let filteredProducts = products.filter(
    product => product.price > 5000
);
console.log(filteredProducts);


// Question No - 13 Find First Premium Customer
let customers = [
    { name: "Rahul", purchase: 30000 },
    { name: "Kavin", purchase: 60000 },
    { name: "John", purchase: 70000 }
];

let premiumCustomer = customers.find(
    customer => customer.purchase > 50000
);
console.log(premiumCustomer);


// Question No - 14 Company Expense Tracker
let expenses = [10000, 20000, 15000, 5000];
let totalExpense = expenses.reduce(
    (total, expense) => total + expense,
    0
);
console.log("Total Expense:", totalExpense);


// Question No - 15 Gaming Tournament Verification
let players = [20, 22, 19, 25, 30];
let allAdults = players.every(
    age => age > 18
);
console.log("All Players Above 18:", allAdults);


// Question No - 16 Job Portal Search
let candidates = [
    { name: "Rahul", skills: ["HTML", "CSS"] },
    { name: "Kavin", skills: ["React", "JavaScript"] }
];

let reactDeveloper = candidates.some(
    candidate => candidate.skills.includes("React")
);
console.log("React Developer Available:", reactDeveloper);


// Question No - 17 Mobile Number Validator
let mobileNumber = "9876543210";
if (
    mobileNumber.length === 10 &&
    (
        mobileNumber.startsWith("6") ||
        mobileNumber.startsWith("7") ||
        mobileNumber.startsWith("8") ||
        mobileNumber.startsWith("9")
    )
) 
{  
    console.log("Valid Mobile Number");
}
else {
    console.log("Invalid Mobile Number");
}


// Question No - 18 URL Slug Generator
let courseName = "Learn JavaScript Complete Course";
let slug = courseName
    .toLowerCase()
    .split(" ")
    .join("-");
console.log(slug);


// Question No - 19 Employee Sorting Dashboard
let employees = [
    { name: "Rahul", salary: 25000 },
    { name: "Kavin", salary: 40000 },
    { name: "John", salary: 30000 }
];

let highToLow = [...employees].sort(
    (a, b) => b.salary - a.salary
);
let lowToHigh = [...employees].sort(
    (a, b) => a.salary - b.salary
);

console.log("Highest To Lowest");
console.log(highToLow);
console.log("Lowest To Highest");
console.log(lowToHigh);


// Question No - 20 Movie Booking System
let movies = [
    "Leo",
    "Jailer",
    "Vikram",
    "Master"
];
let bookingIds = movies.map(
    (movie, index) => `BOOK${index + 1} - ${movie}`
);
console.log(bookingIds);

