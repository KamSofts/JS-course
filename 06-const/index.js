// const = a variable that can't be changed

const PI = 3.14159;
let radius;
let circumference;

radius = window.prompt("Enter the radius of a circle");
radius = Number(radius);

// PI = 420.69; 
// TypeError: Assignment to constant variable.

circumference = 2 * PI * radius;
console.log("Radius:", radius, "and the circumference is:", circumference);
// Radius: 9 and the circumference is: 56.54862