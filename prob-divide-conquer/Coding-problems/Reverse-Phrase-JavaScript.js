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
const originalPhrase = "I love programming";
const reversedResult = reversePhrase(originalPhrase);
console.log(reversedResult);


//In this example, the reversePhrase function takes an input string, splits it into an array of words, reverses the order of the words, and then joins them back together to form the reversed phrase. The split and join functions are used with a space (' ') as the delimiter.