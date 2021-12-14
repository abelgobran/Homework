
//Write Program to find if entered string is palindrome

let prompt = require ('prompt-sync')()
let userInput = prompt('Enter a word to see if it is a palindrome:  ')
let counter
let reverse = []
    
//
for(counter=userInput.length-1;counter>=0;counter--){
         reverse.push(userInput.charAt(counter))          
  }  
  reverse = reverse.join('')
if (reverse == userInput){
        console.log(reverse + ' is a palindrome' );
}else
        console.log(reverse + ' is not a palindrone');
