// A variable is a container for storing data
// A variable behaves as if it was the value that it contains

// Two steps:
// 1. Declaration (var, let, const)
// 2. Assignment (= assignment operator)

let firstName = "Ramprabu"; // strings
let age = 13;  // numbers
let isStudent = true; // booleans

age = age + 1;

console.log("Hello", firstName);
console.log("You are", age, "years old");
console.log("Enrolled:", isStudent)

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled: " + isStudent;