// Type Conversion = change the datatype of a value to another
//                   (strings, numbers, booleans)

/*
let age = window.prompt("How old are you?");
console.log(typeof age);
age = Number(age);  // type conversion
age += 1;
console.log("Happy Birthday! You are", age, "years old");
*/

let a;
let b;
let x;
let y;
let z;

a = Number("Ram");
b = Boolean("Ram");
x = Number("3.14");
y = String(3.14);
z = Boolean("");

console.log(a, typeof a); // NaN number 
console.log(b, typeof b); // true boolean
console.log(x, typeof x);// 3.14 number
console.log(y, typeof y);// 3.14 string
console.log(z, typeof z);// false boolean
