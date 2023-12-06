// 1. solution is simply to take the first characters of each word and if they match put it in results
// 2. results cannot be longer than shortest word
// loop through characters from position 0 to size of smallest word
// loop for each word, check the character
// if all equal add that character to the results
// if there not equal, then break out of both loops


// loop through characters
// loop through words
// do some work
// end word loop
// end character loop



// loop through characters
// loop through words
// do some work
// end word loop
// end character loop
// can do in single loop
// smallest word is your prefix
// loop through words
// set prefix to matching part of this word to smallest word

const strings = ["floor", "flour", "flower", "flow"];
const result = findCommonPrefix(strings);

function findCommonPrefix(strings) {
    if (!strings || strings.length === 0) {
      return '';
    }
  
    // Sort the array of strings to bring similar prefixes together
    strings.sort();
  
    // Take the first and last strings (sorted) and find the common prefix
    const firstStr = strings[0];
    const lastStr = strings[strings.length - 1];
    let commonPrefix = '';
  
    for (let i = 0; i < firstStr.length; i++) {
      if (firstStr[i] === lastStr[i]) {
        commonPrefix += firstStr[i];
      } else {
        break; // Exit the loop if a mismatch is found
      }
    }
  
    return commonPrefix;
  }
  
  console.log(result); // Output: "flo"
  

  //This function first sorts the array of strings to ensure that the strings with similar prefixes are adjacent. Then, it compares the characters of the first and last strings (after sorting) until a mismatch is found. The common prefix is built character by character until the mismatch occurs. In the example provided with the array ["floor", "flour", "flower", "flow"], the output will be "flo".





  // const strings = ["floor", "flour", "flower", "flow"];

  // const findCommonPrefix = (strings) => {
  //   if (!strings || strings.length === 0) {
  //     return '';
  //   }
  
  //   strings.sort();
  
  //   const firstStr = strings[0];
  //   const lastStr = strings[strings.length - 1];
  
  //   let commonPrefix = '';
  //   for (let i = 0; i < firstStr.length && firstStr[i] === lastStr[i]; i++) {
  //     commonPrefix += firstStr[i];
  //   }
  
  //   return commonPrefix;
  // };
  
  // const result = findCommonPrefix(strings); 
  // // or without this line console.log(findCommonPrefix(strings)); // Output: "flo"
  
  // console.log(result); // Output: "flo"



  