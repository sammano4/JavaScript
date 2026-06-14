// 12-06-2026 Java Script Task's - 6



// Question No - 1 Employee Bonus Calculator
let employeeName = "Rahul";
let salary = 30000;
let experience = 5;
let bonus = 0;
if (experience >= 5) {
    bonus = salary * 0.20;
} 
else if (experience >= 2) {
    bonus = salary * 0.10;
} 
else {
    bonus = salary * 0.05;
}
let finalSalary = salary + bonus;
console.log("Employee Name:", employeeName);
console.log("Salary:", salary);
console.log("Bonus:", bonus);
console.log("Final Salary:", finalSalary);


// Question No - 2 College Admission System
let studentName = "Kavin";
let age = 18;
let percentage = 75;
if (age >= 17) {
    if (percentage >= 60) {
        console.log("Admission Approved");
    } 
    else {
        console.log("Admission Rejected");
    }
} else {
    console.log("Admission Rejected");
}


// Question No - 3 Food Delivery Menu
let menu = 1;
switch (menu) {
    case 1:
        console.log("Order Confirmed : Pizza");
        break;
    case 2:
        console.log("Order Confirmed : Burger");
        break;
    case 3:
        console.log("Order Confirmed : Shawarma");
        break;
    case 4:
        console.log("Order Confirmed : Fried Rice");
        break;
    default:
        console.log("Invalid Selection");
}


// Question No - 4 Attendance Tracker
let students = [
    "Rahul",
    "Kavin",
    "John",
    "Ajay",
    "Vijay",
    "Arun",
    "Siva",
    "Hari",
    "Kumar",
    "Manoj"
];
for (let student of students) {
    console.log(student);
}
console.log("Total Students:", students.length);


// Question No - 5 E-Commerce Cart
let cart = [
    { product: "Mobile", price: 15000 },
    { product: "Headset", price: 2000 },
    { product: "Charger", price: 1000 }
];

let totalCartValue = 0;
let expensiveProduct = cart[0];
for (let item of cart) {
    console.log(item.product);

    totalCartValue += item.price;
    if (item.price > expensiveProduct.price) {
        expensiveProduct = item;
    }
}
console.log("Total Cart Value:", totalCartValue);
console.log("Most Expensive Product:", expensiveProduct.product);


// Question No - 6 Bank Account Management
let balance = 10000;
function deposit(amount) {
    balance += amount;
    console.log("Deposited:", amount);
}
function withdraw(amount) {
    balance -= amount;
    console.log("Withdrawn:", amount);
}
function checkBalance() {
    console.log("Current Balance:", balance);
}
deposit(5000);
withdraw(2000);
checkBalance();


// Question No - 7 Movie Ticket Booking
let customerAge = 65;
if (customerAge < 5) {
    console.log("Free Ticket");
}
else if (customerAge <= 18) {
    console.log("Ticket Price : ₹100");
}
else if (customerAge <= 60) {
    console.log("Ticket Price : ₹200");
}
else {
    console.log("Ticket Price : ₹120");
}


// Question No - 8 Online Shopping Discount
let purchaseAmount = 6000;
let discount = 0;
if (purchaseAmount > 5000) {
    discount = purchaseAmount * 0.20;
}
else if (purchaseAmount > 3000) {
    discount = purchaseAmount * 0.10;
}
else if (purchaseAmount > 1000) {
    discount = purchaseAmount * 0.05;
}
let finalAmount = purchaseAmount - discount;
console.log("Original Amount:", purchaseAmount);
console.log("Discount:", discount);
console.log("Final Amount:", finalAmount);


// Question No - 9 Food Inventory System
let inventory = ["Rice", "Oil", "Sugar", "Milk", "Egg"];

inventory.push("Bread");
inventory.push("Butter");
inventory.shift();
inventory.pop();

console.log("Milk Exists:", inventory.includes("Milk"));
console.log("Final Inventory:");
console.log(inventory);


// Question No - 10 Hospital Patient Management
let patient = {
    patientName: "Ravi",
    age: 35,
    disease: "Fever",
    doctor: "Dr. Kumar"
};
for (let key in patient) {
    console.log(key + " : " + patient[key]);
}
let { patientName, age: patientAge, disease, doctor } = patient;
console.log(patientName);
console.log(patientAge);
console.log(disease);
console.log(doctor);


// Question No - 11 Amazon Order Tracker
function sendSMS() {
    console.log("SMS Sent To Customer");
}
function placeOrder(callback) {
    console.log("Order Placed Successfully");
    callback();
}
placeOrder(sendSMS);


// Question No - 12 Cashback Offer Generator
function* cashbackOffers() {
    yield "10% Cashback";
    yield "20% Cashback";
    yield "Free Delivery";
    yield "Buy 1 Get 1";
}

let offer = cashbackOffers();
console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);


// Question No - 13 Employee Database
let employees = [
    { id: 1, name: "Rahul", salary: 25000 },
    { id: 2, name: "Kavin", salary: 30000 },
    { id: 3, name: "John", salary: 40000 }
];

let totalSalary = 0;
let highestSalaryEmployee = employees[0];
for (let emp of employees) {
    console.log(emp.name);

    totalSalary += emp.salary;
    if (emp.salary > highestSalaryEmployee.salary) {
        highestSalaryEmployee = emp;
    }
}
console.log("Total Salary Expense:", totalSalary);
console.log("Highest Salary Employee:", highestSalaryEmployee.name);


// Question No - 14 Railway Reservation System
let availableSeats = 50;
function bookSeat(seats) {
    if (seats <= availableSeats) {
        availableSeats -= seats;
        console.log("Booking Successful");
        console.log("Available Seats:", availableSeats);
    }
    else {
        console.log("Seats Not Available");
    }
}
bookSeat(10);
bookSeat(5);


// Question No - 15 Mobile Store Billing System
let products = {
    Mobile: 15000,
    Laptop: 50000,
    Headphone: 2000,
    Smartwatch: 3000
};

let selectedProducts = ["Mobile", "Headphone", "Smartwatch"];
let totalAmount = 0;

for (let item of selectedProducts) {
    totalAmount += products[item];
}
let gst = totalAmount * 0.18;
let finalBill = totalAmount + gst;

console.log("Selected Products:");
console.log(selectedProducts);
console.log("Total Amount:", totalAmount);
console.log("GST 18%:", gst);
console.log("Final Bill:", finalBill);