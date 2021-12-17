



let prompt= require('prompt-sync')()
let entry = prompt('enter an Input:  ').toLowerCase()

//let res=""
letters = 0
numbers = 0
characters = 0
for (i=0;i<entry.length;i++){
    if (entry.charCodeAt(i)>=97  && entry.charCodeAt(i)<=122){// if character unicode is this , then increment letter
        letters++}
    else if (entry.charCodeAt(i)>=48  && entry.charCodeAt(i)<=57){//if character code is this, then increment number
        numbers++}
    else{
        characters++
    }
}console.log('number of letters: ' +letters);
console.log('number of numbers: ' +numbers);
console.log('number of characters: ' +characters);
//C:\Users\mass\Desktop\perscholas2021\Homework\Week2_HW1_Strings\2charTypeCounter.js