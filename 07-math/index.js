// Math function
let x = 3.14;
console.log("Round of", x , "=", Math.round(x));
console.log("Floor of", x , "=", Math.floor(x));
console.log("Ceil of", x , "=", Math.ceil(x));
console.log("3 to the power of", x , "=", (Math.pow(x, 3)));
console.log("Square-root of", x , "=", Math.sqrt(x));

x = -3.14;
console.log("Absolute value of", x , "=", Math.abs(x));

let y = 5;
let z = 9;

console.log("Maximum", Math.max(x, y, z));
console.log("Minimum", Math.min(x, y, z));

console.log("PI value", Math.PI);
/*
Round of 3.14 = 3 
Floor of 3.14 = 3 
Ceil of 3.14 = 4 
3 to the power of 3.14 = 30.959144000000002 
Square-root of 3.14 = 1.772004514666935 
Absolute value of -3.14 = 3.14 
Maximum 9 
Minimum -3.14 
PI value 3.141592653589793
*/