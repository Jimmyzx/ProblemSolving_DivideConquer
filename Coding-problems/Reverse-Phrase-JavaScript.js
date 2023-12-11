const originalPhrase = "I love programming";
const reversedResult = reversePhrase(originalPhrase);

function reversePhrase(inputString) {
    // Split the string into an array of words
    const wordsArray = inputString.split(' ');

    // Reverse the array of words
    const reversedArray = wordsArray.reverse();

    // Join the reversed words to form the reversed phrase
    const reversedPhrase = reversedArray.join(' ');

    return reversedPhrase;
}

// Example usage:
console.log(reversedResult);

//In this example, the reversePhrase function takes an input string, splits it into an array of words, reverses the order of the words, and then joins them back together to form the reversed phrase. The split and join functions are used with a space (' ') as the delimiter.


const reversedPhrase = reverseWordsAndPhrase(originalPhrase);
function reverseWordsAndPhrase(inputString) {
    // Split the string into an array of words
    const wordsArray = inputString.split(' ');

    // Reverse each word in the array
    const reversedWordsArray = wordsArray.map(word => word.split('').reverse().join(''));

    // Reverse the order of the words
    const reversedPhrase = reversedWordsArray.reverse().join(' ');

    return reversedPhrase;
}

// Example usage:
console.log(reversedPhrase);

//The map function is used to iterate over each word in the wordsArray. For each word, the split('') method is used to convert the word into an array of characters, reverse() is used to reverse the order of the characters, and join('') is used to convert the array back to a string. This effectively reverses each individual word in the array. After reversing each word, the entire array of reversed words is itself reversed using the reverse() method. Finally, the reversed words are joined using join(' ') to form the reversed phrase. With these modifications, the function now reverses both the order of the words and the characters within each word, resulting in the desired output "gnimmargorp evol I" for the given example "I love programming".

// simplest way to code this:
const reversedResult = reverseWordsAndPhrase(originalPhrase);
function reverseWordsAndPhrase(inputString) {
    return inputString
        .split(' ')                  // Split the string into an array of words
        .map(word => word.split('').reverse().join(''))  // Reverse each individual word
        .reverse()                        // Reverse the order of the words
        .join(' ');                       // Join the reversed words to form the reversed phrase
}

// Example usage:
console.log(reversedResult);

// this would also work for simplicity
const Phrase = reverseWordsAndPhrase("I Love Programming");
function reverseWordsAndPhrase(inputString) {
    return inputString
      .split(" ")
      .map((word) => word.split("").reverse().join(""))
      .reverse()
      .join(" ");
  }
  
 
  console.log(Phrase); // This will now log the reversed phrase and words " gnimmargorP evoL I"

const Phrase = reversePhrase("I Love Programming");
function reversePhrase(inputString) {
    return inputString
      .split(" ")
    //   .map((word) => word.split("").reverse().join(""))
      .reverse()
      .join(" ");
  }
  
 
  console.log(Phrase); // this will log reversed words only " Programming Love I "
  
  let Phrase = reversedPhrase ('I Love Programming')
  function reversedPhrase (str) {

    return str
    
    .split('').reverse().join('')

  }
  
  console.log(Phrase) // gnimmargorP evoL I


// Write a function that, given a string representing a sentence, returns the 
// sentence with the words in the same order but the letter in each word
// reversed.

// "I love programming" -> "I evol gnimmargorp”

// lowercase the entire string

// use var to create function 
// split() str
// reversed str
// join()

function reverseWords(str) {
    // console.log(str.split(' '));
    
    return str
    .split(' ')
    .reverse()
  }
  
  
  // console.log(reverseWords('I love programming'));
  
  
  function reverseWords1(str) {
    let wordsArr = str.split(' ');
    let reversedWordsArr = [];
  
    for (let i = 0; i < wordsArr.length; i++) {
      const wordArr = wordsArr[i].split('');
  
      reversedWordsArr.push(wordArr.reverse().join(''));
    }
  
    return reversedWordsArr.join(' ');
  }
  
  
  console.log(reverseWords1('I love programming'));