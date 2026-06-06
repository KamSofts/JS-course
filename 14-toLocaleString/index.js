// toLocaleString() = returns a string with a language
//                    sensitive representation of this number

// number.toLocaleString(locale, {options})

// locale = specify that language (undifined = default set in browser)
// options = object with formatting options

let myNum = 123456.789;
let result;

result = myNum.toLocaleString("en-US");
console.log("en-US", result);

result = myNum.toLocaleString("en-IN"); //Hindi = hi-IN, Tamil = ta-IN
console.log("en-IN", result);

result = myNum.toLocaleString("en-IN", { style: "currency", currency: "INR" });
console.log(result);

myNum = 98.7;
result = myNum.toLocaleString(undefined, { style: "unit", unit: "celsius" });
console.log(result);