// 16-06-2026 Java Script Task's - 8



// ==========================================
// Question No - 1 Employee Salary Management
// ==========================================

let employees = [
    { id: 1, name: "Jeeva", salary: 80000 },
    { id: 2, name: "Mano", salary: 75000 },
    { id: 3, name: "Parthi", salary: 42000 }
];

let highSalaryEmployees = employees.filter(
    employee => employee.salary > 40000
);
console.log("Employees Salary Above 40000");
console.log(highSalaryEmployees);

let firstEmployee = employees.find(
    employee => employee.salary > 60000
);
console.log("First Employee Salary Above 60000");
console.log(firstEmployee);

let totalSalaryExpense = employees.reduce(
    (total, employee) => total + employee.salary,
    0
);
console.log("Total Salary Expense:", totalSalaryExpense);

let employeeNames = employees.map(
    employee => employee.name
);
console.log("Employee Names");
console.log(employeeNames);


// Question No - 2 College Admission Form
function checkAdmission(name, age, percentage) {
    let status;
    if (age >= 18 && percentage >= 60) {
        status = "Admission Approved";
    } else {
        status = "Admission Rejected";
    }
    return status;
}

let admissionStatus = checkAdmission(
    "John",
    19,
    75
);
console.log(admissionStatus);


// Question No - 3 E-Commerce Cart
let cart = [
    { product: "Bed", price: 15000, qty: 1},
    { product: "Pillow", price: 2000, qty: 2},
    { product: "Blanket", price: 1500, qty: 1}
];

let totalBill = cart.reduce(
    (total, item) => total + (item.price * item.qty),
    0
);

console.log("Total Bill:", totalBill);

let expensiveProduct = cart.reduce(
    (highest, item) =>
        item.price > highest.price ? item : highest
);

console.log("Most Expensive Product");
console.log(expensiveProduct);

console.log("Product Names");
cart.forEach(item => {
    console.log(item.product);
});


// Question No - 4 Traffic Fine System
let signal = "red";
let fine = 0;

switch (signal) {
    case "red":
        console.log("Stop Vehicle");
        fine = 1000;
        break;
    case "yellow":
        console.log("Slow Down");
        fine = 500;
        break;

    case "green":
        console.log("Go");
        fine = 0;
        break;

    default:
        console.log("Invalid Signal");
}
console.log("Fine Amount:", fine);


// Question No - 5 Student Result Processing
let students = [
    { name: "A", mark: 95 },
    { name: "B", mark: 45 },
    { name: "C", mark: 80 },
    { name: "D", mark: 30 }
];

let passedStudents = students.filter(
    student => student.mark >= 35
);

console.log("Passed Students");
console.log(passedStudents);

let failedStudents = students.filter(
    student => student.mark < 35
);
console.log("Failed Students");
console.log(failedStudents);

let grades = students.map(student => {
    if (student.mark >= 90) {
        return `${student.name} - A Grade`;
    }
    else if (student.mark >= 70) {
        return `${student.name} - B Grade`;
    }
    else if (student.mark >= 50) {
        return `${student.name} - C Grade`;
    }
    else {
        return `${student.name} - Fail`;
    }

});
console.log("Grade List");
console.log(grades);


// Question No - 6 Online Food Delivery
function placeOrder(customerName, ...items) {
    console.log("Customer Name:", customerName);
    console.log("Ordered Items:");
    items.forEach(item => console.log(item));
    console.log("Total Items:", items.length);
}
placeOrder(
    "Parthi",
    "Briyani",
    "Chicken 65",
    "Jigarthanda"
);


// Question No - 7 Bank Account System
let balance = 10000;
function deposit(amount) {
    balance += amount;
    return balance;
}

function withdraw(amount) {
    balance -= amount;
    return balance;
}

function checkBalance() {
    return balance;
}
console.log("After Deposit:", deposit(80000));
console.log("After Withdraw:", withdraw(25000));
console.log("Current Balance:", checkBalance());


// Question No - 8 Movie Ticket Booking
let bookedSeats = [];
function bookSeat(seatNumber) {
    if (!bookedSeats.includes(seatNumber)) {
        bookedSeats.push(seatNumber);
        console.log(
            `Seat ${seatNumber} Booked Successfully`
        );
    } 
    else {
        console.log(
            `Seat ${seatNumber} Already Booked`
        );
    }
}
bookSeat("A1");
bookSeat("A2");
bookSeat("A1");
console.log("Booked Seats");
console.log(bookedSeats);


// Question No - 9 User Login Validation
let username = "mano044";
let password = "gojo123";
let email = "sammano@gmail.com";

if (
    !username.includes(" ") &&
    password.length >= 8 &&
    email.includes("@")
) 
{
    console.log("Login Validation Success");
} else {
    console.log("Login Validation Failed");
}


// Question No - 10 Product API Dashboard
fetch("https://fakestoreapi.com/products")

.then(response => response.json())

.then(products => {

    console.log("Product Titles");

    products.forEach(product => {
        console.log(product.title);
    });

    let costlyProducts = products.filter(
        product => product.price > 1000
    );

    console.log(
        "Products Above 1000"
    );

    console.log(costlyProducts);

   console.log(
        "Total Products:",
        products.length
    );

})

.catch(error => {
    console.log(error);
});


// Question No - 11 Birthday Day Finder
let dob = new Date("2001-04-04");

let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

console.log("Day:", dob.getDate());

console.log(
    "Month:",
    dob.getMonth() + 1
);

console.log(
    "Year:",
    dob.getFullYear()
);

console.log(
    "Weekday:",
    weekdays[dob.getDay()]
);


// Question No - 12 Netflix Subscription System
let plan = "Premium";

let benefit =
    plan === "Mobile"
        ? "Watch On Mobile"
        : plan === "Basic"
        ? "HD Streaming"
        : plan === "Standard"
        ? "Full HD Streaming"
        : "4K + Multiple Devices";

console.log("Plan:", plan);
console.log("Benefit:", benefit);


// Question No - 13 Hospital Patient Management
let patients = [
    {
        id: 1,
        name: "Jeeva",
        critical: false
    },

    {
        id: 2,
        name: "Mano",
        critical: true
    },

    {
        id: 3,
        name: "John",
        critical: true
    }

];

let criticalPatients = patients.filter(
    patient => patient.critical
);

console.log("Critical Patients");
console.log(criticalPatients);

let patientById = patients.find(
    patient => patient.id === 2
);

console.log("Patient By ID");
console.log(patientById);
console.log(
    "Total Patients:",
    patients.length
);


// Question No - 14 Inventory Management System
let inventory1 = [
    {
        product: "Mobile",
        price: 150000,
        Model: "iPhone 14 Pro Max"

    }
];

let inventory2 = [
    {
        product: "Laptop",
        price: 80000,
        Model: "Dell XPS 15"
    }
];

let mergedInventory = [
    ...inventory1,
    ...inventory2
];
console.log("Merged Inventory");
console.log(mergedInventory);

let {
    product,
    price
} = mergedInventory[0];
console.log("Product:", product);
console.log("Price:", price);

let updatedInventory = [
    ...mergedInventory,
    {
        product: "Headphone",
        price: 2000
    }
];
console.log("Updated Inventory");
console.log(updatedInventory);


// Question No - 15 WhatsApp Group Management
let groupMembers = [
    "Jeeva",
    "Mano",
    "Parthi",
    "Akilan"
];

groupMembers.push("Kesavan");

groupMembers.unshift("Admin");

groupMembers.pop();

groupMembers.shift();

groupMembers.splice(
    1,
    0,
    "Mani"
);
console.log(
    "Final Group Members"
);
console.log(groupMembers);