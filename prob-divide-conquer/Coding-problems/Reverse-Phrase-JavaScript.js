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
