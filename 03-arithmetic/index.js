/*
arithmetic expression is a combination of...
operands (values, variables, etc.,)
operators (+ - * / %)
that can be evaluated to a value
ex. y = x + 5;
*/

let students = 20;

students += 10; //students = students + 10;
console.log("Add", students);

students -= 5; //students = students - 5;
console.log("Less", students);

students *= 4; //students = students * 4;
console.log("Multiply", students);

students /= 2; //students = students / 2;
console.log("Division", students);

students += 1;
let isEven = students % 2;
console.log(isEven === 0 ? "Even" : "Odd");

/*
Operator precedence
1. parenthesis ()
2. exponents
3. multiplication & division
4. addition & subtraction
*/

let result = 1 + 2 * (3 + 4); 
/*
1 + 2 * (7)
1 + 14
*/
console.log(result); // 15

result = (1 + 2) * (3 + 4); 
/*
(3) * (7)
*/
console.log(result); // 21


