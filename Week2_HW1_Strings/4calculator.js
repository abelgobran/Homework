
//calculator , includes switch case, function

let prompt = require('prompt-sync')()
let input = prompt('Please select a valid option, ie, 1,2,3,4,5... \n 1. add \n 2.Subract \n 3. Multiply \n4. Divide \n 5. Exit \n choice: ')
console.log();
let num1 = prompt("Enter the first number")
let num2 = prompt('enter the second number')
// let choice = input
switch (input) {
    case '1':  
        
            add(num1,num2);//call add function to do calculation inside function.no console.log
        break;
    case '2':
        subtract(num1,num2);
        break;
    case '3':
        multiply(num1,num2);
        break;
    case '4':
        divide(num1,num2);
        break;  
    case '5':
        console.log("exiting...");
        break;
    default:
        console.log("your entry is invalid, try again later");
}

function add(a,b){
    output = a+b
    console.log('the answer is : ' + output);
}
function subtract(a,b){
    output = a-b
    console.log('the answer is : ' + output);
}
function multiply(a,b){
    outptut = a*b
    console.log('the answer is : ' + output);
}
function dvide(a,b){
    output = a/b
    console.log('the answer is : ' + output);
}