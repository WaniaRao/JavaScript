// Q1
var price1 = 100;
var price2 = 200;
var price3 = 300;

var total = price1 + price2 + price3;
var discount = total * 10 / 100;
var finalPrice = total - discount;

alert("Total = " + total +
      "\nDiscount = " + discount +
      "\nFinal Price = " + finalPrice);


// Q2
var a = 5;
var b = 2;

var result = --a - --b + ++b + b--;

alert("Result = " + result);


// Q3
var name = prompt("Enter your name:");
alert("Welcome " + name);


// Q4
var celsius = prompt("Enter temperature in Celsius:");
var fahrenheit = (celsius * 9 / 5) + 32;

alert("Fahrenheit = " + fahrenheit);

// Q5
var num = prompt("Enter a number:");

if (num == "") {
    num = 5;
}

for (var i = 1; i <= 10; i++) {
    document.write(num + " x " + i + " = " + (num * i) + "<br>");
}


// Q6
var subject1 = prompt("Enter first subject:");
var subject2 = prompt("Enter second subject:");
var subject3 = prompt("Enter third subject:");

var marks1 = +prompt("Enter marks in " + subject1 + ":");
var marks2 = +prompt("Enter marks in " + subject2 + ":");
var marks3 = +prompt("Enter marks in " + subject3 + ":");

var total = marks1 + marks2 + marks3;
var percentage = total / 300 * 100;

document.write("<br>Total Marks = " + total);
document.write("<br>Percentage = " + percentage + "%");


// Q7
var n1 = +prompt("Enter first number:");
var n2 = +prompt("Enter second number:");
var n3 = +prompt("Enter third number:");

var average = (n1 + n2 + n3) / 3;

alert("Average = " + average);