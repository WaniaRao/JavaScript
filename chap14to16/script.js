// Question 1

var studentNames = []

console.log(studentNames)


// Question 2

var studentNames = new Array()

console.log(studentNames)


// Question 3

var cities = ["Karachi", "Lahore", "Islamabad", "Multan"]

console.log(cities)


// Question 4

var numbers = [10, 20, 30, 40, 50]

console.log(numbers)


// Question 5

var result = [true, false, true, false]

console.log(result)


// Question 6

var mixedArray = ["Ali", 20, true, 5000]

console.log(mixedArray)


// Question 7

var education = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"]

document.write("<h2>Educational Qualifications</h2>")

document.write("1. " + education[0])
document.write("<br>2. " + education[1])
document.write("<br>3. " + education[2])
document.write("<br>4. " + education[3])
document.write("<br>5. " + education[4])
document.write("<br>6. " + education[5])
document.write("<br>7. " + education[6])
document.write("<br>8. " + education[7])


// Question 8

var names = ["Ali", "Sara", "Ahmed"]

var scores = [420, 380, 450]

var totalMarks = 500

var percentage1 = (scores[0] / totalMarks) * 100
var percentage2 = (scores[1] / totalMarks) * 100
var percentage3 = (scores[2] / totalMarks) * 100

document.write("<br><br>" + names[0] + " Score: " + scores[0] + " Percentage: " + percentage1 + "%")
document.write("<br>" + names[1] + " Score: " + scores[1] + " Percentage: " + percentage2 + "%")
document.write("<br>" + names[2] + " Score: " + scores[2] + " Percentage: " + percentage3 + "%")


// Question 9

var colors = ["Red", "Green", "Blue"]

document.write("<br><br>Colors: " + colors)


// a

var color1 = prompt("Enter a color to add at beginning")

colors.unshift(color1)

document.write("<br>After adding at beginning: " + colors)


// b

var color2 = prompt("Enter a color to add at end")

colors.push(color2)

document.write("<br>After adding at end: " + colors)


// c

colors.unshift("Black", "White")

document.write("<br>After adding two colors: " + colors)


// d

colors.shift()

document.write("<br>After deleting first color: " + colors)


// e

colors.pop()

document.write("<br>After deleting last color: " + colors)


// f

var index = Number(prompt("Enter index where you want to add color"))
var newColor = prompt("Enter color name")

colors.splice(index, 0, newColor)

document.write("<br>After adding color at index: " + colors)


// g

var deleteIndex = Number(prompt("Enter index from where you want to delete"))
var deleteNumber = Number(prompt("How many colors do you want to delete"))

colors.splice(deleteIndex, deleteNumber)

document.write("<br>After deleting colors: " + colors)


// Question 10

var studentScores = [78, 45, 92, 60, 85]

studentScores.sort()

console.log(studentScores)

document.write("<br><br>Student scores in ascending order: " + studentScores)


// Question 11

var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"]

var selectedCities = cities.slice(1, 4)

console.log(selectedCities)

document.write("<br><br>Selected Cities: " + selectedCities)


// Question 12

var arr = ["This ", " is ", " my ", " cat ",]

var sentence = arr.join("")

console.log(sentence)

document.write("<br><br>" + sentence)


// Question 13

var queue = []

queue.push("Ali")
queue.push("Ahmed")
queue.push("Sara")

console.log(queue)

document.write("<br><br>FIFO: " + queue)

var first = queue.shift()

console.log(first)
document.write("<br>First value: " + first)


// Question 14

var stack = []

stack.push("Book 1")
stack.push("Book 2")
stack.push("Book 3")

console.log(stack)

document.write("<br><br>LIFO: " + stack)

var last = stack.pop()

console.log(last)
document.write("<br>Last value: " + last)


// Question 15

var phones = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]

document.write("<br><br>")

document.write("<select>")

document.write("<option>" + phones[0] + "</option>")
document.write("<option>" + phones[1] + "</option>")
document.write("<option>" + phones[2] + "</option>")
document.write("<option>" + phones[3] + "</option>")
document.write("<option>" + phones[4] + "</option>")
document.write("<option>" + phones[5] + "</option>")

document.write("</select>")