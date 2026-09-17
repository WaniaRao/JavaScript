// Assignment 17-20
// JavaScript Arrays and Loop


// Q1
var arr = [[], []];
console.log(arr);


// Q2
var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix);


// Q3
for (var i = 1; i <= 10; i++) {
    console.log(i);
}


// Q4
var num = +prompt("Enter table number");
var length = +prompt("Enter table length");

for (var i = 1; i <= length; i++) {
    console.log(num + " x " + i + " = " + (num * i));
}


// Q5
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


// Q6(a) Counting
for (var i = 1; i <= 15; i++) {
    console.log(i);
}


// Q6(b) Reverse Counting
for (var i = 10; i >= 1; i--) {
    console.log(i);
}


// Q6(c) Even
for (var i = 0; i <= 20; i += 2) {
    console.log(i);
}


// Q6(d) Odd
for (var i = 1; i <= 19; i += 2) {
    console.log(i);
}

// Q6(e) Series
for (var i = 2; i <= 20; i += 2) {
    console.log(i + "k");
}


// Q7
var A = ["cake", "apple pie", "cookie", "chips", "patties"];

var item = prompt("Enter item");

if (A.indexOf(item) !== -1) {
    alert(item + " is available");
} else {
    alert(item + " is not found in the list");
}


// Q8
var A = [24, 53, 78, 91, 12];

var largest = A[0];

for (var i = 1; i < A.length; i++) {
    if (A[i] > largest) {
        largest = A[i];
    }
}

console.log("Largest number is " + largest);


// Q9
var A = [24, 53, 78, 91, 12];

var smallest = A[0];

for (var i = 1; i < A.length; i++) {
    if (A[i] < smallest) {
        smallest = A[i];
    }
}

console.log("Smallest number is " + smallest);


// Q10
for (var i = 5; i <= 100; i += 5) {
    console.log(i);
}