// Question 1
var num1 = 20
var num2 = 10
var add = num1 + num2

console.log(num1, "+", num2, "=", add)
document.write(num1, " + ", num2, " = ", add)


// Question 2
var sub = num1 - num2
console.log(num1, "-", num2, "=", sub)
document.write("<br>", num1, " - ", num2, " = ", sub)

var mul = num1 * num2
console.log(num1, "*", num2, "=", mul)
document.write("<br>", num1, " * ", num2, " = ", mul)

var div = num1 / num2
console.log(num1, "/", num2, "=", div)
document.write("<br>", num1, " / ", num2, " = ", div)

var mod = num1 % num2
console.log(num1, "%", num2, "=", mod)
document.write("<br>", num1, " % ", num2, " = ", mod)


// Question 3
var myNum = 15

console.log(myNum)
document.write("<br><br>Value = ", myNum)

myNum = myNum + 1
console.log(myNum)
document.write("<br>After increment = ", myNum)

myNum = myNum + 7
console.log(myNum)
document.write("<br>After adding 7 = ", myNum)

myNum = myNum - 1
console.log(myNum)
document.write("<br>After decrement = ", myNum)

var remainder = myNum % 3
console.log(remainder)
document.write("<br>Remainder = ", remainder)


// Question 4
var ticketPrice = 600
var tickets = 5
var totalTicket = ticketPrice * tickets

console.log("Ticket price =", ticketPrice)
console.log("Total tickets =", tickets)
console.log("Total price =", totalTicket)

document.write("<br><br>5 tickets price = ", totalTicket, " PKR")


// Question 5
var tableNum = 7

console.log(tableNum, "*", 1, "=", tableNum * 1)
console.log(tableNum, "*", 2, "=", tableNum * 2)
console.log(tableNum, "*", 3, "=", tableNum * 3)
console.log(tableNum, "*", 4, "=", tableNum * 4)
console.log(tableNum, "*", 5, "=", tableNum * 5)
console.log(tableNum, "*", 6, "=", tableNum * 6)
console.log(tableNum, "*", 7, "=", tableNum * 7)
console.log(tableNum, "*", 8, "=", tableNum * 8)
console.log(tableNum, "*", 9, "=", tableNum * 9)
console.log(tableNum, "*", 10, "=", tableNum * 10)


// Question 6
var celsius = 30
var fahrenheit = (celsius * 9 / 5) + 32

console.log("Celsius =", celsius)
console.log("Fahrenheit =", fahrenheit)

var f = 86
var c = (f - 32) * 5 / 9

console.log("Fahrenheit =", f)
console.log("Celsius =", c)


// Question 7
var item1 = 1200
var item2 = 800
var item3 = 500

var quantity1 = 2
var quantity2 = 1
var quantity3 = 3

var shipping = 200

var total1 = item1 * quantity1
var total2 = item2 * quantity2
var total3 = item3 * quantity3

var totalCost = total1 + total2 + total3 + shipping

console.log("Total cost =", totalCost)
document.write("<br><br>Total shopping cost = ", totalCost, " PKR")


// Question 8
var totalMarks = 500
var obtainedMarks = 425
var percentage = (obtainedMarks / totalMarks) * 100

console.log("Percentage =", percentage)
document.write("<br>Percentage = ", percentage, "%")


// Question 9
var dollar = 10
var riyal = 25

var dollarRate = 104.80
var riyalRate = 28

var totalPKR = (dollar * dollarRate) + (riyal * riyalRate)

console.log("Total PKR =", totalPKR)
document.write("<br>Total amount in PKR = ", totalPKR)


// Question 10
var number = 5

number = (number + 5) * 10 / 2

console.log(number)
document.write("<br>Final number = ", number)


// Question 11
var currentYear = 2026
var birthYear = 2005

var age1 = currentYear - birthYear
var age2 = age1 - 1

console.log("Age =", age1)
console.log("Possible age =", age2)

document.write("<br>Age = ", age1, " or ", age2)


// Question 12
var radius = 5
var pi = 3.142

var circumference = 2 * pi * radius
var area = pi * radius * radius

console.log("Circumference =", circumference)
console.log("Area =", area)

document.write("<br>Circumference = ", circumference)
document.write("<br>Area = ", area)


// Question 13
var currentAge = 20
var maxAge = 80
var snacksPerDay = 2

var remainingYears = maxAge - currentAge
var totalSnacks = remainingYears * 365 * snacksPerDay

console.log("You will need", totalSnacks, "snacks")

document.write("<br>You will need ", totalSnacks, " snacks for the rest of your life.")