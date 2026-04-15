// if statement = a basic form of decision making
//                if a condition is true, then do something
//                if not, then don't do it

let age;

age = window.prompt("Enter your age");
age = Number(age);

if (isNaN(age)) {
    console.log("Not a Number");
} else {
    if (age >= 65) {
        console.log("Senior citizen");
    }
    else if (age >= 18) {
        console.log("Adult");
    }
    else if (age <= 0) {
        console.log("Invalid");
    }
    else {
        console.log("Child");
    }
}
