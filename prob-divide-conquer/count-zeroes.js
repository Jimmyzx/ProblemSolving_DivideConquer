function countZeroes(arr) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
  
      // Check if the mid element is 0
      if (arr[mid] === 0) {
        // Check if it's the first occurrence of 0
        if (mid === 0 || arr[mid - 1] === 1) {
          return arr.length - mid;
        } else {
          // There are more 0s to the left, so move the right pointer
          right = mid - 1;
        }
      } else {
        // The mid element is 1, so move the left pointer
        left = mid + 1;
      }
    }
  
    return 0; // No zeroes found in the array
  }

    countZeroes([1,1,1,1,0,0]) // 2
    countZeroes([1,0,0,0,0]) // 4
    countZeroes([0,0,0]) // 3
    countZeroes([1,1,1,1]) // 0
  