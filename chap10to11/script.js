// Question 1

var city = prompt("Enter your city")

if (city == "Karachi") {
    alert("Welcome to our online store")
}


// Question 2

var gender = prompt("Enter your gender")

if (gender == "male") {
    alert("Welcome Sir")
}
else if (gender == "female") {
    alert("Welcome Ma'am")
}


// Question 3

var orderStatus = prompt("Enter order status: ready, pending or delivered")

if (orderStatus == "ready") {
    alert("Your order is ready")
}
else if (orderStatus == "pending") {
    alert("Your order is still pending")
}
else if (orderStatus == "delivered") {
    alert("Your order has been delivered")
}


// Question 4

var stock = prompt("Enter available product stock")

if (stock < 1) {
    alert("This product is out of stock")
}


// Question 5

var a = 4

if (++a === 5) {
    alert("Condition for a is true")
}

var b = 82

if (b++ === 83) {
    alert("Condition for b is true")
}

var c = 12

if (c++ === 13) {
    alert("Condition 1 is true")
}

if (c === 13) {
    alert("Condition 2 is true")
}

if (++c < 14) {
    alert("Condition 3 is true")
}

if (c === 14) {
    alert("Condition 4 is true")
}

var productPrice = 2000
var deliveryCharges = 300
var totalPrice = productPrice + deliveryCharges

if (totalPrice === productPrice + deliveryCharges) {
    alert("Total price is correct")
}

if (true) {
    alert("Order confirmed")
}

if (false) {
    alert("Order cancelled")
}

if ("bag" < "box") {
    alert("bag comes before box")
}


// Question 6

var product1 = prompt("Enter price of first product")
var product2 = prompt("Enter price of second product")
var product3 = prompt("Enter price of third product")

var totalAmount = prompt("Enter total amount")

var totalBought = Number(product1) + Number(product2) + Number(product3)

var percentage = (totalBought / totalAmount) * 100

var grade

if (percentage >= 80) {
    grade = "A+"
}
else if (percentage >= 70) {
    grade = "A"
}
else if (percentage >= 60) {
    grade = "B"
}
else if (percentage >= 50) {
    grade = "C"
}
else {
    grade = "Fail"
}

document.write("Total Amount = " + totalAmount)
document.write("<br>Amount = " + totalBought)
document.write("<br>Percentage = " + percentage + "%")
document.write("<br>Grade = " + grade)


// Question 7

var secretProduct = 7

var guess = prompt("Guess the secret product number from 1 to 10")

if (guess == secretProduct) {
    alert("Bingo! Correct product number")
}
else if (Number(guess) + 1 == secretProduct) {
    alert("Close enough to the correct number")
}


// Question 8

var couponNumber = prompt("Enter coupon number")

if (couponNumber % 3 == 0) {
    alert("Coupon is valid")
}


// Question 9

var orderNumber = prompt("Enter your order number")

if (orderNumber % 2 == 0) {
    alert("Your order number is even")
}
else {
    alert("Your order number is odd")
}


// Question 10

var discount = prompt("Enter shopping amount")

if (discount > 10000) {
    alert("You will get a high discount")
}
else if (discount > 5000) {
    alert("You will get a normal discount")
}
else if (discount > 2000) {
    alert("You will get a small discount")
}
else {
    alert("No discount available")
}


// Question 11

var price1 = Number(prompt("Enter first product price"))
var price2 = Number(prompt("Enter second product price"))

var operation = prompt("Enter operation +, -, *, / or %")

if (operation == "+") {
    alert(price1 + price2)
}
else if (operation == "-") {
    alert(price1 - price2)
}
else if (operation == "*") {
    alert(price1 * price2)
}
else if (operation == "/") {
    alert(price1 / price2)
}
else if (operation == "%") {
    alert(price1 % price2)
}