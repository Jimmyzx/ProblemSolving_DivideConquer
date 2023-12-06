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
const originalPhrase = "I love programming";
const reversedResult = reverseWordsAndPhrase(originalPhrase);
console.log(reversedResult);

//The map function is used to iterate over each word in the wordsArray. For each word, the split('') method is used to convert the word into an array of characters, reverse() is used to reverse the order of the characters, and join('') is used to convert the array back to a string. This effectively reverses each individual word in the array. After reversing each word, the entire array of reversed words is itself reversed using the reverse() method. Finally, the reversed words are joined using join(' ') to form the reversed phrase. With these modifications, the function now reverses both the order of the words and the characters within each word, resulting in the desired output "gnimmargorp evol I" for the given example "I love programming".