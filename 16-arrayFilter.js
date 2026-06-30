let ages = [17, 18, 19, 20, 61];

let teens = ages.filter(getTeens);

// Arrow function not working
// const getTeens = (e) => { 
function getTeens(e) {
    console.log("getTeens function :", e);
    return e < 20;
}

let adult = ages.filter(e => {
    console.log("adult variable :", e);
    return e > 18;
})

console.log("Teens :", teens); // using function
console.log("Adult :", adult); // using variable
console.log("Senior citizen :",
    ages.filter(e => e >= 60)); // one line : NO NEED { return e >= 60 }