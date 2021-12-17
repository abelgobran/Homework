let prompt = require('prompt-sync')()

 let word = prompt('enter a word to see if it matches: ').toLowerCase

var sentence = 'i went to the park today'


if (sentence.search(word)>0){
    let amount = sentence.search(word)
    console.log(amount.toString);
}else
    console.log('no words in the sentence');
