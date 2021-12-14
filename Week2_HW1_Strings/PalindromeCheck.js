let prompt = require ('prompt-sync')()
let userInput = prompt('Enter a word to see if it is a palindrome:  ');
let counter
let reverseInput 

function check() {
    
    for(counter=userInput.length;counter>1;counter--){
       console.log(userInput.charAt(counter));
       return reverseInput;
    }
    
}
check(userInput)
console.log(reverseInput);

