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
        break;
      }
    }
  
    return commonPrefix;
  }
  
  const strings = ["floor", "flour", "flower", "flow"];
  const result = findCommonPrefix(strings);
  console.log(result); // Output: "flo"
  

  //This function first sorts the array of strings to ensure that the strings with similar prefixes are adjacent. Then, it compares the characters of the first and last strings (after sorting) until a mismatch is found. The common prefix is built character by character until the mismatch occurs. In the example provided with the array ["floor", "flour", "flower", "flow"], the output will be "flo".

  