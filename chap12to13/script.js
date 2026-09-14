// Question 1

var character = prompt("Enter a number or letter")

var code = character.charCodeAt(0)

if (code >= 65 && code <= 90) {
    alert("It is an uppercase letter")
}
else if (code >= 97 && code <= 122) {
    alert("It is a lowercase letter")
}
else if (code >= 48 && code <= 57) {
    alert("It is a number")
}
else {
    alert("Invalid input")
}


// Question 2

var num1 = Number(prompt("Enter first integer"))
var num2 = Number(prompt("Enter second integer"))

if (num1 > num2) {
    alert(num1 + " is larger")
}
else if (num2 > num1) {
    alert(num2 + " is larger")
}
else {
    alert("Both integers are equal")
}


// Question 3

var number = Number(prompt("Enter a number"))

if (number > 0) {
    alert("The number is positive")
}
else if (number < 0) {
    alert("The number is negative")
}
else {
    alert("The number is zero")
}


// Question 4

var letter = prompt("Enter a character")

if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u") {
    alert(true)
}
else {
    alert(false)
}


// Question 5

var correctPassword = "nishapumi"

var password = prompt("Enter your password")

if (password == "") {
    alert("Please enter your password")
}
else if (password == correctPassword) {
    alert("Correct! The password you entered matches the original password")
}
else {
    alert("Incorrect password")
}


// Question 6

var greeting
var hour = 13

if (hour < 18) {
    greeting = "Good day"
}
else {
    greeting = "Good evening"
}

alert(greeting)


// Question 7

var time = Number(prompt("Enter time in 24 hours format"))

if (time >= 0 && time < 1200) {
    alert("Good Morning")
}
else if (time >= 1200 && time < 1700) {
    alert("Good Afternoon")
}
else if (time >= 1700 && time < 2100) {
    alert("Good Evening")
}
else if (time >= 2100 && time <= 2359) {
    alert("Good Night")
}
else {
    alert("Invalid time")
}