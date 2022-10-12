/*1. Check if a triangle is equilateral-jеdnakostranicni, scalene or isosceles-jednakokraki, and print which triangle is yours.. Example: sides
of triangle are 3, 4, 5. This is scalene triangle.*/

var a = 3
var b = 4
var c = 5

if (a === b && b === c) {
    console.log("This is equilateral triangle")
} else if (a !== b && b !== c && c !== a) {
    console.log("This is scalene triangle")
} else { 
    console.log("This is isosceles triangle")
}



// 2. Perform arithmetic operations on two numbers. Operations are add, subtract, multiply, divide,
// modulus.

var a = 1
var b = 3
var operation = "modulus"

if (operation === "add") {
    console.log(a + b)
} else if (operation === "subtract") {
    console.log(a - b)
} else if (operation === "multiply") {
    console.log(a * b)
} else if (operation === "divide") {
    console.log(a / b)
} else if (operation === "modulus") {
    console.log(a % b)
}

// 3. Find the grade for input marks (you should have at least two input marks). Grades are:
// A (91-100), B (81-90), C (71-80), D (61-70), E (51-60). Optionally print if student has failed the exam.

var a = 80
var b = 70
var g = (a+b)/2

if (g >= 51 && g <= 60){
    console.log("Grade is E")
} else if (g >= 61 && g <= 70){
  console.log("Grade is D")  
} else if (g >= 71 && g <= 80){
    console.log("Grade is C")
} else if (g >= 81 && g <= 90){
    console.log("Grade is B")
} else if (g >= 91 && g <= 100){
    console.log("Grade is A")
} else if (g < 51) {
   console.log("Student has failed the exam")
} else console.log("Input is out of range")


// 4. Create two variables (or if you know how to do it - input fields). One should be a number, other
// should be a noun. Print on screen the number and pluralized form, like “5 cats” or “1 dog”. Bonus: Make
// it handle a few collective nouns like “sheep” and “geese”.

var num = 2
var stringified = num.toString()
var noun = "cat"
var s = "s"
var singular = stringified + "\xa0" + noun
var plural = stringified + "\xa0" + (noun + s)
if (num === 1){
    console.log(singular)
} else if (num>1){
    console.log(plural)
}


// 5. Write a program to show you age based on entered number (if you know how to create input field, if
// not create variable and give it a value). If your age is 18 or older - print “You are old enough to drive”,
// but if not than print how many years you need to turn 18. If your age is greater than 18 - try one
// example with 13.

var age = 13
var a = 18
var b = a - age

if (age >= 18){
    console.log("You are old enough to drive")
} else if (age < 18){
    console.log("You will be old enough to drive in" + "\xa0" + b + " years")
}

// 6. This one will continue on task 5. Create one more variable (or input field) and compare it with your
// age. Show how much is that older/younger than you with text for example “He/She is 13 years
// older/younger than me”. If you are the same age - print that you are the same age.

var age = 37
var a = 13
var b = age - a
var c = a - age

if (age > a){
    console.log("He/She is " + b + " years younger than me")
} else if (age < a){
    console.log("He/She is " + b + " years older than me")
} else if (age === a){
    console.log("We are the same age")
}

// 7. Create 5 variables (or input fields) with canine species. Create one more variable with canine and
// compare it with first 5 species. If it is match - write that on screen. Example: “This is German Shepherd
// called Neo”. If there is no match - write on screen that this is a mixed breed.

var a = "Golden retriever"
var b = "Poodle"
var c = "Bulldog"
var d = "Beagle"
var e = "German shepherd dog"

var f = "Poodle"

if (f === a || f === b || f === c || f === d || f === e){
    console.log("This is " + f + " called Neo")
} else if (f !== a && f !== b && f !== c && f !== d && f !== e){
    console.log("This is a mixed breed")
}
