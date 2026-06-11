// 10-06-2026 Java Script Task's - 5



// Question No - 1 Student Management System
let students = [
    { id: 1, name: "Mano", department: "EEE", mark: 75},
    { id: 2, name: "Parthiban", department: "MECH", mark: 86},
    { id: 3, name: "Marry", department: "CSC", mark: 90},
    { id: 4, name: "Akilan", department: "CIVIL", mark: 87},
    { id: 5, name: "Priya", department: "CSE", mark: 95}
];

let totalMarks = 0;
function printStudent(student) {
    console.log(student);
    document.writeln(student.name + " - " + student.mark + "<br>");
}
document.writeln("<h2>Question No - 1 Student Management System</h2>");
for (let student of students) {
    printStudent(student);

    totalMarks += student.mark;
    if (student.mark >= 90) {
        console.log(student.name + " Grade : A");
    }
    else if (student.mark >= 75) {
        console.log(student.name + " Grade : B");
    }
    else if (student.mark >= 50) {
        console.log(student.name + " Grade : C");
    }
    else {
        console.log(student.name + " Grade : Fail");
    }
    if (student.mark > 80) {
        console.log("Above 80 : " + student.name);
    }
}
console.log("Total Marks :", totalMarks);
document.writeln("Total Marks : " + totalMarks + "<br><br>");



// Question No - 2 Employee Payroll System
let employees = [
    { id: 1, name: "Sam", salary: 45000, department: "HR"},
    { id: 2, name: "Samantha", salary: 40000, department: "IT"},
    { id: 3, name: "Ramya", salary: 30000, department: "FINANCE"}
];
let totalSalaryExpense = 0;
function payrollReport(callback) {
    callback();
}

document.writeln("<h2>Question No - 2 Employee Payroll System</h2>");
for (let employee of employees) {
    console.log(employee.name);
    document.writeln(employee.name + "<br>");

    totalSalaryExpense += employee.salary;
    if (employee.salary > 30000) {
        console.log("Above 30000 : " + employee.name);
    }
    switch (employee.department) {
        case "HR":
            console.log("Human Resource");
            break;

        case "IT":
            console.log("Information Technology");
            break;

        case "FINANCE":
            console.log("Finance Department");
            break;
    }
}
console.log("Total Salary Expense :", totalSalaryExpense);
payrollReport(function () {
    console.log("Payroll Report Generated");
});
document.writeln("<br>");



// Question No - 3 Online Food Order System
let foods = [
    { id: 1, foodName: "Pizza", price: 250, category: "FastFood"},
    { id: 2, foodName: "Burger", price: 180, category: "FastFood"},
    { id: 3, foodName: "Biryani", price: 300, category: "MainCourse"}
];
let totalMenuValue = 0;
function orderConfirmation(callback) {
    callback();
}

document.writeln("<h2>Question No - 3 Online Food Order System</h2>");
for (let food of foods) {
    console.log(food.foodName);
    document.writeln(food.foodName + "<br>");

    totalMenuValue += food.price;
    if (food.price > 200) {
        console.log("Above 200 : " + food.foodName);
    }
    switch (food.category) {
        case "FastFood":
            console.log("Quick Snacks");
            break;

        case "MainCourse":
            console.log("Main Food");
            break;
    }
}
console.log("Total Menu Value :", totalMenuValue);
orderConfirmation(function () {
    console.log("Order Confirmed");
});
document.writeln("<br>");



// Question No - 4 Movie Ticket Booking System
let movies = [
    { movieName: "Oppenheimer", ticketPrice: 200, availableSeats: 50, language: "Tamil"},
    { movieName: "Interstellar", ticketPrice: 180, availableSeats: 30, language: "English"},
    { movieName: "Inception", ticketPrice: 220, availableSeats: 20, language: "Tamil"}
];
let totalSeats = 0;
function bookingConfirmation(callback) {
    callback();
}

document.writeln("<h2>Question No - 4 Movie Ticket Booking System</h2>");
for (let movie of movies) {
    console.log(movie.movieName);
    document.writeln(movie.movieName + "<br>");

    totalSeats += movie.availableSeats;
    if (movie.availableSeats > 0) {
        console.log("Booking Possible");
    }
    switch (movie.language) {
        case "Tamil":
            console.log("Tamil Movie");
            break;

        case "English":
            console.log("English Movie");
            break;
    }
}
console.log("Total Available Seats :", totalSeats);
bookingConfirmation(function () {
    console.log("Ticket Booked Successfully");
});
document.writeln("<br>");



// Question No - 5 Hospital Patient Records
let patients = [
    { patientId: 1, patientName: "Kumar", age: 65, disease: "Heart" },
    { patientId: 2, patientName: "Abi", age: 50, disease: "Brain" },
    { patientId: 3, patientName: "Ravi", age: 45, disease: "Skin" },
    { patientId: 4, patientName: "Mani", age: 70, disease: "Eye" }
];
let patientCount = 0;
function appointmentConfirmation(callback) {
    callback();
}

document.writeln("<h2>Question No - 5 Hospital Patient Records</h2>");
for (let patient of patients) {
    console.log(patient.patientName);
    document.writeln(patient.patientName + "<br>");
    patientCount++;
    if (patient.age > 60) {
        console.log("Senior Patient : " + patient.patientName);
    }
    switch (patient.disease) {
        case "Heart":
            console.log("Cardiology");
            break;
        case "Skin":
            console.log("Dermatology");
            break;
        case "Eye":
            console.log("Ophthalmology");
            break;
    }
}
console.log("Total Patients :", patientCount);
appointmentConfirmation(function () {
    console.log("Appointment Confirmed");
});


// Question No - 6 Library Management System
let books = [
    { bookId: 1, bookName: "JavaScript", author: "Naveen", price: 650, category: "Programming" },
    { bookId: 2, bookName: "HTML", author: "Kiran", price: 450, category: "Web" },
    { bookId: 3, bookName: "CSS", author: "Rahul", price: 550, category: "Design" }
];
let totalBookValue = 0;
function issueBook(bookName) {
    console.log(bookName + " Issued Successfully");
}
document.writeln("<h2>Question No - 6 Library Management System</h2>");
for (let book of books) {
    console.log(book.bookName);
    document.writeln(book.bookName + "<br>");

    totalBookValue += book.price;
    if (book.price > 500) {
        console.log("Above 500 : " + book.bookName);
    }

    switch (book.category) {
        case "Programming":
            console.log("Programming Book");
            break;
        case "Web":
            console.log("Web Development Book");
            break;
        case "Design":
            console.log("Design Book");
            break;
    }
}
console.log("Total Book Value :", totalBookValue);
issueBook("JavaScript");
document.writeln("<br>");



// Question No - 7 E-Commerce Product Dashboard
let products = [
    { productId: 1, productName: "Laptop", price: 50000, stock: 5 },
    { productId: 2, productName: "Mobile", price: 25000, stock: 15 },
    { productId: 3, productName: "Mouse", price: 500, stock: 8 }
];

let inventoryValue = 0;
function productReport(callback) {
    callback();
}
document.writeln("<h2>Question No - 7 E-Commerce Product Dashboard</h2>");
for (let product of products) {
    console.log(product.productName);
    document.writeln(product.productName + "<br>");

    inventoryValue += product.price * product.stock;
    if (product.stock < 10) {
        console.log(product.productName + " : Low Stock");
    }
    else {
        console.log(product.productName + " : In Stock");
    }
}
console.log("Inventory Value :", inventoryValue);
productReport(function () {
    console.log("Product Report Generated");
});
document.writeln("<br>");



// Question No - 8 College Admission System
let applicants = [
    { name: "Arun", age: 19, percentage: 75, department: "CSE" },
    { name: "Vijay", age: 17, percentage: 80, department: "ECE" },
    { name: "Kumar", age: 20, percentage: 55, department: "IT" }
];
let eligibleCount = 0;
function admissionResult(callback) {
    callback();
}

document.writeln("<h2>Question No - 8 College Admission System</h2>");
for (let applicant of applicants) {
    console.log(applicant.name);
    document.writeln(applicant.name + "<br>");
    if (applicant.age >= 18 && applicant.percentage >= 60) {
        eligibleCount++;
        console.log(applicant.name + " : Eligible");
    }
    else {
        console.log(applicant.name + " : Not Eligible");
    }
    switch (applicant.department) {
        case "CSE":
            console.log("Computer Science");
            break;
        case "ECE":
            console.log("Electronics");
            break;
        case "IT":
            console.log("Information Technology");
            break;
    }
}
console.log("Eligible Students :", eligibleCount);
admissionResult(function () {
    console.log("Admission Result Generated");
});
document.writeln("<br>");



// Question No - 9 Bus Reservation System
let passengers = [
    { passengerId: 1, name: "Ravi", seatNumber: 1, ticketPrice: 500 },
    { passengerId: 2, name: "Mani", seatNumber: 2, ticketPrice: 500 },
    { passengerId: 3, name: "Karthik", seatNumber: 3, ticketPrice: 500 }
];
let totalCollection = 0;
let busType = "AC";
function ticketConfirmation(callback) {
    callback();
}
document.writeln("<h2>Question No - 9 Bus Reservation System</h2>");
for (let passenger of passengers) {
    console.log(passenger.name);
    document.writeln(passenger.name + "<br>");

    totalCollection += passenger.ticketPrice;
    console.log("Seat Occupied : " + passenger.seatNumber);
}
switch (busType) {
    case "AC":
        console.log("Air Condition Bus");
        break;
    case "NONAC":
        console.log("Non AC Bus");
        break;
}
console.log("Total Collection :", totalCollection);
ticketConfirmation(function () {
    console.log("Ticket Confirmed");
});
document.writeln("<br>");



// Question No - 10 Mobile Store Management
let mobiles = [
    { brand: "Samsung", model: "S24", price: 80000, stock: 5 },
    { brand: "Redmi", model: "Note 13", price: 18000, stock: 10 },
    { brand: "Realme", model: "Narzo", price: 22000, stock: 8 }
];
let totalStockValue = 0;
function salesReport(callback) {
    callback();
}

document.writeln("<h2>Question No - 10 Mobile Store Management</h2>");
for (let mobile of mobiles) {
    console.log(mobile.brand + " " + mobile.model);
    document.writeln(mobile.brand + " " + mobile.model + "<br>");

    totalStockValue += mobile.price * mobile.stock;
    if (mobile.price > 20000) {
        console.log("Above 20000 : " + mobile.model);
    }
    switch (mobile.brand) {

        case "Samsung":
            console.log("Premium Brand");
            break;

        case "Redmi":
            console.log("Budget Brand");
            break;

        case "Realme":
            console.log("Mid Range Brand");
            break;
    }
}
console.log("Total Stock Value :", totalStockValue);
salesReport(function () {
    console.log("Sales Report Generated");
});