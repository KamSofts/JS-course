//useful string properties & methods

let userName = "Ram Prabu";
//Ram Prabu
//012345678 INDEX
//123456789 LENGTH

console.log(userName.length);       //9
console.log(userName.charAt(0));    //R
console.log(userName.indexOf("a")); //1 
console.log(userName.lastIndexOf("a")); //6
console.log(userName.toUpperCase());    //RAM PRABU
console.log(userName.toLowerCase());    //ram prabu

userName = "Ram_Prabu";
const IDX = userName.indexOf("_");
console.log(userName.substring(4)); //Prabu
console.log(userName.substring(0, IDX)); //Ram
console.log(userName.substring(IDX, userName.length)); //_Prabu

console.log(userName.slice());      //Ram_Prabu
console.log(userName.slice(4)); //Prabu
console.log(userName.slice(0, IDX)); //Ram
console.log(userName.slice(IDX, userName.length)); //_Prabu

userName = "   Ram_Prabu   ";
const S = "$".repeat(1);
console.log(S + userName.trim() + S); //$Ram_Prabu$
console.log(S + userName.replace(" ", "*") + S); //$*  Ram_Prabu   $   
console.log(S + userName.replaceAll(" ", "*") + S); //$***Ram_Prabu***$


